import React from "react";
import MobileEvents from "./MobileEvents";
import DesktopEvents from "./DesktopEvents";

const UpcomingSection = () => {
  return (
    <>
      <MobileEvents />
      <DesktopEvents />
    </>
  );
};

export default UpcomingSection;

// const DesktopCard = ({ color, image }) => {
//   return (
//     <>
//       <div
//         style={{
//           width: "416px",
//           height: "419px",
//           flexDirection: "column",
//         }}
//         className={`bg-white mt-6 border-b-12 border-${color} flex`}
//       >
//         <img
//           src={image}
//           style={{ width: "359px", height: "258px" }}
//           alt="image"
//           className="m-6"
//         ></img>
//         <div
//           style={{
//             width: "359px",
//             //   Height: "50px",
//             // fontSize: "36px",
//           }}
//           className={`text-${color} text-4xl font-semibold ml-7`}
//         >
//           Global Factor Investing Study
//         </div>
//       </div>
//     </>
//   );
// };

// // const DesktopInsight = () => {
// //   return (
// //     <>
// //       <div
// //         style={{ height: "801px" }}
// //         className="text-black pt-8 pl-10 w-full hidden lg:flex justify-center bg-gray-300 "
// //       >
// //         <div className="">
// //           <div className="text-4xl font-medium">
// //             ACME<span className="font-medium"> Insights</span>
// //           </div>
// //           <div className="text-2xl font-light">
// //             How are factors being used around the world?
// //           </div>
// //           <div className="flex flex-row gap-7">
// //             <DesktopCard
// //               color="specialblue"
// //               image="/Screenshot (60) - Copy.png"
// //             />
// //             <DesktopCard color="specialgreen" image="/Screenshot (61).png" />
// //             <DesktopCard color="cyan" image="/Screenshot (61) - Copy.png" />
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// const MobileInsight = () => {
//   return (
//     <>
//       <div
//         style={{ height: "801px" }}
//         className="text-white pt-8 pl-10 w-full lg:hidden bg-darkerblue"
//       >
//         <div className="text-4xl font-light">
//           ACME<span className="font-semibold"> Insights</span>
//         </div>
//         <div className="text-2xl font-light">
//           How are factors being used around the world?
//         </div>
//         <InsightCard />
//       </div>
//     </>
//   );
// };

// const Insights = () => {
//   return (
//     <>
//       <DesktopInsight />
//       <MobileInsight />
//     </>
//   );
// };
