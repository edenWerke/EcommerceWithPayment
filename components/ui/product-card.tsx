
import Stripe from "stripe";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle,CardHeader } from "./card";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;


  return (
    <Link href={`/products/${product.id}`}> {/* Use product.id dynamically */}
      <Card>
        {product.images && product.images[0] && (
          <div className="relative h-80 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}
        <CardHeader>

     
     <CardContent className="text-center p-2">
          <CardTitle className="my-2 text-xl font-bold">{product.name}</CardTitle>
          {price && price.unit_amount && (
            <p className="text-lg text-gray-800">${(price.unit_amount / 100).toFixed(2)}</p>
          )}
        </CardContent>
        
        </CardHeader>
      </Card>
    </Link>
  );
};