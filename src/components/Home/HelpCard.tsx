import React from "react";

type Prop = {
  activeHelpCard: number;
  card: {
    id: number;
    title: string;
    icon: {
      black: string;
      red: string;
    };
  };
};
export default function HelpCard({ card, activeHelpCard }: Prop) {
  return (
    <div className="md:w-[316px] xl:w-[376px] h-[209px] flex flex-col justify-center items-center gap-4 bg-white hover:bg-gray-400 cursor-pointer transition-all shadow-lg">
      <img
        src={activeHelpCard === card.id ? card.icon.red : card.icon.black}
        alt="icon"
        className="w-[100px] h-[90px]"
      />
      <p
        className={`text-[24px] ${
          activeHelpCard === card.id ? "text-red-500" : "text-black"
        }`}
      >
        {card.title}
      </p>
    </div>
  );
}
