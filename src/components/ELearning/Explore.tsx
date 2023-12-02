import {
  Stepper,
  Step,
  Button,
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import ExploreFreebieCard from "./ExploreFreebieCard";
import {
  BuildingLibraryIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Explore = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const explorefreebieElements = [
    {
      id: 1,
      name: "E-Book",
      icon: "/category/1st.svg",
      heading: "string",
      price: 10, // Example price as a number
      hour: "string",
    },
    {
      id: 2,
      name: "E-Book",
      icon: "/category/1st.svg",
      heading: "string",
      price: 10, // Example price as a number
      hour: "string",
    },
    {
      id: 3,
      name: "E-Book",
      icon: "/category/1st.svg",
      heading: "string",
      price: 10, // Example price as a number
      hour: "string",
    },
    {
      id: 4,
      name: "E-Book",
      icon: "/category/1st.svg",
      heading: "string",
      price: 10, // Example price as a number
      hour: "string",
    },
    {
      id: 5,
      name: "E-Book",
      icon: "/category/1st.svg",
      heading: "string",
      price: 10, // Example price as a number
      hour: "string",
    },
    {
      id: 6,
      name: "E-Book",
      icon: "/category/1st.svg",
      heading: "string",
      price: 10, // Example price as a number
      hour: "string",
    },
  ];
  const data = [
    {
      label: "Freebie",
      value: "Freebie",
      desc: (
        <div className="w-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {explorefreebieElements.map((item, index) => (
              <div key={index} className="grid-cols-1">
                <ExploreFreebieCard card={item} />
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

  // Return the JSX content defined in the 'data' array
  return (
    <div className="z-10 relative">
      <div className=" bg-accent rounded-[30px] max-w-[200rem] md:rounded-[50px]">
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
                <div className="max-w-[212px] select-class hidden md:block">
                  <Select
                    label="⧎ Filter"
                    className=" border border-indigo-600 px-3 py-1 font-semibold rounded-md bg-white text-black focus:outline-none focus:ring-0 focus:ring-offset-0 appearance-none"
                    labelProps={{
                      className: "text-black",
                    }}
                  >
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
                {/* Gap */}
                <div className="w-4"></div>{" "}
                {/* This adds a 4-pixel gap between the Filter and Search bar. You can adjust the width as needed. */}
                {/* Search Bar */}
                <div className="relative mb-3 flex w-full flex-wrap items-stretch hidden md:block">
                  <input
                    type="text"
                    placeholder="Search your need"
                    className="rounded-full shadow-xl py-2 pl-8 pr-10 w-full placeholder:text-gray-700"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center  text-black m-1 px-3 rounded-full">
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
                {/* select */}
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
    </div>
  );
};

export default Explore;
