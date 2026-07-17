import { supabase } from '@/lib/supabase';
import { Product, PaginatedProducts } from '@/lib/types';

const PAGE_SIZE = 6;

interface GetProductsOptions {
  page?: number;
  category?: string;
  pageSize?: number;
}

export async function getProducts({
  page = 1,
  category,
  pageSize = PAGE_SIZE,
}: GetProductsOptions = {}): Promise<PaginatedProducts> {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .order('featured', { ascending: false })
    .order('created_at', { ascending: true });

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }

  const { data, error, count } = await query.range(from, to);

  if (error) {
    console.error('[getProducts] Supabase error:', error.message);
    return { products: [], total: 0, totalPages: 0, currentPage: page };
  }

  const total = count ?? 0;
  const totalPages = Math.ceil(total / pageSize);

  return {
    products: (data as Product[]) ?? [],
    total,
    totalPages,
    currentPage: page,
  };
}
