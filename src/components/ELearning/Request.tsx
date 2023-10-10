import React from "react";

export default function Request() {
  return (
    <div className="bg-secondary text-white pt-20 -mt-12 -z-10 ">
      <div className="xl:max-w-inner md:max-w-5xl mx-auto pt-12 pb-16 px-2 relative overflow-hidden">
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-start">
              <img src="/request/1.png" alt="request" />
            </div>
            <div className="flex flex-col gap-y-6 md:gap-y-16 justify-start py-6 max-w-[480px]">
              <h2 className="text-2xl md:text-5xl font-bold !leading-[4rem]">
                Request your need. We will try our best to help you
              </h2>
              <div className="w-60 text-black">
                <button className="py-3 rounded-full w-full bg-white text-center">
                  Request your need
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-y-6 md:gap-y-16 justify-start py-6 max-w-[680px]">
              <div className="flex flex-col gap-3">
                <p className="text-lg">Are you want contribute?</p>
                <h2 className="text-2xl md:text-5xl font-bold !leading-[4rem]">
                  Share your resource for everyone. It's helpful.
                </h2>
              </div>
              <div className="w-60 text-black">
                <button className="py-3 rounded-full w-full bg-white text-center">
                  Upload your resource
                </button>
              </div>
            </div>
            <div className="flex justify-start">
              <img src="/request/2.png" alt="request" />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-y-6 md:gap-y-16 justify-start py-6 max-w-[480px]">
              <h2 className="text-2xl md:text-5xl font-bold !leading-[4rem]">
                Request your need. We will try our best to help you
              </h2>
              <div className="w-60 text-black">
                <input
                  type="text"
                  placeholder="Request your need"
                  className="pl-6 py-3 rounded-full w-full placeholder:text-black"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <img src="/request/2.png" alt="request" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}