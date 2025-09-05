// import Stripe from "stripe";
// import { ProductCard } from "./ui/product-card";

// interface Props {
//   products: Stripe.Product[];
// }

// export const ProductList = ({ products }: Props) => {
//   return (
//     <div>
//       <div>
//         <input type="text" placeholder="Search products....." />
//       </div>
//       <ul>
//         {products.map((product, key) => (
//           <li key={key}>
//             <ProductCard product={product} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
'use client'
import Stripe from "stripe";
import { ProductCard } from "./ui/product-card";
import { useState } from "react";
interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm,setSearchTerm]=useState<string>("")
  const filterdProduct=products.filter((product)=>{
  const term =searchTerm.toLowerCase()
  const nameMatch=product.name.toLowerCase().includes(term)
 const descriptionMatch=product.description ? product.description.toLowerCase().includes(term) :false
return nameMatch || descriptionMatch
})
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          placeholder="Search products....."
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterdProduct.map((product, key) => (
          <li key={key} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};