import React from "react";

const FooterButton = ({ children }) => {
  return (
    <button
      className="border-2 w-full text-gray-500 font-semibold text-md"
      style={{
        height: "60px",
        backgroundColor: "#EAEAEA",
      }}
    >
      {children}
    </button>
  );
};

const Footer = () => {
  return (
    <>
      <div className="w-full h-24 bg-darkgray hidden md:hidden lg:flex justify-center text-white">
        <div className="w-5/6 flex flex-row ml-10">
          <div className="w-3/6 pl-36 pt-4">
            <div className="w-48">
              Call us at 111-222-3333 for more information
            </div>
          </div>
          <div className="w-3/6 flex justify-end">
            <div className="pl-16 w-96 flex gap-2 pt-4">
              Social Share
              <img
                className="w-7 h-7"
                src="/twittericon.png"
                alt="Twitter Share"
              ></img>
              <img
                className="w-7 h-7"
                src="/facebookicon.png"
                alt="Twitter Share"
              ></img>
              <img
                className="w-7 h-7"
                src="/linkedinicon.png"
                alt="Twitter Share"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // width: "713px",
          height: "599px",
          left: "2px",
          top: "3160px",
          backgroundColor: "#C4C4C4",
        }}
        className="block md:hidden lg:hidden"
      >
        <div className="w-full flex flex-col justify-center pl-5 pr-5">
          <div className="flex flex-row gap-3 w-full mt-7 pr-3 pl-3">
            <FooterButton>Privacy Policy</FooterButton>
            <FooterButton>Terms of Use</FooterButton>
          </div>
          <div className="justify-center text-center mb-1 mt-3 text-blue-900">
            <span>Site Links</span>
          </div>
          <div className="justify-center text-center w-full p-4 pb-0 pt-0">
            <hr className="border-gray-400" />
          </div>
          <div className="flex flex-col m-3 gap-2">
            <FooterButton>Home</FooterButton>
            <FooterButton>About Us</FooterButton>
            <FooterButton>Insights</FooterButton>
            <FooterButton>Events</FooterButton>
            <FooterButton>Due Dilligence</FooterButton>
            <FooterButton>Contact Us</FooterButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
