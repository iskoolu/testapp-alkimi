import React from "react";

function Footer() {
  return (
    <footer className="font-mono text-[#000] bg-gradient-to-r from-footerBannerStart to-footerBannerEnd  ">
      <div className="hidden lg:block w-full flex items-center h-12 pl-7 pr-7 pt-3 pb-1">
        <div className="overflow-hidden w-full ">
          <ul className="flex animate-marquee duration-15s list-none m-0 p-0 w-200">
            {Array.from(new Array(10)).map((item, id) => (
              <li className="w-1/3" key={id}>
                <p className="font-bold">We&apos;re on a mission</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:hidden block flex items-center h-12 ">
        <div className="overflow-hidden w-full ">
          <ul className="flex animate-marquee duration-3s list-none m-0 p-0 w-200">
            {Array.from(new Array(3)).map((item, id) => (
              <li className="w-1/3" key={id}>
                <p className="font-bold">We&apos;re on a mission</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
