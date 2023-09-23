import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";

export default function TimeAndComment() {
  return (
    <div className="flex items-center gap-6 text-xs max-w-full">
      <div className="flex items-center gap-2">
        <AiFillClockCircle />
        <span>1 month ago</span>
      </div>
      <div className="flex items-center gap-2">
        <BiSolidMessageAlt />
        <span>67</span>
      </div>
    </div>
  );
}
