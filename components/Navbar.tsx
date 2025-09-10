"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ShoppingCartIcon,Bars3Icon,XMarkIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useState } from "react";
import { Button } from "./ui/button";
const Navbar = () => {
  const [mobileOpen,setMobileOpen]=useState<boolean>(false)
  const {items}=useCartStore()
  const cartCount=items.reduce((acc,item)=>acc+item.quantity,0)
  
  useEffect(()=>{
    const handleResize=()=>{
      if (window.innerWidth>=768){
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener("resize",handleResize)
  },[])
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/">E-Shop</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link
            href="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            href="/checkout"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Checkout
          </Link>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <Link href="/checkout" className="hover:text-yellow-400 transition-colors duration-300">
         <ShoppingCartIcon/>
         {cartCount >0 && (
          <span>{cartCount}</span>
         )}
         </Link>
        <Button className="md:hidden" variant="ghost" onClick={() => setMobileOpen(prev => !prev)}>
          {mobileOpen ? <XMarkIcon/> : <Bars3Icon/>}
         </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
              </li>
            <li>
              <Link href="/products">products</Link>
              </li>
            <li>
              <Link href="/Checkout">Checkout</Link>
              </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
