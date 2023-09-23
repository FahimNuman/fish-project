import React from "react";

export default function Tags() {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <div className="py-5 w-full">
        <h2 className="font-semibold capitalize text-xl relative">
          <span>Tags</span>
          <div className="absolute -bottom-4 left-0 w-full flex">
            <div className="h-[5px] w-1/5 bg-secondary"></div>
            <div className="h-[4px] w-4/5 bg-gray-300"></div>
          </div>
        </h2>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap gap-2">
          {" "}
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="bg-white px-5 py-2 inline-block text-sm"
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tags = [
  {
    id: 1,
    name: "Shop",
  },
  {
    id: 2,
    name: "App",
  },
  {
    id: 3,
    name: "Html",
  },
  {
    id: 4,
    name: "Css",
  },
  {
    id: 5,
    name: "Tricks",
  },
  {
    id: 6,
    name: "Ui-design",
  },
  {
    id: 7,
    name: "Best Seller",
  },
  {
    id: 8,
    name: "Gmail-Track",
  },
  {
    id: 9,
    name: "Landing",
  },
  {
    id: 10,
    name: "Photography",
  },
  {
    id: 11,
    name: "JS",
  },
  {
    id: 12,
    name: "Shopify",
  },
  {
    id: 13,
    name: "Web-Design",
  },
  {
    id: 14,
    name: "EDU",
  },
  {
    id: 15,
    name: "Hacking",
  },
];
