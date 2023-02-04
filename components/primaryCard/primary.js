import React from "react";
import Image from "next/image";
import Link from "next/link";

const Primary = ({ showBtn, link }) => {
  return (
    <div
      className="w-[300px] lg:w-[24%] min-w-[250px] max-w-[340px] bg-white"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
    >
      <div className="lg:h-[270px] h-[210px] max-h-[400px] w-full">
        <Image
          src={require("../../assets/btcc.jpg")}
          height="100%"
          width="100%"
          alt="blog post image"
        />
      </div>

      <div className="p-5 mt-2">
        <h2 className="text-[19px] leading-[23px] text-[#000] font-medium">
          How to Look Good Straight After a Major Workout
        </h2>
        <p className="text-[12px] mt-3 text-[#000]">By Daniel Star</p>
      </div>
      {showBtn && (
        <button className="w-full py-2 border border-gray-300 font-medium text-[15px] ">
          <Link href={link}>Edit post</Link>
        </button>
      )}
    </div>
  );
};

export default Primary;
