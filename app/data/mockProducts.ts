export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  bentoSize?: 'large' | 'small';
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Serenata de Lavanda",
    description: "Un arreglo floral espectacular en tonos lila y blanco, con hortensias, espigas de lavanda y selectos frutos del bosque. Diseñado para transmitir calma y sofisticación.",
    price: 85.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD9hs1laGBHM19Xuxg4OhFp1qmM9zNIn508uS1gFkt7RrrKhxBv-t0VhF9pr_FJlSoPNoDb5WnISBY7kIlTod0WBc0JdXVydNSqVbYTpBTx3R_AXDn8lS6sYxmebr3wG9nvQGgNeXLUqYCb0nsbuzaUSxX1dnB312grBsqKcNQ-9gFnuLQ6963xeAML6RexP-1CkbS2YN8_nbvKxdF5CeYlljYhmVisYgAArALrV1wca6cn9NhHmAgdPPPJ4M8vBxs4MDX8iv1C3o",
    category: "Aniversario",
    tags: ["Hortensias", "Lavanda", "Frutos del bosque", "Premium"],
    featured: true,
    bentoSize: "large",
  },
  {
    id: "2",
    name: "Dulce Amanecer",
    description: "Tulipanes rosa brillante combinados con fresas frescas cortadas artísticamente en la base del jarrón de cristal. Una opción fresca y alegre para comenzar el día.",
    price: 48.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdsomS7nnsePfxTX-KQweVtHddroKt7ksj9di8q0G-NLsMR-bXc7JdRoUvj2X_fNV-dn-YIUOPmwKaUrfFYBXJT4g9BNuFkRSeQXOvJ0Cwh_WiCpCfs3EX-7WSO74ixkOAQc8Au00IIXKMm98hCNVREj-PoxN6u5ffLAI04HWMMMXo5EvbEN9HF3JP-7tRN97-r08B9H08RZnNHKrCzdjbYoLjZgrXW0bI8bx9r3ev9MOVZ5lpDL4WX1E56NQN9ikK_0b0XJgpXYM",
    category: "Cumpleaños",
    tags: ["Tulipanes", "Fresas", "Minimalista", "Alegre"],
    featured: true,
    bentoSize: "small",
  },
  {
    id: "3",
    name: "Otoño Dorado",
    description: "Un jarrón de cobre artesanal que exhibe dalias en tonos otoñales, espigas de trigo seco y bayas de color amarillo dorado. Ideal para aportar calidez y textura.",
    price: 55.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRJ7cXudx5nDILMzD4MjduBMDrybPyhrGyJ00gtVGg5_pn73-keE-hiUGvj3ZA8VVl_KvkfEmoGnNWx7ewD2Z33fLQRljQEn_O62JUIFx9gwcAHpo6AhXoOAlrkqwFTS6qnzF1YRHuXIZyVhcVPkyRTVTftMzd4f3QmAf-nEE6uf1koIkU2ks3gyXNecyVXqVc7W7-GF-ANi1Ewmk2G2XPuE1PQ82olEgzdxyaKP6cFpbOU6Fe_b17r48MswZGlH3hpNkxE-q-_OA",
    category: "Nuevo Hogar",
    tags: ["Dalias", "Bayas", "Trigo", "Rústico"],
    featured: true,
    bentoSize: "small",
  },
  {
    id: "4",
    name: "Caja Regalo Menta & Fresas",
    description: "Exclusiva caja de regalo combinando flores de rosas blancas y follaje menta suave, acompañadas de fresas bañadas en chocolate premium.",
    price: 65.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfAo-7oeJ6m6Qf1_y5f-Y6tWfGjG4IeR9ZgkB8Sq4GWHvJNZxJlxnH5y5PLTQBf7g6uAQafMqzHkt0596EOMVk-PNQzKnBpMiY8zRm9OxSkYKFBU2JjB2QaKG110X1OsVA0KViVTcstQ1Z2UunM7xEzodxPzZlwKoZ6ROR2rECt3l0MQO3qC4AUmNZ_rHI_NdB6-kzqeKgqTPc7uYgoN893OszoW8Wb2pwzM_ucgFvvXllw7g2FF-sG5CmPPLOKONm9ZeqzxFUCEc",
    category: "Porque sí",
    tags: ["Rosas blancas", "Fresas con chocolate", "Menta suave"],
    featured: false,
  },
  {
    id: "5",
    name: "Ramillete Graduación Exitosa",
    description: "Elegante bouquet premium con rosas amarillas, lirios perfumados y bayas de temporada, envuelto en papel craft de alta calidad.",
    price: 42.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRJ7cXudx5nDILMzD4MjduBMDrybPyhrGyJ00gtVGg5_pn73-keE-hiUGvj3ZA8VVl_KvkfEmoGnNWx7ewD2Z33fLQRljQEn_O62JUIFx9gwcAHpo6AhXoOAlrkqwFTS6qnzF1YRHuXIZyVhcVPkyRTVTftMzd4f3QmAf-nEE6uf1koIkU2ks3gyXNecyVXqVc7W7-GF-ANi1Ewmk2G2XPuE1PQ82olEgzdxyaKP6cFpbOU6Fe_b17r48MswZGlH3hpNkxE-q-_OA",
    category: "Graduación",
    tags: ["Rosas", "Lirios", "Bayas", "Celebración"],
    featured: false,
  },
  {
    id: "6",
    name: "Centro de Mesa Ejecutivo",
    description: "Diseño minimalista y moderno ideal para oficinas o eventos corporativos, con flores de anturios exóticos y eucalipto preservado.",
    price: 95.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD9hs1laGBHM19Xuxg4OhFp1qmM9zNIn508uS1gFkt7RrrKhxBv-t0VhF9pr_FJlSoPNoDb5WnISBY7kIlTod0WBc0JdXVydNSqVbYTpBTx3R_AXDn8lS6sYxmebr3wG9nvQGgNeXLUqYCb0nsbuzaUSxX1dnB312grBsqKcNQ-9gFnuLQ6963xeAML6RexP-1CkbS2YN8_nbvKxdF5CeYlljYhmVisYgAArALrV1wca6cn9NhHmAgdPPPJ4M8vBxs4MDX8iv1C3o",
    category: "Corporativo",
    tags: ["Anturios", "Eucalipto", "Elegante"],
    featured: false,
  }
];

export const mockCategories = [
  { id: "all", name: "Todos", icon: "grid_view" },
  { id: "Aniversario", name: "Aniversario", icon: "favorite" },
  { id: "Cumpleaños", name: "Cumpleaños", icon: "cake" },
  { id: "Graduación", name: "Graduación", icon: "celebration" },
  { id: "Nuevo Hogar", name: "Nuevo Hogar", icon: "home" },
  { id: "Corporativo", name: "Corporativo", icon: "redeem" },
  { id: "Porque sí", name: "Porque sí", icon: "auto_awesome" }
];
