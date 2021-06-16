const DesktopView = () => {
  return (
    <div
      className="w-full h-full hidden md:hidden lg:flex"
      //height 606.78px + 526px = 1132px;
      style={{
        height: "35rem",
        background:
          "linear-gradient(123.6deg, #3583CC 15.1%, rgba(148, 191, 231, 0.468408) 61.33%, rgba(232, 244, 255, 0) 116.95%), url(/mission.jpg) center center/cover no-repeat",
      }}
    >
      <div className="ml-56 pl-36 pt-40 text-white">
        <div className="font-bold  text-5xl">ACME Wealth</div>
        <div className="font-bold  text-5xl w-full">Managment Platforms</div>
        <div className="w-26 text-xx gap-0 font-light mt-5 opacity-80">
          <div>Investment excellence.</div>
          <div>Diversity of though.</div>
          <div>Organizational strength.</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
