import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import FreebieCard from "./FreebieCard";
import "./style.css";

export default function Category() {
  const freebieElements = [
    {
      id: 1,
      name: "E-Book",
      icon: "/category/1st.svg",
    },
    {
      id: 2,
      name: "e-learning",
      icon: "/category/2nd.svg",
    },
    {
      id: 3,
      name: "blog",
      icon: "/category/3rd.svg",
    },
    {
      id: 4,
      name: "web element",
      icon: "/category/4th.svg",
    },
    {
      id: 5,
      name: "software",
      icon: "/category/5th.svg",
    },
    {
      id: 6,
      name: "free netflix",
      icon: "/category/6th.svg",
    },
    {
      id: 7,
      name: "movie",
      icon: "/category/7th.svg",
    },
    {
      id: 8,
      name: "mod apk's",
      icon: "/category/8th.svg",
    },
    {
      id: 9,
      name: "wall-papers",
      icon: "/category/9th.svg",
    },
  ];

  const data = [
    {
      label: "Freebie",
      value: "Freebie",
      desc: (
        <div className="w-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {freebieElements.map((item, index) => (
              <div key={index} className="grid-cols-1">
                <FreebieCard card={item} />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mt-24 pb-36">
            <Button className="bg-primary rounded-full px-14 py-3">
              See More
            </Button>
          </div>
        </div>
      ),
    },
    {
      label: "Premium ",
      value: "Premium ",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Freelance",
      value: "Freelance",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div className=" bg-accent rounded-[30px] md:rounded-[50px] mx-2">
      <Tabs value="Freebie" className="">
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-primary rounded-none shadow-none !text-gray-900 w-1/2 left-3 ",
          }}
        >
          <div className="w-full border-b-2 border-gray-400">
            <div className="max-w-inner mx-auto flex justify-between w-full pb-8 pt-[30px] md:pt-[58px]">
              {/* search */}
              <div className="relative max-w-[332px] hidden md:block">
                <input
                  type="text"
                  placeholder="Search your need"
                  className="rounded-full shadow-xl py-3 pl-8 pr-10 w-full placeholder:text-gray-700"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-black m-1 px-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </div>
              {/* cards */}
              <div className="flex">
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value} className="">
                    {label}
                  </Tab>
                ))}
              </div>

              {/* select */}
              <div className="max-w-[212px] select-class hidden md:block">
                <Select
                  label="Select Category"
                  className="rounded-full bg-primary text-white focus:outline-none focus:ring-0 focus:ring-offset-0 appearance-none"
                  labelProps={{
                    className: "text-white",
                  }}
                >
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>
          </div>
        </TabsHeader>
        <TabsBody className="max-w-inner mx-auto mt-14">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
