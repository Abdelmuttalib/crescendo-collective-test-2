import React from "react";
import DesktopEvent from "./Cards/DesktopEvent";

const DesktopEvents = () => {
  return (
    <div>
      <div
        style={{ height: "751px" }}
        className="text-black pt-20 pl-10 w-full gap-7 hidden lg:flex justify-center bg-gray-300 "
      >
        <div className="">
          <div className="text-5xl font-medium">Upcoming Events</div>
          <div className="text-2xl w-333 mt-3">
            This needs a great tagline, but I'll fill it in later
          </div>
          <div className="flex flex-row gap-7 mt-4">
            <DesktopEvent
              month="JAN"
              date="28"
              title="Insight Exchange Network"
              description="Join us for this conference showcasing innovation..."
              location="Chicago, IL"
            />
            <DesktopEvent
              month="FEB"
              date="12"
              title="Citywide Buyer's Retreat"
              description="Find out how banks are responding to the changing future of interest.."
              location="The Wagner, New York"
            />
            <DesktopEvent
              month="MAY"
              date="6"
              title="Research Exchange"
              description="Find the best online resources to help with investments..."
              location="London, England"
              adj="pt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopEvents;
