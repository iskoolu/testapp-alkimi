import React from "react";
import SectionBox from "./SectionBox";
import Image from "next/image";
import coordinates from "../../public/coordinates.png";
import blockchain from "../../public/blockchain.png";
import { appTextContents } from "@/staticdata/appContents";

function Services() {
  return (
    <div>
      <h1 className="text-[45px] lg:text-8xl font-bold">SERVICES</h1>
      <div className="lg:flex lg:mb-4 py-5 lg:py-10 lg:gap-7 h-auto">
        <div className="w:full lg:w-1/3 text-textwhite">
          <SectionBox
            name={"Co-Nodes"}
            title={appTextContents.coNodes.title}
            content={appTextContents.coNodes.content}
            icon={appTextContents.coNodes.icon}
          />
        </div>
        <div className="w:full lg:w-1/3 mt-12 lg:mt-0 text-textwhite">
          <SectionBox
            name={"Managed nodes"}
            title={appTextContents.managedNodes.title}
            content={appTextContents.managedNodes.content}
            icon={appTextContents.managedNodes.icon}
          />
        </div>
        <div className="w:full lg:w-1/3 text-textwhite">
          <Image
            src={coordinates}
            className="w-full h-auto mt-10 lg:mt-0"
            alt="coordinates"
          />
          <div className="mt-6">
            <SectionBox
              name={"Nodes as a service"}
              title={appTextContents.nodeAsService.title}
              content={appTextContents.nodeAsService.content}
              icon={appTextContents.nodeAsService.icon}
            />
          </div>
        </div>
      </div>
      <div className="lg:flex mb-4 py-5 lg:py-10 gap-7 h-auto">
        <div className="w:full lg:w-1/3 text-textwhite">
          <SectionBox
            name={"Rewards"}
            title={appTextContents.rewards.title}
            content={appTextContents.rewards.content}
            icon={appTextContents.rewards.icon}
          />
        </div>
        <div className="w:full lg:w-1/3  mt-12 lg:mt-0 text-textwhite">
          <SectionBox
            name={"Node Build Tempplates"}
            title={appTextContents.buildTemplates.title}
            content={appTextContents.buildTemplates.content}
            icon={appTextContents.buildTemplates.icon}
          />
        </div>
        <div className="hidden lg:w-1/3 text-textwhite flex items-end"></div>
      </div>
      <div className="lg:flex mb-4 py-10 gap-7 h-auto">
        <div className="hidden lg:block lg:w-1/3 text-textwhite"></div>
        <div className="w:full lg:w-1/3 text-textwhite">
          <Image src={blockchain} className="w-full h-auto" alt="coordinates" />
        </div>
        <div className="w:full lg:w-1/3  mt-12 lg:mt-0 text-textwhite ">
          <SectionBox
            name={"Blockchain scalability"}
            title={appTextContents.bcScalability.title}
            content={appTextContents.bcScalability.content}
            icon={appTextContents.bcScalability.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
