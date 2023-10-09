import React from "react";

type Props = {
  id: number;
  name: string;
  icon: string;
};
export default function FreebieCard({ card }: { card: Props }) {
  return (
    <div className="bg-white p-6 py-14 flex flex-col items-center justify-center gap-3 rounded-2xl">
      <img src={card.icon} alt="icon" className="w-[127px] h-[106px]" />
      <h3 className="uppercase text-base text-black">{card.name}</h3>
    </div>
  );
}
