import React from "react";

const MobileEvent = () => {
  return (
    <div
      style={{ width: "420px", height: "400px", backgroundColor: "#002177" }}
      className="mt-8 text-white"
    >
      <div className="w-20 bg-white h-20 ml-4 relative -top-5">
        <div className="flex flex-col w-full justify-center text-center h-full text-green-600">
          <span className="text-sm pt-1">JAN</span>
          <span
            // style={{ color: "#00A81B" }}
            className="h-full text-3xl font-semibold "
          >
            28
          </span>
        </div>
        <div className="w-72 mt-5 flex flex-col gap-5">
          <div className="text-3xl font-semibold">Insight Exchange Network</div>
          <div className="text-2xl font-light">
            Join us for this conference showcasing innovation...
          </div>
          <button
            type="button"
            className="border-2 border-white p-4 text-2xl mt-2 border-opacity-50"
          >
            View Event Details
          </button>
        </div>
        <div
          className="w-6 bg-white h-14 relative -bottom-16 -left-4 "
          style={{ backgroundColor: "#002177" }}
        >
          <div className="flex flex-col w-full justify-center text-center h-full text-green-600">
            <div className="w-14 overflow-hidden inline-block relative -right-6">
              <div
                style={{ backgroundColor: "#002177" }}
                className="h-20 rotate-45 transform origin-top-right"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative -bottom-80 -right-64 text-gray-500 font-semibold
       text-3xl mt-4 pr-16"
      >
        Chicago, IL
      </div>
    </div>
  );
};

export default MobileEvent;

// Up Rectangle
// <div class="w-11  overflow-hidden inline-block">
//  <div class=" h-16  bg-black rotate-45 transform origin-bottom-left"></div>
// </div>
