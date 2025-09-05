import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    // expand fetches data from Stripe with full detail
    expand: ["data.default_price"],
  });
  console.log(products);

  return (
    <div>
      <section>
        <div>
          <div>
            <h2>Welcome to eStore</h2>
            <p>Discover Your Favorite Fashion</p>
            <Button asChild variant="default">
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
          <Image alt="bannnerimage"
           width={450} 
            height={450}
             src={products.data[1].images[0]}/>
        </div>
      </section>
    </div>
  );
}
