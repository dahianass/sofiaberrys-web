"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { id: "all", name: "Todos", icon: "grid_view" },
  { id: "Aniversario", name: "Aniversario", icon: "favorite" },
  { id: "Cumpleaños", name: "Cumpleaños", icon: "cake" },
  { id: "Graduación", name: "Graduación", icon: "celebration" },
  { id: "Nuevo Hogar", name: "Nuevo Hogar", icon: "home" },
  { id: "Corporativo", name: "Corporativo", icon: "redeem" },
  { id: "Porque sí", name: "Porque sí", icon: "auto_awesome" },
];

interface CategoryPickerProps {
  selectedCategory: string;
}

export default function CategoryPicker({
  selectedCategory,
}: CategoryPickerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelect = (categoryId: string) => {
    const params = new URLSearchParams();
    // Reset to page 1 when changing category
    params.set("page", "1");
    if (categoryId !== "all") {
      params.set("category", categoryId);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <section className="py-16 bg-surface-container-low border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-nordic font-semibold">
            Explora por Ocasión
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="p-2 rounded-full border border-outline-variant hover:bg-white transition-all text-burgundy cursor-pointer hover:shadow-sm active:scale-90"
            >
              <span className="material-symbols-outlined select-none">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="p-2 rounded-full border border-outline-variant hover:bg-white transition-all text-burgundy cursor-pointer hover:shadow-sm active:scale-90"
            >
              <span className="material-symbols-outlined select-none">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Horizontal scroll category container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleSelect(category.id)}
                className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer outline-none focus:ring-2 focus:ring-burgundy/40 rounded-xl p-1"
              >
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-burgundy text-white shadow-md scale-105"
                      : "bg-white text-burgundy shadow-sm group-hover:shadow-md group-hover:scale-105"
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl sm:text-3xl select-none">
                    {category.icon}
                  </span>
                </div>
                <span
                  className={`font-sans text-xs sm:text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-burgundy font-bold"
                      : "text-on-surface-variant group-hover:text-burgundy font-medium"
                  }`}
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
