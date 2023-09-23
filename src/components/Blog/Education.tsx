import React from "react";

export default function Education() {
  return (
    <div className="pt-10 pb-16">
      <div className="bg-white py-5 md:px-12 px-4 flex justify-between items-center">
        <h2 className="font-semibold capitalize text-xl md:text-3xl relative">
          <span>Educations</span>
          <div className="absolute -bottom-4 left-0 h-[6px] w-full bg-secondary"></div>
        </h2>
        <p className="text-primary text-xs md:text-base">View more Articles</p>
      </div>
      <div className="grid md:grid-cols-2 py-10 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="col-span-1 flex flex-col bg-white pb-10">
            <div className="relative">
              <img src="/blog/education.png" alt="" className="w-full h-full" />
              <div className="absolute right-16 -bottom-6 p-5 rounded-full bg-red-500">
                <img src="/blog/plus.png" alt="" className="h-6 w-6" />
              </div>
            </div>
            <div className="py-8 px-10 flex flex-col gap-6">
              <p className="text-xs">Admission</p>
              <p className="font-semibold">
                More options for learn with Google Workspace and Education
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
