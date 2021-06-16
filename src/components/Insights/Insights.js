import React from "react";
import InsightCard from "./InsightCard";

const DesktopCard = ({ color, image, title, adj }) => {
  return (
    <>
      <div
        style={{
          width: "416px",
          height: "419px",
          flexDirection: "column",
        }}
        className={`bg-white mt-6 border-b-12 border-${color} flex`}
      >
        <img
          src={image}
          style={{ width: "359px", height: "258px" }}
          alt="image"
          className="m-6"
        ></img>
        <div className={`text-${color} ${adj} text-4xl font-semibold ml-7`}>
          {title}
        </div>
      </div>
    </>
  );
};

const DesktopInsight = () => {
  return (
    <>
      <div
        style={{ height: "620px" }}
        className="text-black pt-12 pl-10 w-full hidden md:hidden lg:flex justify-center bg-graybackground "
      >
        <div className="">
          <div className="text-5xl font-medium">
            ACME<span className="font-medium"> Insights</span>
          </div>
          <div className="text-2xl font-medium mb-1 mt-2">
            How are factors being used around the world?
          </div>
          <div className="flex flex-row gap-7">
            <DesktopCard
              color="specialblue"
              image="/Onmountain.png"
              title="Global Factor Investing Study"
              adj="w-222"
            />
            <DesktopCard
              color="specialgreen"
              image="/Ongo.png"
              title="2019 Outlook"
              adj="w-16"
            />
            <DesktopCard
              color="cyan"
              image="/inpark.png"
              title="Capital Market Assumptions"
              adj="w-222"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const MobileInsight = () => {
  return (
    <>
      <div
        style={{ height: "730px" }}
        className="text-white pt-10 pl-16 w-full block md:hidden lg:hidden bg-darkerblue"
      >
        <div className="text-5xl font-medium">
          ACME<span className="font-bold"> Insights</span>
        </div>
        <div className="text-2xl font-light">
          How are factors being used around the world?
        </div>
        <InsightCard color="specialgreen" />
      </div>
    </>
  );
};

const Insights = () => {
  return (
    <>
      <DesktopInsight />
      <MobileInsight />
    </>
  );
};

export default Insights;
