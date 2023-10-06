import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full p-32 pb-0">
      <h1 className="text-5xl font-bold">
        <Link href="/">Nurii</Link>
      </h1>
      <ul className="flex gap-5 text-xl">
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
