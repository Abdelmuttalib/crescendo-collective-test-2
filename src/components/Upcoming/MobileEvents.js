import React from "react";
import Upcard from "./Upcard";
import MobileEvent from "./Cards/MobileEvent";

const MobileEvents = () => {
  return (
    <div>
      <div
        style={{ height: "750px", backgroundColor: "#EAEAEA" }}
        className="text-black pt-8 pl-10 w-444 block md:hidden lg:hidden justify-center bg-gray-300 "
      >
        <div className=" ml-10">
          <div className="text-4xl font-light">
            Upcoming <span className="font-semibold"> Events</span>
          </div>
          <div
            style={{ width: "25rem" }}
            className="text-gray-400 text-md font-semibold mt-4  ml-2"
          >
            At ACME, we're dedicated to learning, connecting, and exploring
            opportunities.
          </div>
          <div className="flex flex-row gap-7 mt-3">
            <MobileEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEvents;
