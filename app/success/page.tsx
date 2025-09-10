'use client'

import Link from "next/link"
import { useEffect } from "react"
import { useCartStore } from "@/store/cart-store"

export default function SuccessPage() {
  const { clear } = useCartStore();

  useEffect(() => {
    clear()
  }, [clear]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful ✅</h1>
        <p className="text-gray-600 mb-6">
          Thanks for your purchase. Your order is on its way!
        </p>
        <Link
          href={"/products"}
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
