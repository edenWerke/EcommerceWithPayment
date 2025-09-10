'use client'

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem,removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;

  // Fixed find: return the comparison
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Fixed function definition
  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount ? price.unit_amount : 0, // make sure it's a number
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-lg space-y-4">
      {product.images && product.images[0] && (
        <div className="relative h-60 w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="space-y-2">
        {price && price.unit_amount && (
          <p className="text-xl font-semibold text-gray-800">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        {product.description && (
          <p className="text-gray-600">{product.description}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={()=>removeItem(product.id)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          -
        </Button>
        <span className="text-lg font-medium">{quantity}</span>
        <Button
          onClick={onAddItem}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
        >
          +
        </Button>
      </div>
    </div>
  );
};
