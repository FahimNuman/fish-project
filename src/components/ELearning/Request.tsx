import React from "react";

export default function Request() {
  return (
    <div className="bg-secondary text-white pt-20 -mt-12 -z-10">
      <div className="xl:max-w-inner md:max-w-5xl mx-auto pt-12 pb-16 px-2 relative overflow-hidden">
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {" "}
            {/* Added 'items-center' class here */}
            <div className="flex md:justify-right justify-center">
              <img src="/request/1.png" alt="request" />
            </div>
            <div className="flex flex-col gap-y-6 md:gap-y-16 md:justify-start justify-center py-6 max-w-[480px]">
              <h2 className="text-2xl md:text-5xl font-bold leading-[2rem] text-center md:text-left md:!leading-[4rem]">
                Request your need. We will try our best to help you
              </h2>
              <div className="text-black flex justify-center md:justify-start w-full">
                <button className="py-3 rounded-full w-60 bg-white text-center hover:text-blue-500">
                  Request your need
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {" "}
            {/* Added 'items-center' class here */}
            <div className="flex flex-col gap-y-6 md:gap-y-16 md:justify-middle justify-center py-6 max-w-[480px] pl-16">
              <p>Are You Want Contribute?</p>
              <h2 className="text-2xl md:text-5xl font-bold leading-[2rem] text-center md:text-left md:!leading-[4rem]">
                Share your Resouce for everyozne.It’s helpful.
              </h2>
              <div className="text-black flex justify-center md:justify-start w-full">
                <button className="py-3 rounded-full w-60 bg-white text-center hover:text-blue-500">
                  Upload your resource
                </button>
              </div>
            </div>
            <div className="flex md:justify-right justify-center">
              <img src="/request/2.png" alt="request" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
