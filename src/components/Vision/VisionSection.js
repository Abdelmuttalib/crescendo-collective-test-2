import React from "react";

const VisionSection = () => {
  return (
    <div
      style={{ height: "566px" }}
      className="flex justify-center content-center md:hidden lg:flex flex-col bg-desktopblue lg:bg-darkerblue text-center lg:p-7 text-white gap-5"
    >
      <div className="text-5xl w-full font-bold lg:text-5xl">
        Our Commitment to Professionals
      </div>
      <div className="font-light text-2xl pl-10 pr-12 opacity-80 lg:text-3xl lg:w-full lg:pl-48 lg:pr-48">
        We help our partners deliver industry leading results with a commitment
        to excellence, thought-provoking insights and experienced distribution.
        We are lase focused on our shared goal - helping clients achieve their
        objectives.
      </div>
      <div>
        <button
          style={{ width: "206px", height: "52px" }}
          type="button"
          className="border-2 font-semibold text-white border-white text-2xl lg:text-2xl text-center border-opacity-40 mt-9 lg:w-full pt-4 pb-12"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default VisionSection;
