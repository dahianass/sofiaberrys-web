"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  category,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Build href with preserved category and given page
  const buildHref = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    if (category && category !== "all") {
      params.set("category", category);
    }
    return `/?${params.toString()}`;
  };

  // Visible page numbers (always show prev, next, first, last, and ±1 of current)
  const pages: (number | "…")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (
      (i === currentPage - 2 && currentPage - 2 > 1) ||
      (i === currentPage + 2 && currentPage + 2 < totalPages)
    ) {
      pages.push("…");
    }
  }

  // Deduplicate consecutive ellipsis
  const dedupedPages = pages.filter(
    (p, i) => !(p === "…" && pages[i - 1] === "…")
  );

  return (
    <nav
      aria-label="Paginación de productos"
      className="flex items-center justify-center gap-2 mt-12"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(currentPage - 1)}
          className="p-2.5 rounded-full border border-outline-variant text-burgundy hover:bg-white hover:shadow-sm active:scale-90 transition-all"
          aria-label="Página anterior"
        >
          <span className="material-symbols-outlined text-lg leading-none select-none">
            chevron_left
          </span>
        </Link>
      ) : (
        <span className="p-2.5 rounded-full border border-outline-variant/30 text-on-surface-variant/30 cursor-not-allowed">
          <span className="material-symbols-outlined text-lg leading-none select-none">
            chevron_left
          </span>
        </span>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1.5">
        {dedupedPages.map((page, idx) =>
          page === "…" ? (
            <span
              key={`ellipsis-${idx}`}
              className="w-9 h-9 flex items-center justify-center text-on-surface-variant font-sans text-sm"
            >
              …
            </span>
          ) : (
            <Link
              key={page}
              href={buildHref(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`w-9 h-9 flex items-center justify-center rounded-full font-sans text-sm font-semibold transition-all duration-200 ${
                page === currentPage
                  ? "bg-burgundy text-white shadow-md scale-105"
                  : "border border-outline-variant text-nordic hover:bg-white hover:shadow-sm active:scale-90"
              }`}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={buildHref(currentPage + 1)}
          className="p-2.5 rounded-full border border-outline-variant text-burgundy hover:bg-white hover:shadow-sm active:scale-90 transition-all"
          aria-label="Página siguiente"
        >
          <span className="material-symbols-outlined text-lg leading-none select-none">
            chevron_right
          </span>
        </Link>
      ) : (
        <span className="p-2.5 rounded-full border border-outline-variant/30 text-on-surface-variant/30 cursor-not-allowed">
          <span className="material-symbols-outlined text-lg leading-none select-none">
            chevron_right
          </span>
        </span>
      )}
    </nav>
  );
}
