import React from "react";

type Props = {
  id: number;
  name: string;
  icon: string;
};
export default function FreebieCard({ card }: { card: Props }) {
  return (
    <div className="p-4 py-14 gap-3 rounded-2xl hover:text-white text-black w-full h-[285px] hover-text-white flex flex-col items-center justify-center bg-white hover:bg-secondary/80 transition-all cursor-pointer">
    <img src={card.icon} alt="icon" className="w-[127px] h-[106px] mt-6" />
    <h3 className="uppercase mt-8 text-2xl font-semibold">{card.name}</h3>
  </div>
  

  
  );
}