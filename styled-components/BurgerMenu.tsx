import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRef } from "react";
import useOutsideClick from "../customhooks/useOutsideClick";

interface MenuProps {
  screenType: string;
  handleChange: (params: boolean) => any;
}

function BurgerMenu({ screenType, handleChange }: MenuProps) {
  const [clicked, setClicked] = useState(false);
  const [dropdownOpen, setDropDown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const myFunction = (e: React.MouseEvent<HTMLDivElement>) => {
    if (screenType === "desktop") {
      console.log(screenType);
      setDropDown((prev) => !prev);
    } else {
      if (clicked) {
        router.back();
        handleChange(false);
      } else {
        router.push("/menu");
        handleChange(true);
      }
    }
    setClicked((prev) => !prev);
  };

  const handleClickOutside = () => {
    setClicked(false);
    setDropDown(false);
  };

  useOutsideClick(ref, handleClickOutside);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div
        className="inline-block cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={myFunction}
      >
        <div
          className={
            clicked
              ? "w-[18px] h-[2px] bg-textwhite duration-500 transform rotate-45 translate-y-1.5"
              : "w-[18px] h-[2px] bg-textwhite duration-500 "
          }
        />
        <div
          className={
            clicked
              ? "w-[18px] h-[2px] bg-textwhite duration-500 mt-1 transform -rotate-45 translate-x-0 translate-y-0"
              : "w-[18px] h-[2px] bg-textwhite duration-500 mt-1 "
          }
        />
      </div>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-textwhite ring-1 ring-black ring-opacity-5 dropdown ${
          dropdownOpen ? null : "hidden"
        }`}
        aria-labelledby="options-menu"
        role="menu"
      >
        <div className="py-1" role="none">
          <Link
            href="/"
            onClick={handleClickOutside}
            className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-footerBannerEnd hover:text-gray-900"
            role="menuitem"
          >
            Services
          </Link>
          <Link
            href="/env_statement"
            className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-footerBannerEnd hover:text-gray-900"
            role="menuitem"
            onClick={handleClickOutside}
          >
            Environment Statement
          </Link>
          <Link
            href="/projects"
            className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-footerBannerEnd hover:text-gray-900"
            role="menuitem"
            onClick={handleClickOutside}
          >
            Projects
          </Link>
          <Link
            href="/nft"
            className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-footerBannerEnd hover:text-gray-900"
            role="menuitem"
            onClick={handleClickOutside}
          >
            NFT
          </Link>
          <Link
            href="/faq"
            onClick={handleClickOutside}
            className="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-footerBannerEnd hover:text-gray-900"
            role="menuitem"
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
