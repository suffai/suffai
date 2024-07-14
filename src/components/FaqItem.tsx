import React from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}
const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  console.log(`FaqItem: ${question} isOpen: ${isOpen}`);

  return (
    <div className="border-b border-[#C7C7C7] py-8 px-8 last:border-b-0">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h2 className="font-['Quicksand'] text-[#333333] text-[20px] font-medium">
          {question}
        </h2>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <ChevronDown size={25} className="text-[#666666]" />
          ) : (
            <ChevronDown size={25} className="text-[#666666]" />
          )}
        </div>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <p className="font-['Quicksand'] text-[#666666] text-[18px] font-normal mt-3">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
