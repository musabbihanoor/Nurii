import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full md:p-32 sm:p-20 p-10 pb-0">
      <h1 className="sm:text-5xl text-3xl font-bold">
        <Link href="/">Nurii</Link>
      </h1>
      <ul className="flex gap-5 sm:text-xl text-sm">
        <li>
          <Link href="/whitepaper">Whitepaper</Link>
        </li>
        <li>
          <a href="https://t.me/Nurii_Finance" target="_blank" rel="noreferrer">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
