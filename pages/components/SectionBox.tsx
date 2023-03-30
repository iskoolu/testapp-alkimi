import Image from "next/image";
import React from "react";
interface SectionBoxProps {
  name: string;
  title: string;
  content: string[];
  icon: string;
}

function SectionBox(props: SectionBoxProps) {
  return (
    <div className="text-textwhite">
      <p className="text-2xl lg:text-2xl uppercase mb-3">
        {props.title}
        {props.title === "Co-Nodes" ? <sup>&#x00AE;</sup> : null}
      </p>
      {props.content.map((para, id) => (
        <div key={id}>
          {" "}
          <p className="text-base lg:text-lg opacity-70">{para}</p>
          <br />
        </div>
      ))}
      <Image src={props.icon} width={20} height={20} alt={"icon"} />
    </div>
  );
}

export default SectionBox;
