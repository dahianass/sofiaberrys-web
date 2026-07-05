"use client";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  stars: number;
  avatarBg: string;
  avatarText: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Fernanda G.",
    role: "Cliente frecuente",
    text: '"El detalle de las bayas frescas le da un toque único que no he visto en ninguna otra florería. Simplemente exquisito."',
    stars: 5,
    avatarBg: "bg-rose-blush/60",
    avatarText: "text-burgundy-dark",
    initials: "MF",
  },
  {
    id: "2",
    name: "Carlos Alberto R.",
    role: "Aniversario",
    text: '"Pedí un arreglo para el aniversario de mis padres y quedaron maravillados. La fragancia duró más de una semana."',
    stars: 5,
    avatarBg: "bg-mint-soft",
    avatarText: "text-nordic",
    initials: "CA",
  },
  {
    id: "3",
    name: "Lucía Mendez",
    role: "Regalo de Cumpleaños",
    text: '"Atención impecable por WhatsApp. Me ayudaron a elegir las flores perfectas según el significado que buscaba."',
    stars: 5,
    avatarBg: "bg-cream-gift",
    avatarText: "text-burgundy",
    initials: "LM",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-nordic font-bold">
          Voces de Nuestra Comunidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:translate-y-[-8px] transition-all duration-300 border border-outline-variant/20 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex text-burgundy mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined select-none"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-sans text-sm italic text-on-surface-variant mb-6 leading-relaxed">
                  {t.text}
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-outline-variant/10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${t.avatarBg} ${t.avatarText}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans text-sm text-nordic font-bold">
                    {t.name}
                  </p>
                  <p className="text-xs text-outline">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
