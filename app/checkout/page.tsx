'use client';
import { useCartStore } from "@/store/cart-store";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
const { items, addItem, removeItem ,clear} = useCartStore();
  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  if (total === 0 || items.length === 0) {
    return <div className="flex justify-center items-center h-screen"><h1 className="text-2xl">Your cart is empty</h1></div>;
  }
  
  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
      <Card className="bg-white shadow-lg rounded-lg p-5 w-full max-w-md">
        <CardHeader className="border-b pb-3 mb-4">
          <CardTitle className="text-xl font-semibold text-gray-800">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-200">
            {items.map((item, key) => (
              <li key={key} className="flex justify-between items-center py-3">
                <div className="flex-1">
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="block text-gray-500"> ${(item.price * item.quantity / 100).toFixed(2)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    onClick={() => removeItem(item.id)} 
                    className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <Button 
                    onClick={() => addItem({ ...item, quantity: 1 })} 
                    className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 text-lg font-bold text-right text-green-600">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
      
      <form className="mt-5">
        <Button type='submit' variant="default" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Proceed to Payment
        </Button>
        <Button onClick={()=>clear()} variant="default" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          clear cart
        </Button>
      </form>
    </div>
  );
}