import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';

const Advertisement = () => {
  const imageStyle = {
    margin: 0,
    padding: 0,
    display: 'block',
    width: '100%',
  };

  return (
    <div className="xl:max-w-inner md:max-w-5xl mx-auto mt-5 mb-10 px-1">
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="/advertsmnt/Capture.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
              style={imageStyle}
            />
           
              <img
                src="/advertsmnt/Capture1.jpg"
                alt=""
                className="h-80 dark-bg-gray-500 aspect-video"
                style={imageStyle}
              />
             
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertisement;
