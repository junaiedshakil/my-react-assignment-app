import React from "react";
import backImg from "./assets/vector1.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div>
      <div className="max-w-[1440px] flex mx-auto gap-[30px] my-[45px]">
        <div
          className="w-[700px] h-[250px] md:w-[700px] md:h-[250px] sm:w-[300px] sm:h-[150px] bg-contain bg-center bg-no-repeat flex flex-col text-white justify-center text-center rounded-2xl"
          style={{
            backgroundImage: `url(${backImg}) `,
            backgroundColor: "#422AD5",
          }}
        >
          <h2 className="text-[25px]">In-Progress</h2>
          <h1 className="text-[25px]">{inProgressCount}</h1>
        </div>
        <div
          className="w-[700px] h-[250px] md:w-[700px] md:h-[250px] sm:w-[300px] sm:h-[150px] bg-contain bg-center bg-no-repeat flex flex-col text-white justify-center text-center rounded-2xl"
          style={{
            backgroundImage: `url(${backImg})`,
            backgroundColor: "#54CF68",
          }}
        >
          <h2 className="text-[25px]">Resolved</h2>
          <h1 className="text-[25px]">{resolvedCount}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
