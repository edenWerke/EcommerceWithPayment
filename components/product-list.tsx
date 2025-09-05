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
import Stripe from "stripe";
import { ProductCard } from "./ui/product-card";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products....."
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, key) => (
          <li key={key} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};