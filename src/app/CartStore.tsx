import { create } from "zustand";

type Product = {
    id: number;
    image: string;
    title: string;
    price: number;
    rating: number;
};

type CartStore = {
    cart: Product[];
    cartCount: () => number;
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    clearCart: () => void;
};

const cartStore = create<CartStore>((set) => ({
    cart: [],
    cartCount: () => set.getState().cart.length,
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
    clearCart: () => set({ cart: [] }),
}));

export default cartStore;
