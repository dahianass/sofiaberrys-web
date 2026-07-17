export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  bento_size?: 'large' | 'small' | null;
  created_at?: string;
}

export interface PaginatedProducts {
  products: Product[];
  total: number;
  totalPages: number;
  currentPage: number;
}
