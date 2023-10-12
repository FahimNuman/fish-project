import React from "react";

type Props = {
  id: number;
  name: string;
  icon: string;
};
export default function FreebieCard({ card }: { card: Props }) {
  return (
    <div className="bg-white p-4 py-14 flex flex-col items-center justify-center gap-3 rounded-2xl hover:bg-secondary/80 hover:text-white text-black cursor-pointer transition-all">
      <img src={card.icon} alt="icon" className="w-[127px] h-[106px]" />
      <h3 className="uppercase text-base">{card.name}</h3>
    </div>
  );
}
