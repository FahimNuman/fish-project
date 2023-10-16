import {
  Button,
  Card,
  CardBody,
  Collapse,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import "./fonts.css"

export default function AboutTextArea() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-36 gap-20 my-32 w-full relative">
      <div className="col-span-1 flex flex-col gap-9 justify-center mr-4">
        <h2 className=" text-2xl md:text-4xl flex items-end gap-2">
          <img
            src="/hat-color.png" 
            alt="hat"
            className="w-[40px] md:w-[60px] h-[40px] md:h-[58px]"
          />
          <span style={{ fontFamily: 'Conthrax-SB' }}>How site works</span>
         
        </h2>
        <div className="flex flex-col gap-6 md:gap-10">
          <p className="leading-8 md:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dictum egestas enim. Proin ex sem, volutpat et sapien id, ultrices e
          </p>
          <p className="leading-8 md:leading-10">
            porttitor malesuada quis vel magna. Praesent nec volutpat diam.
          </p>
        </div>
        <div className="w-full md:pr-10">
          <Button
            onClick={toggleOpen}
            className="bg-transparent border border-black text-black w-full text-left flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img src="/about/dot.png" alt="dot" />
              <p className="">Getting Started Guide</p>
            </div>
            <img src="/about/plus.png" alt="dot" />
          </Button>
          <Collapse open={open}>
            <Card className="my-4 mx-auto w-8/12">
              <CardBody>
                <Typography>
                  Use our Tailwind CSS collapse for your website. You can use if
                  for accordion, collapsible items and much more.
                </Typography>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-9 justify-center mr-4">
        <h2 className=" text-2xl md:text-4xl flex items-end gap-2">
          <img
            src="/hat-color.png" 
            alt="hat"
            className="w-[40px] md:w-[60px] h-[40px] md:h-[58px]"
          />
          <span style={{ fontFamily: 'Conthrax-SB' }}>Terms & Condition</span>
        </h2>
        <div className="flex flex-col gap-6 md:gap-10">
          <p className="leading-8 md:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dictum egestas enim. Proin ex sem, volutpat et sapien id, ultrices e
          </p>
          <p className="leading-8 md:leading-10">
            porttitor malesuada quis vel magna. Praesent nec volutpat diam.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-blue-700">Check Our Privacy Policy</p>
        </div>
      </div>
      <div className="w-[1px] h-[249px] bg-gray-600 absolute left-[47%] top-[35%] transform -translate-x-1/2 hidden md:block"></div>
    </div>
  );
}
