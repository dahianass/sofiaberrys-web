"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center h-20">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            <img
              alt="SofiaBerry's Logo"
              className="h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2WX57iLF6pQIG4bnzrDgAxwU1bJAXc9JRYMCjAjMRPiYo4vjJ0kdQh7Z3-NewvalZ1yTzwEwk5bguahh2pBss6sXdwWA3ukatfz3Ub-CJwjqsn-Kb0POrcwNdyPU2lCGH2bUBgQtjEQzQ_V1VqL5WhcESKvssgANp024wNAKxgAbF07Mo6JjTPgtAdunnGxhIucuQAsJpgyT1IIfXgHRxk3pzBEjeoeoKmEYjLsz7iMcmAs1gWIiFHc40DlrBUrE3Z1EUDvxxfs"
            />
          </div>
          <span className="font-serif text-2xl md:text-3xl text-burgundy font-bold tracking-tight">
            SofiaBerry's
          </span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#"
            className="font-sans text-sm text-burgundy font-bold border-b-2 border-burgundy pb-1 transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="font-sans text-sm text-on-surface-variant hover:text-burgundy transition-colors duration-300 pb-1"
          >
            Catálogo
          </Link>
          <Link
            href="#"
            className="font-sans text-sm text-on-surface-variant hover:text-burgundy transition-colors duration-300 pb-1"
          >
            Destacados
          </Link>
          <Link
            href="#"
            className="font-sans text-sm text-on-surface-variant hover:text-burgundy transition-colors duration-300 pb-1"
          >
            Contacto
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-burgundy text-white hover:bg-burgundy-dark px-6 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider active:scale-95 transition-all shadow-md hover:shadow-lg"
          >
            Escríbenos
          </a>
        </div>
      </div>
    </nav>
  );
}
