import Image from "next/image";
import {stripe} from "@/lib/stripe"
export default async  function Home() {
  const products=await stripe.products.list({
  //  expand fetchs data fro staipe with full detail
    expand:["data.default_price"]
  });
  console.log(products)
  return (
    <div>
      <section>
        <div>
            <div>
          <h2>welcome to estore</h2>
        <p>Discover Your Favorte fashion</p>
        </div>
        </div>
      </section>
    </div>
  );
}
