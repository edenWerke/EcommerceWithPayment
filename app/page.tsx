// import Image from "next/image";
// import { stripe } from "@/lib/stripe";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Carousel } from "@/components/carousel";

// export default async function Home() {
//   const products = await stripe.products.list({
//     expand: ["data.default_price"],
//   });
//   console.log(products);

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
//       <section className="my-10 text-center bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-4xl font-extrabold text-blue-600">Welcome to eStore</h2>
//         <p className="text-lg text-gray-700 mt-2">Discover Your Favorite Fashion</p>
//         <Button asChild variant="default" className="mt-4">
//           <Link href="/products" className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition">
//             Browse All Products
//           </Link>
//         </Button>
//         <div className="mt-6">
//           <Image 
//             alt="banner image"
//             width={450} 
//             height={450}
//             src={products.data[1].images[0]} 
//             className="rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
//           />
//         </div>
//       </section>
//       <section className="mt-10">
//         <Carousel />
//       </section>
//     </div>
//   );
// }
import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  console.log(products);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="flex items-center justify-between w-full max-w-5xl p-8 bg-white shadow-lg rounded-lg">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to My Ecommerce</h2>
          <p className="mt-2 text-lg text-gray-600">Discover the latest products at the best prices.</p>
          <Button asChild variant="default" className="mt-4">
            <Link href="/products" className="inline-block px-6 py-2 text-white bg-black rounded-full shadow hover:bg-gray-800 transition">
              Browse All Products
            </Link>
          </Button>
        </div>
        <div className="flex-none w-1/3">
          <Image 
            alt="Product image"
            width={300} 
            height={300}
            src={products.data[1].images[0]} 
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
      <section className="mt-10">
        <Carousel />
      </section>
    </div>
  );
}