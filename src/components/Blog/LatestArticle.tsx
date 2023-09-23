import {
  Rating,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";

export default function LatestArticle() {
  return (
    <div className="max-w-inner mx-auto py-10 md:py-20">
      <div className="grid md:grid-cols-12 gap-2">
        <div className="md:col-span-9">
          <div className="bg-white py-5 md:px-12 px-4 flex justify-between items-center">
            <h2 className="font-semibold capitalize text-xl md:text-3xl relative">
              <span>Latest Articles</span>
              <div className="absolute -bottom-4 left-0 h-[6px] w-full bg-secondary"></div>
            </h2>
            <p className="text-primary text-xs md:text-base">
              View more Articles
            </p>
          </div>
          <div className="w-full mt-8">
            <div className="grid md:grid-cols-2 md:gap-5 md:gap-y-9">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="col-span-1 bg-white rounded-md">
                  <img
                    src="/blog/latest-1.png"
                    alt="latest"
                    className="w-full"
                  />
                  <div className="px-7 py-4 pb-8">
                    <h2 className="text-xl md:text-3xl font-bold">
                      How To Generate CC From BINS?
                    </h2>
                    <div className="flex items-center gap-6 text-xs max-w-full">
                      <div className="flex items-center gap-2">
                        <AiFillClockCircle />
                        <span>1 month ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BiSolidMessageAlt />
                        <span>67</span>
                      </div>
                      <div className="">
                        <Rating value={5} className="!text-[5px]" />
                      </div>
                    </div>
                    <p className="text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas molestiae fugiat neque pariatur temporibus officiis
                      repudiandae culpa velit vel voluptatum.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <img src="/blog/latest-big.png" alt="latest" className="w-full" />
            </div>
          </div>
        </div>
        <div className="bg-white md:col-span-3">
          <Tabs value="html">
            <TabsHeader className="bg-white pb-4">
              {data.map(({ label, value }) => (
                <Tab className="py-5 !rounded-none" key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="!bg-gray-100 pt-5">
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <div className="md:h-[821.54px] w-full">
            <img
              src="/blog/latest-adv.png"
              alt="latest"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    label: "Featured",
    value: "html",
    desc: (
      <div className="flex flex-col gap-y-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="w-[86.2px] h-[86.33px] ">
                <img
                  src="/blog/latest-small.png"
                  alt="latest"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-sm capitalize">
                  Model Shares Her Picking list for summer
                </p>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Tranding",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Uncategorized",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
];
