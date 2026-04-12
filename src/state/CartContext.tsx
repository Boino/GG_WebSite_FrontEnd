import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, Product } from "../types";
import { productById } from "../data/products";

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, selectedOptions: Record<string, string>, quantity?: number) => void;
  removeItem: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_KEY = "gg-clone-cart";

const toKey = (productId: string, options: Record<string, string>) =>
  `${productId}::${Object.entries(options)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join("|")}`;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as CartItem[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const addItem: CartContextValue["addItem"] = (product, selectedOptions, quantity = 1) => {
    const key = toKey(product.id, selectedOptions);
    setItems((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) => (item.key === key ? { ...item, quantity: item.quantity + quantity } : item));
      }
      return [...prev, { key, productId: product.id, quantity, selectedOptions }];
    });
  };

  const removeItem = (key: string) => setItems((prev) => prev.filter((item) => item.key !== key));
  const setQuantity = (key: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const count = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);

  const subtotal = useMemo(
    () =>
      items.reduce((total, item) => {
        const product = productById.get(item.productId);
        if (!product) return total;
        return total + item.quantity * product.price;
      }, 0),
    [items]
  );

  const value: CartContextValue = { items, count, subtotal, addItem, removeItem, setQuantity, clearCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

