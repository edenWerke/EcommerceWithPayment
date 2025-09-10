'use client';
import { useCartStore } from "@/store/cart-store";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
export default function ProductPage() {
  const { items } = useCartStore();
  
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
                
            </ul>
        </CardContent>
    </Card>
    
    </h1></div>; 
}
