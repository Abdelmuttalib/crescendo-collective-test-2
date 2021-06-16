import React from "react";
import {
  Navbar,
  HeadSection,
  Insights,
  VisionSection,
  UpcomingSection,
  Footer,
} from "./components";

const breakpoint = `< No Supported Breakpoints for Laptops & Tablets - Only Mobile("640px") &
Desktop("1920px") />`;

const App = () => {
  return (
    <>
      <div className="hidden md:flex justify-center content-center text-center w-full h-screen lg:hidden">
        <div className="w-full h-96 m-auto text-8xl font-extrabold italic">
          {breakpoint}
        </div>
      </div>
      <Navbar />
      <HeadSection />
      <Insights />
      <VisionSection />
      <UpcomingSection />
      <Footer />
    </>
  );
};

export default App;
