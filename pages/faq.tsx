import { faqContent } from "@/staticdata/appContents";
import Accordion from "@/styled-components/Accordion";
import React, { useState } from "react";

function faq() {
  const [expanded, setExpanded] = useState<string>("1");
  const handleChange = (val: string) => {
    if (val !== expanded) {
      setExpanded(val);
    } else {
      setExpanded("0");
    }
  };
  return (
    <div>
      <h1 className="text-[45px] lg:text-8xl mb-[3rem] font-bold uppercase">
        Frequently Asked
      </h1>
      {faqContent.map((faqQues, id) => (
        <div className="mt-6" key={id}>
          <Accordion
            quesId={faqQues.questionId}
            title={faqQues.question}
            content={faqQues.answer}
            expanded={expanded}
            handleChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}

export default faq;
