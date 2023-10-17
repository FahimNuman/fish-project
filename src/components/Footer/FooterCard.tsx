import React, { useState, useEffect } from "react";

export default function FooterCard() {
  const [membersCount, setMembersCount] = useState(200000);
  const [downloadsCount, setDownloadsCount] = useState(30000);
  const [itemCount, setItemCount] = useState(500000);

  // Simulate real-time updates
  useEffect(() => {
    const updateCounts = () => {
      // Update the counts with new values, you can fetch these from an API or another source
      setMembersCount((prevCount) => prevCount + 1); // Simulate an increase in members
      setDownloadsCount((prevCount) => prevCount + 5); // Simulate an increase in downloads
      setItemCount((prevCount) => prevCount + 10); // Simulate an increase in item count
    };

    // Update counts every second (adjust the interval as needed)
    const interval = setInterval(updateCounts, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
     <div className="flex gap-3 md:gap-6 items-center">
        <div className="md:p-3 p-2 rounded-full bg-white md:w-[57px] w-[40px] md:h-[57px] h-[40px] ">
          <img src="/hat-color.png" alt="hat" />
        </div>
        <div className="flex flex-col text-white">
          <p className="font-semibold md:text-[17px] text-[14px]">
            All Freebies
          </p>
          <p className="text-[14px] md:text-[17px]">100% Verified</p>
        </div>
      </div>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="md:p-3 p-2 rounded-full bg-white md:w-[57px] w-[40px] md:h-[57px] h-[40px] ">
          <img src="/hat-color.png" alt="hat" />
        </div>
        <div className="flex flex-col text-white">
          <p className="font-semibold md:text-[17px] text-[14px]">All Freebies</p>
          <p className="text-[14px] md:text-[17px]">+{membersCount} Members</p>
        </div>
      </div>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="md:p-3 p-2 rounded-full bg-white md:w-[57px] w-[40px] md:h-[57px] h-[40px] ">
          <img src="/hat-color.png" alt="hat" />
        </div>
        <div className="flex flex-col text-white">
        <p className="text-[14px] md:text-[17px]">Totall Downloads</p>
          <p className="font-semibold md:text-[17px] text-[14px]">+{downloadsCount} </p>
          
        </div>
      </div>
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="md:p-3 p-2 rounded-full bg-white md:w-[57px] w-[40px] md:h-[57px] h-[40px] ">
          <img src="/hat-color.png" alt="hat" />
        </div>
        <div className="flex flex-col text-white">
        <p className="font-semibold md:text-[17px] text-[14px]">Have item</p>
        <p className="text-[14px] md:text-[17px]">+{itemCount} </p>
         
          
        </div>
      </div>
    </>
  );
}
