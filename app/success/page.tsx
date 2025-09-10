import Link from "next/link"
import { useEffect } from "react"
import { useCartStore } from "@/store/cart-store"
export default function SuccesPage(){
   const {clear}=useCartStore();
   useEffect(()=>{
    clear()
   },[clear])
    return(
        <div>
            <h1>payment sucessful</h1>
            <p>thanks for your purchase.Your order is on its way</p>
       
            <Link href={"/products"}>continue shopping</Link>
        </div>
    )
}