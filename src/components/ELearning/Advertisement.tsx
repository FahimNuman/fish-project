import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Advertisement = () => {
  return (
    <div className="xl:max-w-layout md:max-w-5xl mx-auto mt-5 mb-10 px-1 md:px-0">
      <div className="flex flex-wrap">
        {/* Left side photo */}
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <Card shadow={false}>
            <CardHeader className="m-0 rounded-none">
              <img
                src="/advertsmnt/Capture.JPG"
                alt="card-image"
                className="h-[300px] w-full "
              />
            </CardHeader>
          </Card>
        </div>

        {/* Two sections in the same width */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Card shadow={false} className="rounded-none">
            <CardHeader className="m-0 rounded-none">
              <img
                src="/advertsmnt/Capture1.JPG"
                alt="card-image"
                className="h-[300px] w-full "
              />
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
