import React from "react";
import Image from "next/image";

const Primary = () => {
  return (
    <div className="w-[300px] lg:w-[25%] min-w-[250px] max-w-[340px] bg-white">
      <div className="lg:h-[270px] h-[210px] max-h-[400px] w-full">
        <Image
          src={require("../../assets/btcc.jpg")}
          height="100%"
          width="100%"
          alt="blog post image"
        />
      </div>

      <div className="p-5 mt-4">
        <h2 className="text-[19px] leading-[23px] font-medium">
          How to Look Good Straight After a Major Workout
        </h2>
        <p className="text-[12px] mt-3">By Daniel Star</p>
      </div>
    </div>
  );
};

export default Primary;
