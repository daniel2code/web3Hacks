import React from "react";
import Image from "next/image";

const Sec = () => {
  return (
    <div className="w-full flex gap-x-[15px] border items-start sm:items-center lg:items-start border-t-0 border-x-0 border-b-gray-200">
      <div className="w-[110px] h-[100px] md:w-[150px] md:h-[100px] max-w-[110px] max-h-[110px] md:max-w-[150px] md:max-h-[100px] ">
        <Image
          src={require("../../assets/about.jpg")}
          // height="100%"
          // width="100%"
          // alt="blog post image"
          layout="fill"
          className={"image"}
          alt="blog post image"
        />
      </div>

      <div className="w-[calc(100%-110px)] pb-[15px] lg:pb-0">
        <h3 className="text-[13px] sm:text-[14px]  font-semibold leading-[17px]">
          What to Wear to a Taylor Swift Concert, According to Gigi Hadid
        </h3>

        <p className="text-[11px] sm:text-[12px] mt-2 leading-[14px]">
          There are many elements of Charlotte D’Alessio’s life that read like a
          teenager’s fairy tale.…
        </p>
      </div>
    </div>
  );
};

export default Sec;
