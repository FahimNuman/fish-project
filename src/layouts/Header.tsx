import React, { useEffect, useState } from "react";
import AppLogo from "../components/Common/AppLogo";
import {
  Button,
  IconButton,
  Collapse,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

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
    <div className="max-h-[768px] max-w-inner mx-auto px-3 md:px-0">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-0 lg:py-4 bg-transparent shadow-none border-0 backdrop-filter-none backdrop-blur-none px-3">
        <div className="flex items-center justify-between text-blue-gray-900">
         <button ><AppLogo /></button>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <Button
              variant={isBlog ? "outlined" : "gradient"}
              className={`hidden lg:inline-block rounded-full px-8 py-3 ${
                isBlog && "border border-primary"
              }`}
              color="white"
            >
              {isBlog ? (
                <span className="capitalize text-black">Subscribe</span>
              ) : (
                <span className="capitalize text-primary">Explore</span>
              )}
            </Button>
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
