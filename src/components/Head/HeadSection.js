import React from "react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
const backImage = "/mission.jpg";

const HeadSection = () => {
  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  );
};
export default HeadSection;
