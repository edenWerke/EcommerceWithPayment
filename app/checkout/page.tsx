'use client'
import { useCartStore } from "@/store/cart-store"
export default function ProductPage(){
    const {items}=useCartStore()
    
const total=items.reduce((acc,item)=>acc+ item.price*item.quantity,0)
   
if (total===0 || items.length===0){
    return <div><h1>Your cart is empty</h1></div>
}
return 
     <div>i am from checkout page</div>
}