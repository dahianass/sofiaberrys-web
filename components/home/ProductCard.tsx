"use client";

import { Product } from "@/app/data/mockProducts";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  // Generates WhatsApp message link for the product
  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
    `Hola SofiaBerry's, estoy interesado en el arreglo "${product.name}" ($${product.price})`
  )}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-outline-variant/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      {/* Product Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-surface-container-low">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="px-3 py-1 bg-mint-soft text-nordic rounded-full text-[10px] font-semibold uppercase tracking-wider shadow-sm">
            {product.category}
          </span>
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
          <span className="font-sans font-bold text-lg text-burgundy">
            {formattedPrice}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-burgundy text-white hover:bg-burgundy-dark px-4 py-2 rounded-full font-sans text-xs font-semibold active:scale-95 transition-all shadow-sm hover:shadow-md"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}
