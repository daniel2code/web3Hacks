import React from "react";
import Image from "next/image";

const Primary = () => {
  return (
    <div className="w-[25%] max-w-[340px] bg-white">
      <div className="h-[300px] w-full">
        <Image src={require("../../assets/btcc.jpg")} />
      </div>

      <div className="p-5">
        <h2 className="text-[19px] leading-[23px] font-medium" >How to Look Good Straight After a Major Workout</h2>
        <p className="text-[12px] mt-4" >By Daniel Star</p>
      </div>
    </div>
  );
};

export default Primary;
