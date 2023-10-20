import { Button } from "@material-tailwind/react";
import React from "react";
import AboutTextArea from "./AboutTextArea";
import "./fonts.css"
export default function About() {
  return (
    <div className="xl:max-w-inner md:max-w-5xl mx-auto mt-12 mb-16 px-2">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="col-span-1 flex flex-col gap-9 justify-center mr-4">
          <h2 className="text-2xl md:text-4xl flex items-end gap-2">
            <img
              src="/hat-color.png" 
              alt="hat"
              className="w-[40px] md:w-[60px] h-[40px] md:h-[58px] "
            />
            <span  style={{ fontFamily: 'Conthrax-SB' }} className="">About Anon Detect.</span>
          </h2>
          <div className="flex flex-col gap-6 md:gap-10">
            <p className="leading-8 md:leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dictum egestas enim. Proin ex sem, volutpat et sapien id, ultrices
              e
            </p>
            <p className="leading-8 md:leading-10">
              porttitor malesuada quis vel magna. Praesent nec volutpat diam.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p style={{ fontFamily: 'Conthrax-SB' }} className="text-blue-700">Join with us</p>
            <div className="flex gap-2">
              <img
                src="/about/facebook.png"
                alt="facebook"
                className="w-6 h-6 cursor-pointer"
              />
              <div className="p-[4px] border rounded-full border-gray-800 cursor-pointer">
                <img src="/about/insta.png" alt="instagram" />
              </div>
              <img
                src="/about/linkedin.png"
                alt="linkedin"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full flex">
            <Button className="bg-primary rounded-full px-14 py-3">
              See More
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="col-span-1  xl:w-[668px] w-[268px] xl:h-[668px] h-[368px] mt-10 md:mt-0">
            <img src="/about/person.png" alt="person" />
          </div>
        </div>
      </div>
      <AboutTextArea />
    </div>
  );
}
