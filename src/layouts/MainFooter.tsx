import React from "react";
import FooterCard from "../components/Footer/FooterCard";
import ButtonCard from "../components/Footer/ButtonCard";
import SocialCard from "../components/Footer/SocialCard";
import RecentCard from "../components/Footer/RecentCard";

export default function MainFooter() {
  return (
    <div
      className="max-w-layout mx-auto h-[658px] bg-[#3333334f] relative"
      style={{
        backgroundImage: "url(/home/footer.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-[#2A2B2E]"
        style={{ mixBlendMode: "multiply" }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white max-w-inner mx-auto px-3 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:pt-20 px-3">
          <div className="col-span-1 flex flex-col gap-4 md:gap-9">
            <FooterCard />
          </div>
          <div className="col-span-1">
            <ButtonCard />
          </div>
          <div className="col-span-1">
            <SocialCard />
          </div>
          <div className="col-span-1">
            <RecentCard />
          </div>
        </div>
      </div>
    </div>
  );
}
