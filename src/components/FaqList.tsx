import React, { useState } from "react";
import FaqItem from "./FaqItem";

interface Faq {
  question: string;
  answer: string;
}

interface FaqListProps {
  faqs: Faq[];
}

const FaqList: React.FC<FaqListProps> = ({ faqs }) => {
const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleOpen = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};

return (
  <div className="w-full mx-auto">
    {faqs.map((faq, index) => (
      <FaqItem
        key={index}
        question={faq.question}
        answer={faq.answer}
        isOpen={openIndex === index}
        onClick={() => toggleOpen(index)}
      />
    ))}
  </div>
);
};

export default FaqList;
