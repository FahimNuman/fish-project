import { Button, IconButton } from "@material-tailwind/react";
import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PopularPost() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: any) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
      className: `rounded-full w-5 h-5 text-xs ${
        active === index ? "bg-red-100 text-black" : ""
      }`,
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex flex-col gap-6 mt-10">
      <div className="py-5 w-full">
        <h2 className="font-semibold capitalize text-xl relative">
          <span>Popular Post</span>
          <div className="absolute -bottom-4 left-0 w-full flex">
            <div className="h-[5px] w-2/5 bg-secondary"></div>
            <div className="h-[4px] w-3/5 bg-gray-300"></div>
          </div>
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-x-5">
            <div className="w-[86px] h-[86px]">
              <img src="/blog/news-little.png" alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">
                Post one to two blog articles a week
              </p>
              <div className="flex items-center text-xs max-w-full gap-3">
                <div className="flex items-center gap-2">
                  <AiFillClockCircle />
                  <span>1 month ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <BiSolidMessageAlt />
                  <span>67</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 max-w-full">
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full p-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-1">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
          ...
          <IconButton {...getItemProps(5)}>15</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full p-2"
          onClick={next}
          disabled={active === 5}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
