import { useCartStore } from "@/store/cart-store"
export default function ProductPage(){
    const {items}=useCartStore()
    
const total=items.reduce((acc,item)=>acc+ item.price*item.quantity,0)
    return 
     <div>i am from checkout page</div>
}