import React from "react";

type Prop = {
  card: {
    id: number;
    title: string;
    icon: string;
  };
};
export default function HelpCard({ card }: Prop) {
  return (
    <div className="md:w-[316px] xl:w-[376px] h-[209px] flex flex-col justify-center items-center gap-4 bg-white shadow-lg">
      <img src={card.icon} alt="icon" />
      <p className="text-[24px]">{card.title}</p>
    </div>
  );
}
