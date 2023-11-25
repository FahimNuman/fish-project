import React, { useEffect, useState } from "react";
import AppLogo from "../components/Common/AppLogo";
import {
  Button,
  IconButton,
  Collapse,
  Navbar,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { CgMenuGridR } from "react-icons/cg";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const routes = useLocation();
  const [isBlog, setIsBlog] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navLinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Blog",
      link: "/blog",
    },
    {
      id: 3,
      title: "E-Learning",
      link: "/elearning",
    },
    {
      id: 4,
      title: "DMCA",
      link: "/",
    },
    {
      id: 5,
      title: "Contact",
      link: "/",
    },
  ];

  useEffect(() => {
    if (routes.pathname.includes("/blog")) {
      setIsBlog(true);
    } else {
      setIsBlog(false);
    }
  }, [routes]);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLinks.map((link, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to={link.link} className="flex items-center">
            {link.title}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="max-h-[768px] max-w-inner mx-auto px-3 md:px-0 mb-10">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-0 lg:py-4 bg-transparent shadow-none border-0 backdrop-filter-none backdrop-blur-none px-3">
        <div className="flex gap-3 items-center justify-between text-blue-gray-900">
          <button>
            <AppLogo />
          </button>
          {/* <div className="mr-4 hidden lg:block">{navList}</div> */}
          <div className="mr-4 hidden lg:block w-full">
            <div className="flex gap-3 items-center justify-between max-md:flex-wrap max-md:justify-center ">
              <div className="relative  w-full flex-wrap items-stretch md:block self-stretch flex justify-between rounded z-50">
                <div className="absolute inset-y-0 left-0 flex items-center  text-black rounded-lg pl-6 button-style">
                  <Select label="All Resources" className=" h-full">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
                <input
                  type="text"
                  placeholder="Search all of resources"
                  className="rounded-lg shadow-sm py-4 pl-[33%] pr-10 w-full placeholder:text-gray-700"
                />
                <span className="absolute inset-y-0 right-0 flex items-center  text-white bg-primary px-6 rounded-lg">
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
              <div className=" bg-white shadow-sm flex justify-between gap-3 pl-8 py-3 pr-8 rounded max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c8229dc-b0b8-4201-8486-0d9448bacc1b?"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-center text-sm font-medium leading-8 grow whitespace-nowrap">
                  Filters
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* <Button
              variant={isBlog ? "outlined" : "gradient"}
              className={`hidden lg:inline-block rounded-full px-8 py-3 ${
                isBlog && "border border-primary"
              }`}
              color="white"
            >
              {isBlog ? (
                <span className="capitalize text-black">Subscribe</span>
              ) : (
                <p className="capitalize text-primary flex gap-1 items-center justify-center">
                  <CgMenuGridR className="text-lg" />
                  Explore
                </p>
              )}
            </Button> */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <img
            src="/nav.png"
            alt="hat"
            className="w-[40px] md:w-[60px] h-[40px] md:h-[58px] "
          />
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="px-4 py-2 rounded-full bg-white"
          >
            <span>Explore</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
