const DUMMY_PRODUCTS = [
  {
    _id: "1",
    name: "Sony WH-1000XM5 Wireless Headphones",
    slug: { current: "sony-wh-1000xm5" },
    images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"],
    price: 398,
    discount: 50,
    stock: 15,
    status: "hot",
    categories: ["Headphones", "Electronics"],
    brand: { title: "Sony" },
    description: "Industry-leading noise canceling with two processors and 8 microphones."
  },
  {
    _id: "2",
    name: "Apple MacBook Pro 16-inch",
    slug: { current: "apple-macbook-pro-16" },
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80"],
    price: 2499,
    discount: 200,
    stock: 5,
    status: "hot",
    categories: ["Laptops", "Electronics"],
    brand: { title: "Apple" },
    description: "M3 Max chip, 36GB Memory, 1TB SSD."
  },
  {
    _id: "3",
    name: "Herman Miller Aeron Chair",
    slug: { current: "herman-miller-aeron" },
    images: ["https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=500&q=80"],
    price: 1800,
    discount: 0,
    stock: 22,
    status: "sale",
    categories: ["Furniture", "Office"],
    brand: { title: "Herman Miller" },
    description: "Ergonomic office chair with breathable mesh."
  },
  {
    _id: "4",
    name: "Dyson V15 Detect Absolute",
    slug: { current: "dyson-v15" },
    images: ["https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500&q=80"],
    price: 749,
    discount: 50,
    stock: 8,
    status: "hot",
    categories: ["Appliances", "Home"],
    brand: { title: "Dyson" },
    description: "Powerful intelligent cordless vacuum."
  }
];

const DUMMY_CATEGORIES = [
  { _id: "c1", title: "Electronics", slug: { current: "electronics" }, image: "https://picsum.photos/80/80", productCount: 20 },
  { _id: "c2", title: "Laptops", slug: { current: "laptops" }, image: "https://picsum.photos/80/80", productCount: 5 },
  { _id: "c3", title: "Headphones", slug: { current: "headphones" }, image: "https://picsum.photos/80/80", productCount: 15 },
  { _id: "c4", title: "Furniture", slug: { current: "furniture" }, image: "https://picsum.photos/80/80", productCount: 8 },
  { _id: "c5", title: "Appliances", slug: { current: "appliances" }, image: "https://picsum.photos/80/80", productCount: 12 },
];

const DUMMY_BRANDS = [
  { _id: "b1", title: "Apple", slug: { current: "apple" }, image: "https://picsum.photos/100/60" },
  { _id: "b2", title: "Sony", slug: { current: "sony" }, image: "https://picsum.photos/100/60" },
  { _id: "b3", title: "Herman Miller", slug: { current: "herman-miller" }, image: "https://picsum.photos/100/60" },
  { _id: "b4", title: "Dyson", slug: { current: "dyson" }, image: "https://picsum.photos/100/60" },
];

export const getCategories = async (quantity?: number) => DUMMY_CATEGORIES;
export const getAllBrands = async () => DUMMY_BRANDS;
export const getLatestBlogs = async () => [];
export const getDealProducts = async () => DUMMY_PRODUCTS;
export const getProductBySlug = async (slug: string) => DUMMY_PRODUCTS.find(p => p.slug.current === slug) || null;
export const getBrand = async (slug: string) => {
  const match = DUMMY_PRODUCTS.find(p => p.slug.current === slug);
  return match ? [{ brandName: match.brand.title }] : null;
};
export const getMyOrders = async (userId: string) => [];
export const getAllBlogs = async (quantity: number) => [];
export const getSingleBlog = async (slug: string) => null;
export const getBlogCategories = async () => [];
export const getOthersBlog = async (slug: string, quantity: number) => [];
