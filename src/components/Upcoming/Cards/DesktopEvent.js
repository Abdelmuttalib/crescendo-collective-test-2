import React from "react";

const DesktopEvent = ({ month, date, title, description, location, adj }) => {
  return (
    <div>
      <div
        style={{ width: "420px", height: "400px" }}
        className="mt-8 text-white bg-desktopblue"
      >
        <div className="w-20 bg-black h-20 ml-4 relative -top-5">
          <div className="flex flex-col w-full justify-center text-center h-full text-white">
            <span className="text-sm pt-1">{month}</span>
            <span
              // style={{ color: "#00A81B" }}
              className="h-full text-3xl font-semibold "
            >
              {date}
            </span>
          </div>
          <div className="w-72 mt-5 flex flex-col gap-5 pl-2">
            <div className={`text-3xl font-semibold ${adj}`}>{title}</div>
            <div className="text-2xl font-light w-96">{description}</div>
            <button
              type="button"
              className="border-2 border-white p-4 text-2xl mt-2 border-opacity-50"
            >
              View Event Details
            </button>
          </div>
          <div className="w-6 h-14 relative -bottom-16 -left-4 bg-desktopblue">
            <div className="flex flex-col w-full justify-center text-center h-full text-green-600">
              <div className="w-14 overflow-hidden inline-block relative -right-6">
                <div className="h-20 rotate-45 transform origin-top-right bg-desktopblue"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative -bottom-80 -right-34 text-black font-bold
         text-2xl mt-4 flex justify-end pr-5"
        >
          <div>{location}</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopEvent;
