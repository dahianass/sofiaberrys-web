"use client";

import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isCustomDesign = product.category === "Tu Diseño" || product.price === 0;

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  // WhatsApp message differs for custom design products
  const whatsappUrl = isCustomDesign
    ? `https://wa.me/573107716085?text=${encodeURIComponent(
        "Hola SofiaBerry's, me gustaría crear un arreglo personalizado. ¿Podrían ayudarme a diseñarlo?"
      )}`
    : `https://wa.me/573107716085?text=${encodeURIComponent(
        `Hola SofiaBerry's, estoy interesado en el arreglo "${product.name}" ($${product.price})`
      )}`;

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full ${
        isCustomDesign
          ? "border-burgundy/30 ring-1 ring-burgundy/10"
          : "border-outline-variant/35"
      }`}
    >
      {/* Product Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-surface-container-low">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Custom Design overlay shimmer */}
        {isCustomDesign && (
          <div className="absolute inset-0 bg-gradient-to-br from-burgundy/10 via-transparent to-rose-blush/20 pointer-events-none" />
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-mint-soft text-nordic rounded-full text-[10px] font-semibold uppercase tracking-wider shadow-sm">
            {product.category}
          </span>
          {isCustomDesign && (
            <span className="px-3 py-1 bg-burgundy text-white rounded-full text-[10px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[11px]">palette</span>
              Personalizado
            </span>
          )}
          {product.featured && (
            <span className="px-3 py-1 bg-rose-blush text-burgundy rounded-full text-[10px] font-semibold uppercase tracking-wider shadow-sm">
              Destacado
            </span>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-[11px] text-on-surface-variant/80 font-medium font-sans">
              #{tag}
            </span>
          ))}
        </div>

        <h3 className="font-serif text-lg font-bold text-burgundy mb-2 group-hover:text-burgundy-dark transition-colors">
          {product.name}
        </h3>

        <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>

        {/* Action Row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
          {isCustomDesign ? (
            <span className="font-sans font-semibold text-sm text-on-surface-variant italic">
              Precio a consultar
            </span>
          ) : (
            <span className="font-sans font-bold text-lg text-burgundy">
              {formattedPrice}
            </span>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-xs font-semibold active:scale-95 transition-all shadow-sm hover:shadow-md ${
              isCustomDesign
                ? "bg-gradient-to-r from-burgundy to-rose-500 text-white hover:opacity-90"
                : "bg-burgundy text-white hover:bg-burgundy-dark"
            }`}
          >
            <span className="material-symbols-outlined text-sm">
              {isCustomDesign ? "palette" : "chat"}
            </span>
            {isCustomDesign ? "Diseñar" : "Pedir"}
          </a>
        </div>
      </div>
    </div>
  );
}
