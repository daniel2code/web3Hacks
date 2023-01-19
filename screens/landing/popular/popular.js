import React from "react";
import styles from "./Popular.module.css";
import Image from "next/image";
import SecondaryCard from "../../../components/secondaryCard/sec";

const Popular = () => {
  return (
    <div className={`w-full flex justify-center py-[70px]`}>
      <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
        <div className={`${styles.popBox} pb-[15px]`}>
          <p className={`text-[12px] text-[#000]`}>Based on</p>
          <h2 className={`text-[35px] leading-[35px] text-[#000]`}>
            Popularity
          </h2>
        </div>

        <div className="mt-6 flex items-start gap-x-[20px] flex-col lg:flex-row ">
          <div className={`lg:w-[55%] w-full`}>
            <div className="w-full">
              <Image src={require("../../../assets/btcc.jpg")} />
              <p className="text-[12px] mt-5 text-[#000]">APRIL 23, 2016</p>
              <h1 className="text-[23px] md:text-[33px] mt-2 md:leading-[38px] leading-[28px] text-[#000]">
                The Backstage Fix For Skin That Is Not Quite So Perfect
              </h1>
              <p className="mt-4 text-[15px] sm:text-[16px] text-[#000]">
                There are many elements of Charlotte D’Alessio’s life that read
                like a teenager’s fairy tale. Instagram didn’t exist when I was
                in high school, but I imagine I’d be pretty fascinated by…
              </p>
            </div>
          </div>
          <div
            className={`lg:w-[45%] w-full mt-[50px] lg:mt-0 pl-[0px] lg:pl-[25px] border border-y-0 border-r-0 border-l-0 md:border-l-gray-400`}
          >
            <div className="flex flex-col gap-y-[20px] md:gap-y-[25px]">
              {[...Array(6)].map((item) => {
                return <SecondaryCard />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
