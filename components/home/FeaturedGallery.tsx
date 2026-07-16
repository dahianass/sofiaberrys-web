"use client";

import { mockProducts } from "@/app/data/mockProducts";

export default function FeaturedGallery() {
  // Filter for featured products
  const featured = mockProducts.filter((p) => p.featured);

  // Find the large item and the list of small items
  const largeItem = featured.find((p) => p.bentoSize === "large") || featured[0];
  const smallItems = featured.filter((p) => p.bentoSize === "small");

  // WhatsApp click handler for exploration
  const getWhatsAppLink = (name: string, price: number) => {
    return `https://wa.me/573107716085?text=${encodeURIComponent(
      `Hola SofiaBerry's, me interesa saber más sobre el arreglo destacado "${name}"`
    )}`;
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-bold">
            Colección Destacada
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Nuestros arreglos más solicitados, diseñados para capturar la esencia de la temporada con texturas orgánicas.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-auto md:h-[800px]">
          {/* Large Item (Left or Main) */}
          {largeItem && (
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-[400px] md:h-auto border border-outline-variant/20">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${largeItem.image}")` }}
                role="img"
                aria-label={largeItem.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                <h3 className="font-serif text-2xl font-bold mb-1">
                  {largeItem.name}
                </h3>
                <p className="font-sans text-sm opacity-90 mb-4">
                  {largeItem.description.split(".")[0]}
                </p>
                <a
                  href={getWhatsAppLink(largeItem.name, largeItem.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start bg-white text-burgundy font-semibold hover:bg-rose-blush px-6 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-colors shadow-sm active:scale-95"
                >
                  Explorar
                </a>
              </div>
            </div>
          )}

          {/* Small Items (Right Stack) */}
          <div className="md:col-span-4 gap-6 md:gap-8 flex flex-col">
            {smallItems.map((item) => (
              <div
                key={item.id}
                className="flex-1 group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-[250px] md:h-auto border border-outline-variant/20"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${item.image}")` }}
                  role="img"
                  aria-label={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="font-serif text-lg font-bold">
                    {item.name}
                  </h3>
                  <a
                    href={getWhatsAppLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs font-semibold text-rose-blush hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1.5"
                  >
                    Ver detalles <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
