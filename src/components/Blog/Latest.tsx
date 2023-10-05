import React from "react";
import { BsClockFill, BsFillGearFill } from "react-icons/bs";
import { LiaGamepadSolid } from "react-icons/lia";
import { FaHatCowboy } from "react-icons/fa6";
import { TbMovie, TbWorld } from "react-icons/tb";
import { PiGearSix } from "react-icons/pi";
import { CiForkAndKnife } from "react-icons/ci";
import { MdSportsMartialArts } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";

const cardData = [
  {
    id: 1,
    name: "Technology",
    icon: <BsFillGearFill className="text-2xl" />,
    bg: "bg-gradient-to-l from-yellow-500 to-yellow-600",
  },
  {
    id: 2,
    name: "Gaming",
    icon: <LiaGamepadSolid className="text-2xl" />,
    bg: "bg-gradient-to-l from-red-500 to-red-600",
  },
  {
    id: 3,
    name: "Education",
    icon: <FaHatCowboy className="text-2xl" />,
    bg: "bg-gradient-to-l from-green-400 to-green-500",
  },
  {
    id: 4,
    name: "World News",
    icon: <TbWorld className="text-2xl" />,
    bg: "bg-gradient-to-l from-orange-500 to-orange-600",
  },
  {
    id: 5,
    name: "Tips & Tricks",
    icon: <PiGearSix className="text-2xl" />,
    bg: "bg-gradient-to-l from-green-600 to-green-700",
  },
  {
    id: 6,
    name: "Foods",
    icon: <CiForkAndKnife className="text-2xl" />,
    bg: "bg-gradient-to-l from-indigo-400 to-indigo-500",
  },
  {
    id: 7,
    name: "Entertainment",
    icon: <TbMovie className="text-2xl" />,
    bg: "bg-gradient-to-l from-blue-400 to-blue-500",
  },
  {
    id: 8,
    name: "Sport",
    icon: <MdSportsMartialArts className="text-2xl" />,
    bg: "bg-gradient-to-l from-orange-400 to-orange-500",
  },
  {
    id: 9,
    name: "More",
    icon: <BiPlusCircle className="text-2xl" />,
    bg: "bg-gradient-to-l from-red-700 to-red-800",
  },
];

export default function Latest() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-2 md:gap-0">
        <div className="md:col-span-8 ml-auto relative">
          <img
            src="/blog/latest-01.png"
            alt=""
            className="w-[660px] md:h-full md:w-full h-[360px] "
          />
          <div className="absolute md:bottom-10 bottom-3 md:left-10 left-1 md:w-[568.73px]">
            <h3 className="text-base md:text-lg">Science</h3>
            <p className="text-xl md:text-2xl font-semibold md:leading-10 md:tracking-wide my-3">
              Unique Study Of Isolated Bobcat Population Confirms Accuracy Of
              Extinction Model
            </p>
            <div className="flex gap-3 items-center">
              <BsClockFill className="text-xs" />
              <p className="text-xs">1 month ago</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col mr-auto">
          <div className="flex-1 relative">
            <img
              src="/blog/latest-02.png"
              alt=""
              className="w-[660px] md:w-full h-[360px] md:h-full "
            />
            <div className="absolute md:bottom-4 xl:bottom-8 bottom-2 md:left-6 left-1 xl:w-[343.39px] md:w-[315.39px] text-white">
              <h3 className="text-base md:text-lg">Sport</h3>
              <p className="text-lg font-semibold my-2 max-w-full">
                Injury Wose Continues for Biance Andreescu after Australia Open
                2021
              </p>
              <div className="flex gap-3 items-center">
                <BsClockFill className="text-xs" />
                <p className="text-xs">1 month ago</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <img
                src="/blog/latest-03.png"
                alt=""
                className="!-z-10 relative w-[660px] md:w-full h-[360px] md:h-full"
              />
              <div className="absolute h-full w-full top-0 left-0 bg-slate-700 !z-20"></div>
            </div>
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-white/90 to-black/10"></div>
            <div className="absolute md:bottom-4 bottom-2 left-1 xl:bottom-8 md:left-6 xl:w-[343.39px] md:w-[315.39px]">
              <h3 className="text-base md:text-lg">Science</h3>
              <p className="text-lg font-semibold my-2">
                Injury Worsens for Bianca Andreescu after Australia Open 2021
              </p>
              <div className="flex gap-3 items-center">
                <BsClockFill className="text-xs" />
                <p className="text-xs">1 month ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto my-10">
        <div className="flex w-full gap-2 flex-wrap md:flex-nowrap">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`w-[105.75px] h-[80.91px] flex flex-col gap-2 items-center justify-center py-2 rounded-lg ${card.bg}`}
            >
              {card.icon}
              <p className="text-sm">{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
