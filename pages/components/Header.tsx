import BurgerMenu from "@/styled-components/BurgerMenu";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import { useRouter } from "next/router";

function Header() {
  const [menu, setMenu] = useState<Boolean>(false);
  const router = useRouter();
  const handleChange = (value: boolean) => {
    setMenu(value);
  };
  return (
    <header className="fixed w-full top-0 z-50 bg-lightblack flex items-center justify-between h-50 pr-3 pl-1 py-1 lg:px-7 lg:py-1">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src={logo} width={40} height={40} alt={"logo"} />
        <p className="text-textwhite text-base relative left-4">
          {menu ? "Menu" : "We're on a mission"}
        </p>
      </div>
      <div className="hidden lg:block">
        <BurgerMenu screenType="desktop" handleChange={handleChange} />
      </div>
      <div className="lg:hidden block mr-[8px]">
        <BurgerMenu screenType="mobile" handleChange={handleChange} />
      </div>
    </header>
  );
}

export default Header;
