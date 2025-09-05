import React from "react";
import Link from "next/link";

const Navbar = () => {
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
          <span className="material-icons">shopping_cart</span>
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-0.5 rounded-full">
            3
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
