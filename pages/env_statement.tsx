import { appTextContents } from "@/staticdata/appContents";
import Image from "next/image";
import React from "react";
import SectionBox from "./components/SectionBox";
import nodeArmy from "../public/nodearmy.png";

function Env_statement() {
  return (
    <div>
      <h1 className="text-[45px] lg:text-8xl font-bold uppercase">
        Environment statement
      </h1>
      <div className="lg:flex lg:mb-4 py-5 lg:py-10 lg:gap-7 h-auto">
        <div className="w:full lg:w-1/3 text-textwhite">
          <SectionBox
            name={"Proof Of Stake"}
            title={appTextContents.proofOfStake.title}
            content={appTextContents.proofOfStake.content}
            icon={appTextContents.proofOfStake.icon}
          />
        </div>
        <div className="w:full lg:w-1/3 mt-12 lg:mt-0 text-textwhite">
          <SectionBox
            name={"Cloud Computing"}
            title={appTextContents.cloudComputing.title}
            content={appTextContents.cloudComputing.content}
            icon={appTextContents.cloudComputing.icon}
          />
        </div>
        <div className="hidden lg:block w-1/3 text-textwhite" />
      </div>
      <div className="lg:flex mb-4 py-5 lg:py-10 gap-7 h-auto">
        <div className="hidden lg:block text-textwhite" />
        <div className="w:full lg:w-1/3 mt-6 lg:mt-0 text-textwhite">
          <Image src={nodeArmy} className="w-full h-auto" alt="coordinates" />
        </div>
        <div className="w:full lg:w-1/3 mt-12 lg:mt-0 text-textwhite">
          <SectionBox
            name={"Nodes as a service"}
            title={appTextContents.nodeAsService.title}
            content={appTextContents.nodeAsService.content}
            icon={appTextContents.nodeAsService.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default Env_statement;
