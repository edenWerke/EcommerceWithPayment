import Stripe from "stripe";
import Image from "next/image";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  return (
    <div>
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
      <div>
          {price && price.unit_amount && (
              <p className="text-lg text-gray-800">${(price.unit_amount / 100).toFixed(2)}</p>
            )}
{product.description &&<p className="text-lg text-gray-800">{product.description}</p>}
      </div>
    </div>
  );
};
