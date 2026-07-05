"use client";

import { FormEvent, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-surface-container/60 w-full py-16 border-t border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Logo column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              alt="SofiaBerry's Logo small"
              className="h-10 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2WX57iLF6pQIG4bnzrDgAxwU1bJAXc9JRYMCjAjMRPiYo4vjJ0kdQh7Z3-NewvalZ1yTzwEwk5bguahh2pBss6sXdwWA3ukatfz3Ub-CJwjqsn-Kb0POrcwNdyPU2lCGH2bUBgQtjEQzQ_V1VqL5WhcESKvssgANp024wNAKxgAbF07Mo6JjTPgtAdunnGxhIucuQAsJpgyT1IIfXgHRxk3pzBEjeoeoKmEYjLsz7iMcmAs1gWIiFHc40DlrBUrE3Z1EUDvxxfs"
            />
            <span className="font-serif text-xl font-bold text-burgundy">
              SofiaBerry's
            </span>
          </div>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            Artesanía floral y frutal para los gustos más exigentes. Diseños orgánicos que despiertan emociones.
          </p>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-3 font-sans text-sm">
          <h4 className="font-sans text-xs font-bold text-burgundy uppercase tracking-widest mb-1">
            Información
          </h4>
          <a href="#" className="text-on-surface-variant hover:text-burgundy transition-colors w-fit">
            Política de Privacidad
          </a>
          <a href="#" className="text-on-surface-variant hover:text-burgundy transition-colors w-fit">
            Términos del Servicio
          </a>
          <a href="#" className="text-on-surface-variant hover:text-burgundy transition-colors w-fit">
            Envíos y Entregas
          </a>
          <a href="#" className="text-on-surface-variant hover:text-burgundy transition-colors w-fit">
            Contáctanos
          </a>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6 font-sans">
          <h4 className="font-sans text-xs font-bold text-burgundy uppercase tracking-widest">
            Suscríbete
          </h4>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              className="flex-1 bg-white border border-outline/30 px-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-burgundy/40 focus:border-transparent outline-none transition-all"
              placeholder="Tu correo electrónico"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-burgundy text-white hover:bg-burgundy-dark px-6 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider active:scale-95 transition-all shadow-sm"
            >
              Ok
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-secondary font-semibold animate-pulse">
              ¡Gracias por suscribirte a nuestro boletín!
            </p>
          )}
          <p className="text-xs text-on-surface-variant/80">
            © {new Date().getFullYear()} SofiaBerry's. Crafted for Artisanal Beauty.
          </p>
        </div>
      </div>
    </footer>
  );
}
