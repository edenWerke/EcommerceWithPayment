import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">navbafr</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
