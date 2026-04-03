import { fetchApi }  from "./api";
import { Product, Category } from "../types/product";

export const  productService =  {
    getById: async (id: string): Promise<Product> => {
        return await fetchApi(`/products/${id}`);
    },
    getAll: async (limit: number = 40, skip: number = 0): Promise<{ products: Product[]; total: number }> => {
        return await fetchApi(`/products?limit=${limit}&skip=${skip}`);
    },
    getByCategory: async (category: string): Promise<{ products: Product[]; total: number }> => {
        return await fetchApi(`/products/category/${category}`);
    },
    search: async (query: string): Promise<{ products: Product[]; total: number }> => {
        return await fetchApi(`/products/search?q=${encodeURIComponent(query)}`);
    },
    getCategories: async (): Promise<Category[]> => {
        return await fetchApi(`/products/categories`);
    },
    getRandomProduct: async (limit: number = 10): Promise<Product[]> => {
        const data = await fetchApi(`/products?limit=${limit}&skip=${Math.floor(Math.random() * 100)}`);
        const shuffled = data.products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, limit);
    },
    getRelatedProducts: async (category: string, excludeId: number, limit: number = 5): Promise<Product[]> => {
        const data = await fetchApi(`/products/category/${category}`);
        return data.products.filter((p: Product) => p.id !== excludeId).slice(0, limit);
    }
};