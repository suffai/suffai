import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

interface Item {
  title: string;
  getNumber: () => number;
  getChange: () => number;
}

interface CardProps {
  item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-[#182237] flex p-8 rounded-2xl gap-8 cursor-pointer w-full font-['Quicksand']">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-8">
        <span className="text-[1.6rem] font-bold">
          {item.title}
        </span>
        <span className="text-[2.4rem] font-medium">{item.getNumber()}</span>
        <span className="text-[1.4rem] font-light">
          <span
            className={
              item.getChange() >= 0 ? "text-[lime]" : "text-[red]"
            }
          >
            {item.getChange()}%
          </span>{" "}
          {item.getChange() >= 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
