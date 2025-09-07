import Stripe from "stripe"; import Image from "next/image"; import { Button } from "./button"; interface Props { product: Stripe.Product;}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
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
        <Button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          -
        </Button>
        <span className="text-lg font-medium">0</span>
        <Button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          +
        </Button>
      </div>
    </div>
  );
};
