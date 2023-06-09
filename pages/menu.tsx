import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div className="flex items-center h-[70vh]">
      <div className="py-1">
        <Link
          href="/"
          role="menuitem"
          className="block px-4 py-2 uppercase text-sm "
        >
          Services
        </Link>
        <Link
          href="/Env_statement"
          className="block uppercase px-4 py-2 text-sm "
          role="menuitem"
        >
          Environment Statement
        </Link>
        <Link
          href="/Projects"
          role="menuitem"
          className="block uppercase px-4 py-2 text-sm "
        >
          Projects
        </Link>
        <Link
          href="/Nft"
          role="menuitem"
          className="block uppercase px-4 py-2 text-sm "
        >
          NFT
        </Link>
        <Link
          href="/Faq"
          role="menuitem"
          className="block uppercase px-4 py-2 text-sm "
        >
          FAQ
        </Link>
        <Link
          href="#"
          role="menuitem"
          className="block uppercase opacity-40 px-4 py-2 text-sm"
        >
          <div className="flex justity-between w-full">
            <p>Pratform</p>
            <p className="absolute right-[25px] mt-[4px]">Coming soon</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
