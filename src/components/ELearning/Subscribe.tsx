import React from 'react';

const Subscribe = () => {
  const backgroundStyle = {
    backgroundImage: "url('/subscribe/Capture1.jpg')",
    backgroundPosition: 'center center',
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    minHeight: '400px', // Use minHeight instead of a fixed height
  };

  return (
    <div className="flex gap-3 md:gap-6 items-center">
      <div className="w-full dark:bg-gray-500" style={backgroundStyle}>
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading text-center text-white">Sign Up For Our Newsletter</h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex flex-col sm:flex-row"> {/* Use flex-col for small screens */}
            <input type="text" placeholder="Enter Your Email" className="w-full sm:w-2/3 p-3 rounded-lg sm:rounded-l-lg" />
            <button type="button" className="w-full sm:w-1/3 p-3 font-semibold bg-red-300 text-gray-900 dark:bg-red-400 dark:text-gray-100 rounded-lg sm:rounded-r-lg mt-2 sm:mt-0">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
