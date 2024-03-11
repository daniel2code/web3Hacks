import React from "react";
import styles from "./Popular.module.css";
import Image from "next/image";
import SecondaryCard from "../../../components/secondaryCard/sec";
import { truncateText } from "../../../utils/trunczteText";

const Popular = ({ data }) => {
  const popData = data && data.length > 0 && data[0];

  console.log(popData);

  return (
    <div className={`w-full flex justify-center py-[70px]`}>
      <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
        <div className={`${styles.popBox} pb-[15px]`}>
          <p className={`text-[12px] text-[#fff]`}>Based on</p>
          <h2 className={`text-[35px] leading-[35px] text-[#fff]`}>
            Popularity
          </h2>
        </div>

        <div className="mt-6 flex items-start gap-x-[20px] flex-col lg:flex-row ">
          <div className={`lg:w-[55%] w-full`}>
            <div className="w-full">
              <Image
                // src={popData && popData?.images[0]?.url}
                width="100"
                height="100"
                className="w-full h-full object-contain aspect-auto"
              />
              <p className="text-[12px] mt-5 text-[#c2c3c7]">APRIL 23, 2016</p>
              <h1 className="text-[23px] md:text-[33px] mt-2 md:leading-[38px] leading-[28px] text-[#fff]">
                {popData?.title}
              </h1>
              <p className="mt-4 text-[15px] sm:text-[16px] text-[#c2c3c7]">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      popData && truncateText(popData && popData?.content, 400),
                  }}
                />
              </p>
            </div>
          </div>
          <div
            className={`lg:w-[45%] w-full mt-[50px] lg:mt-0 pl-[0px] lg:pl-[25px] border border-y-0 border-r-0 border-l-0 md:border-l-gray-400`}
          >
            <div className="flex flex-col gap-y-[20px] md:gap-y-[25px]">
              {data?.length > 0 ? (
                <>
                  {data?.map((item) => {
                    return <SecondaryCard data={item} />;
                  })}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
