import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "SofiaBerry's | Flora & Berries",
  description: "Creamos experiencias sensoriales que combinan la delicadeza de las flores frescas con la frescura de las bayas de temporada. Arte botánico para momentos inolvidables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-on-surface selection:bg-rose-blush selection:text-burgundy-dark">
        {children}
      </body>
    </html>
  );
}
