'use client';
import { useCartStore, } from "@/store/cart-store";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function ProductPage() {
  const { items,addItem,removeItem } = useCartStore();
  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  if (total === 0 || items.length === 0) {
    return <div><h1>Your cart is empty</h1></div>;
  }
  
  return <div><h1>
    
    <Card>
        <CardHeader>

            <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>

            <ul>
                {items.map((item,key)=>(
                  <li key={key}>
                    <div>
                      <span>{item.name}</span>
                      <span>     ${(item.price*item.quantity/100).toFixed(2)}</span>
                    </div>
                    <div>
            <Button onClick={()=>removeItem(item.id)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          -
        </Button>
        <span className="text-lg font-medium">{item.quantity}</span>
        <Button
          onClick={()=>addItem(item)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
        >
          +
        </Button>
                    </div>
                  </li>
                ))}
            </ul>
        </CardContent>
    </Card>
    
    </h1></div>; 
}
