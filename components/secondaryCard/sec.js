import React from "react";
import Image from "next/image";
import { truncateText } from "../../utils/trunczteText";

const Sec = ({ data }) => {
  return (
    <div className="w-full flex gap-x-[15px] border items-start sm:items-center lg:items-start border-t-0 border-x-0 border-b-[#c2c3c7]">
      <div className="w-[110px] h-[100px] md:w-[150px] md:h-[100px] max-w-[110px] max-h-[110px] md:max-w-[150px] md:max-h-[100px] ">
        <Image
          src={data?.images[0]?.url}
          height="100"
          width="100"
          // alt="blog post image"
          className="object-contain w-[140px] h-[90px]"
          alt="blog post image"
        />
      </div>

      <div className="w-[calc(100%-110px)] pb-[15px] lg:pb-0">
        <h3 className="text-[13px] sm:text-[14px] text-[#fff] font-semibold leading-[17px]">
          {data?.title}
        </h3>

        <p className="text-[11px] sm:text-[12px] text-[#c2c3c7] mt-2 leading-[14px]">
          <div
            dangerouslySetInnerHTML={{
              __html: truncateText(data?.content, 250),
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default Sec;
