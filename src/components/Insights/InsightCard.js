import React from "react";

const InsightCard = ({ color }) => {
  return (
    <div
      style={{
        width: "459px",
        height: "500px",
        flexDirection: "column",
      }}
      className={`bg-white mt-6 border-b-12 border-${color} flex`}
    >
      <img
        src="/Screenshot (74).png"
        style={{ width: "406px", height: "331px" }}
        alt="image"
        className="m-6"
      ></img>
      <div
        style={{
          width: "240px",
          //   Height: "50px",
        }}
        className="text-green-600 text-3xl font-bold ml-14 mt-4 "
      >
        Global Factor Investing Study
      </div>
    </div>
  );
};

export default InsightCard;
