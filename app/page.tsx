import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import CategoryPicker from "@/components/home/CategoryPicker";
import ProductCard from "@/components/home/ProductCard";
import Pagination from "@/components/home/Pagination";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";
import MobileBottomNav from "@/components/home/MobileBottomNav";
import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";
import { getProducts } from "@/lib/queries/products";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Resolve searchParams server-side (Next.js 15+/16 API)
  const params = await searchParams;
  const pageParam = typeof params.page === "string" ? params.page : "1";
  const categoryParam =
    typeof params.category === "string" ? params.category : "all";

  const currentPage = Math.max(1, parseInt(pageParam, 10) || 1);

  // Fetch paginated products from Supabase server-side
  const { products, totalPages } = await getProducts({
    page: currentPage,
    category: categoryParam,
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header bar */}
      <Navbar />

      <main className="flex-grow pt-20 pb-20 md:pb-0">
        {/* Hero Banner */}
        <Hero />

        {/* Occasion / Category Selector — reads selectedCategory from URL */}
        <CategoryPicker selectedCategory={categoryParam} />

        {/* Dynamic Products Grid */}
        <section className="py-20 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl text-nordic font-bold">
              Catálogo de Arreglos
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Explora nuestra colección especial de flores frescas y fresas de
              temporada, diseñadas con amor y presentadas con elegancia.
            </p>
          </div>

          {products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Server-side pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                category={categoryParam}
              />
            </>
          ) : (
            <div className="text-center py-16 text-on-surface-variant font-medium font-sans">
              No hay arreglos disponibles en esta categoría por el momento.
            </div>
          )}
        </section>

        {/* Premium Bento Grid Gallery */}
        <FeaturedGallery />

        {/* Testimonials and Community Feedback */}
        <Testimonials />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Navigation bar for phone sizes */}
      <MobileBottomNav />

      {/* Floating Call to Action */}
      <FloatingWhatsApp />
    </div>
  );
}
