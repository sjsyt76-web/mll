import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Product } from "../data/products";

export type CartItem = {
  product: Product;
  qty: number;
  volume: string;
};

type CartCtx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (product: Product, volume?: string) => void;
  remove: (productId: number, volume: string) => void;
  updateQty: (productId: number, volume: string, qty: number) => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((product: Product, volume = "50мл") => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.volume === volume
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.volume === volume
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, { product, qty: 1, volume }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((productId: number, volume: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.volume === volume))
    );
  }, []);

  const updateQty = useCallback(
    (productId: number, volume: string, qty: number) => {
      if (qty <= 0) {
        remove(productId, volume);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.product.id === productId && i.volume === volume
            ? { ...i, qty }
            : i
        )
      );
    },
    [remove]
  );

  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <Ctx.Provider
      value={{ items, open, setOpen, add, remove, updateQty, total, count }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
