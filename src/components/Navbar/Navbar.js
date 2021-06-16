import React from "react";
// import icon8 from "../../../public/icon8-menu-48.png";
const Navbar = () => {
  return (
    <div
      style={{ backgroundColor: "#EAEAEA" }}
      className="w-full h-20 lg:h-40 lg:gap-9 md:hidden flex lg:flex justify-center content-center lg:border-b-12 lg:border-blue-900"
    >
      <div className="w-40 h-36 hidden lg:block ml-24">
        <img src="/home.png" alt="Home Logo" className="relative top-2"></img>
      </div>

      <div className="h-20 mt-10 hidden md:hidden lg:block">
        <div style={{ color: "#00A2FD" }} className="font-semibold text-xl">
          Research Professional
        </div>
        <div className="text-5xl font-semibold">Platform</div>
      </div>
      <div className="border-l-2 border-gray-400 opacity-50 h-16 mt-14 ml-4 hidden lg:block"></div>
      <div className="hidden lg:flex gap-28 h-20 justify-center lg:text-2xl content-center mt-20 pl-10">
        <div>Home</div>
        <div>About Us</div>
        <div>Insights</div>
        <div>Events</div>
        <div>Contact Us</div>
      </div>
      <div className="flex-grow flex md:hidden w-10 text-center justify-center lg:hidden">
        <img
          src="/screenshot (66).png"
          alt="logo"
          className="w-52 h-20 lg:hidden"
          //   style={{ height: "76px" }}
        ></img>
      </div>
      <img
        src="/icons8-menu-48.png"
        alt="Menu"
        className="h-10 m-4 md:hidden lg:hidden"
      ></img>
    </div>
  );
};

export default Navbar;
