"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger transition animation on mount
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image and overlay */}
      <div 
        className={`absolute inset-0 z-0 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfAo-7oeJ6m6Qf1_y5f-Y6tWfGjG4IeR9ZgkB8Sq4GWHvJNZxJlxnH5y5PLTQBf7g6uAQafMqzHkt0596EOMVk-PNQzKnBpMiY8zRm9OxSkYKFBU2JjB2QaKG110X1OsVA0KViVTcstQ1Z2UunM7xEzodxPzZlwKoZ6ROR2rECt3l0MQO3qC4AUmNZ_rHI_NdB6-kzqeKgqTPc7uYgoN893OszoW8Wb2pwzM_ucgFvvXllw7g2FF-sG5CmPPLOKONm9ZeqzxFUCEc")`,
          }}
          aria-label="Premium floral arrangement featuring deep pink peonies, white ranunculus, and vibrant red raspberries"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Hero Content */}
      <div 
        className={`relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 w-full transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-2xl space-y-6">
          <span className="inline-block px-4 py-1.5 bg-mint-soft text-nordic rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse">
            Novedades de Temporada
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-burgundy font-bold leading-tight text-shadow-premium">
            Elegancia Natural en cada Detalle
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Creamos experiencias sensoriales que combinan la delicadeza de las flores frescas con la frescura de las bayas de temporada. Arte botánico para momentos inolvidables.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-burgundy text-white hover:bg-burgundy-dark px-8 sm:px-10 py-3 sm:py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:shadow-xl hover:translate-y-[-2px] transition-all active:scale-95">
              Ver Catálogo
            </button>
            <button className="border border-outline text-burgundy hover:bg-white/50 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all">
              Saber más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
