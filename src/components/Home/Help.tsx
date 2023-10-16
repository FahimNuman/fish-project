import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";
import HelpCard from "./HelpCard";
import { useState } from "react";

export default function Help() {
  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true);
  const [activeHelpCard, setActiveHelpCard] = useState(2);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className="my-30 mb-52 max-w-inner md:max-w-6xl overflow-hidden px-2 mx-auto">
      <div className="max-w-inner mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-5xl font-semibold my-10">
          Hello How Can
          <span className="font-bold text-primary"> We Help?</span>
        </h2>
        <div className="inset-y-0 relative md:w-[977px] flex items-center ">
          <button className="absolute left-5 md:left-7 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Find Your Question's"
            className="rounded-none shadow-2xl py-6 text-sm md:text-base pr-10 md:pr-0 pl-10 md:pl-16 w-full placeholder:text-gray-700 placeholder:text-[14px]"
          />
          <div className="absolute inset-y-0 right-0 flex items-center text-black m-1 px-3 rounded-full">
            <Button className="bg-primary text-white rounded-none md:py-4 md:px-8 cursor-pointer z-20">
              Search
            </Button>
          </div>
        </div>
        <p className="text-[16px] md:text-[24px] pt-[47px]">
          or 
        </p>
        <br/>
        Choose a Catagory To Find Quickly Your Need
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 my-24">
        {helpCardItem.map((item) => (
          <div
            className={`col-span-1 ${
              activeHelpCard === item.id && " border-red-400 border"
            }`}
            onClick={() => setActiveHelpCard(item.id)}
            key={item.id}
          >
            <HelpCard card={item} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <Accordion open={alwaysOpen}>
          <AccordionHeader
            onClick={handleAlwaysOpen}
            className="border border-gray-700 rounded-md relative flex items-center"
          >
            <img
              src="/home/dot.png"
              alt="dot"
              className="absolute left-6 top-1/3"
            />
            <p className="pl-12 text-sm md:text-base pr-10 md:pr-0 md:pl-16">
              How can get premium services ?
            </p>
            {!alwaysOpen ? (
              <img
                src="/home/plus.png"
                alt="dot"
                className="absolute right-6 top-1/3"
              />
            ) : (
              <img
                src="/home/minus.png"
                alt="dot"
                className="absolute right-6 top-1/2"
              />
            )}
          </AccordionHeader>
          <AccordionBody>
            <div className="px-8 md:px-32">
              <p className="leading-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor velit, lacinia sed rutrum non, ultricies id lorem. In
                pulvinar odio lacus, id auctor tellus semper ac. Phasellus
                lobortis viverra nisl. Pellentesque ultrices, purus vitae
                venenatis pharetra, eros mi feugiat sapien, id vehicula dui est
                id ipsum. Nam nulla massa, eros mi feugiat sapien, id vehicula
                dui est id ipsum. Nam nulla massa,
              </p>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="border border-gray-700 rounded-md relative flex items-center"
          >
            <img
              src="/home/dot.png"
              alt="dot"
              className="absolute left-6 top-1/3"
            />
            <p className="pl-12 text-sm md:text-base pr-10 md:pr-0 md:pl-16">
              lorem ipsum is diet amet to lorem ipsum is to lore.m?
            </p>
            {open === 1 ? (
              <img
                src="/home/minus.png"
                alt="dot"
                className="absolute right-6 top-1/2"
              />
            ) : (
              <img
                src="/home/plus.png"
                alt="dot"
                className="absolute right-6 top-1/3"
              />
            )}
          </AccordionHeader>
          <AccordionBody>
            <div className="px-8 md:px-32">
              <p className="leading-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor velit, lacinia sed rutrum non, ultricies id lorem. In
                pulvinar odio lacus, id auctor tellus semper ac. Phasellus
                lobortis viverra nisl. Pellentesque ultrices, purus vitae
                venenatis pharetra, eros mi feugiat sapien, id vehicula dui est
                id ipsum. Nam nulla massa, eros mi feugiat sapien, id vehicula
                dui est id ipsum. Nam nulla massa,
              </p>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="border border-gray-700 rounded-md relative flex items-center"
          >
            <img
              src="/home/dot.png"
              alt="dot"
              className="absolute left-6 top-1/3"
            />
            <p className="pl-12 text-sm md:text-base pr-10 md:pr-0 md:pl-16">
              Enter your question no three?
            </p>
            {open === 2 ? (
              <img
                src="/home/minus.png"
                alt="dot"
                className="absolute right-6 top-1/2"
              />
            ) : (
              <img
                src="/home/plus.png"
                alt="dot"
                className="absolute right-6 top-1/3"
              />
            )}
          </AccordionHeader>
          <AccordionBody>
            <div className="px-8 md:px-32">
              <p className="leading-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor velit, lacinia sed rutrum non, ultricies id lorem. In
                pulvinar odio lacus, id auctor tellus semper ac. Phasellus
                lobortis viverra nisl. Pellentesque ultrices, purus vitae
                venenatis pharetra, eros mi feugiat sapien, id vehicula dui est
                id ipsum. Nam nulla massa, eros mi feugiat sapien, id vehicula
                dui est id ipsum. Nam nulla massa,
              </p>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="border border-gray-700 rounded-md relative flex items-center"
          >
            <img
              src="/home/dot.png"
              alt="dot"
              className="absolute left-6 top-1/3"
            />
            <p className="pl-12 text-sm md:text-base pr-10 md:pr-0 md:pl-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?.{" "}
            </p>
            {open === 3 ? (
              <img
                src="/home/minus.png"
                alt="dot"
                className="absolute right-6 top-1/2"
              />
            ) : (
              <img
                src="/home/plus.png"
                alt="dot"
                className="absolute right-6 top-1/3"
              />
            )}
          </AccordionHeader>
          <AccordionBody>
            <div className="px-8 md:px-32">
              <p className="leading-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                dolor velit, lacinia sed rutrum non, ultricies id lorem. In
                pulvinar odio lacus, id auctor tellus semper ac. Phasellus
                lobortis viverra nisl. Pellentesque ultrices, purus vitae
                venenatis pharetra, eros mi feugiat sapien, id vehicula dui est
                id ipsum. Nam nulla massa, eros mi feugiat sapien, id vehicula
                dui est id ipsum. Nam nulla massa,
              </p>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

const helpCardItem = [
  {
    id: 1,
    title: "Freebie Services",
    icon: "/home/free.png",
  },
  {
    id: 2,
    title: "Premium Services",
    icon: "/home/dimond.png",
  },
  {
    id: 3,
    title: "Freelance Services",
    icon: "/home/man.png",
  },
];
