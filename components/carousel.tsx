// 'use client'
// import Stripe from "stripe"
// import {Card} from "./ui/card"
// import {useState,useEffect} from 'react'
// import Image from "next/image"
// import { CardContent } from "./ui/card"
// import {  CardTitle} from './ui/card'
// interface Props{
//    products:Stripe.Product[]
// }

// export const Carousel=({products}:Props)=>{
  
//   const [current,setCurrent]=useState<number>(0)
//   useEffect(()=>{
//     const interval=setInterval(()=>{
// setCurrent((prev)=>(prev+1)%products.length)
//     },3000);
//     return()=>clearInterval(interval)
//   },[products.length])
//   const currentProduct=products[current];
//   const price=currentProduct.default_price as Stripe.Price
//   return <Card>
//     {currentProduct.images && currentProduct.images[0]&& (
//     //     <div>
//     //         <Image
//     //     alt={currentProduct.name}
//     //     src={currentProduct.images[0]}
//     //     layout="fill"
//     //    objectFit="cover"
//     //     /></div>
//     <div className="w-64 h-40 relative">
//   <Image
//     alt={currentProduct.name}
//     src={currentProduct.images[0]}
//     layout="responsive"
//     width={256}
//     height={160}
//     objectFit="contain"
//   />
// </div>

//     )}
// <CardContent>

   
//     <CardTitle>{currentProduct.name}</CardTitle>
// {price && price.unit_amount && <p>${(price.unit_amount/100).toFixed(2)}</p>}
// </CardContent>
//   </Card>
// }
// 'use client';

// import Stripe from "stripe";
// import { Card } from "./ui/card";
// import { useState, useEffect } from 'react';
// import Image from "next/image";
// import { CardContent } from "./ui/card";
// import { CardTitle } from './ui/card';

// interface Props {
//    products: Stripe.Product[];
// }

// export const Carousel = ({ products }: Props) => {
  
//   const [current, setCurrent] = useState<number>(0);
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % products.length);
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, [products.length]);
  
//   const currentProduct = products[current];
//   const price = currentProduct.default_price as Stripe.Price;

//   return (
//     <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: '1px 0', boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)' }}>
//       <Card style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '10px', overflow: 'hidden' }}>
//         <CardContent style={{ textAlign: 'center', padding: '10px' }}>
//           <CardTitle style={{ margin: '10px 0', fontSize: '1.5em', fontWeight: 'bold' }}>{currentProduct.name}</CardTitle>
//           {price && price.unit_amount && <p style={{ fontSize: '1.2em', color: '#333' }}>${(price.unit_amount / 100).toFixed(2)}</p>}
//         </CardContent>
//         {currentProduct.images && currentProduct.images[0] && (
//           <div style={{ position: 'relative', width: '100%', height: '50px' }}>
//             <Image
//               alt={currentProduct.name}
//               src={currentProduct.images[0]}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// };
'use client';

import Stripe from "stripe";
import { Card } from "./ui/card";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { CardContent } from "./ui/card";
import { CardTitle } from './ui/card';

interface Props {
   products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  
  const [current, setCurrent] = useState<number>(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [products.length]);
  
  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-1 shadow-md">
      <Card className="max-w-xl mx-auto rounded-lg overflow-hidden">
        <CardContent className="text-center p-2">
          <CardTitle className="my-2 text-xl font-bold">{currentProduct.name}</CardTitle>
          {price && price.unit_amount && (
            <p className="text-lg text-gray-800">${(price.unit_amount / 100).toFixed(2)}</p>
          )}
        </CardContent>
        {currentProduct.images && currentProduct.images[0] && (
          <div className="relative w-full h-32">
            <Image
              alt={currentProduct.name}
              src={currentProduct.images[0]}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </Card>
    </div>
  );
};