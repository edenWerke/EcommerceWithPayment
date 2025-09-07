import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          } else {
            return {
              items: [...state.items, item],
            };
          }
        });
      },
    }),
    {
      name: "cart" // this is required
    }
  )
);
