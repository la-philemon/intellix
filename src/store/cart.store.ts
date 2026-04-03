import { create } from "zustand";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
}

interface CartState {
    items: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    addToCart: (product) => set((state) =>{
        const existing = state.items.find((item) => item.id === product.id);
        if (existing){
            return {
                items: state.items.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                )
            }
        } else {
            return {
                items: [...state.items, product]
            };
        }
    }),
    removeFromCart: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id),
    })),
    updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map((item) =>
            item.id === id ? { ...item, quantity : Math.max(1, quantity) } : item
        )
    })),
    clearCart: () => set({ items: [] }),
}));