import React from "react";
import styles from "./Popular.module.css";
import Image from "next/image";
import SecondaryCard from "../../../components/secondaryCard/sec";

const Popular = () => {
  return (
    <div className={`w-full flex justify-center py-[70px]`}>
      <div className={`w-[75%] max-w-[1300px]`}>
        <div className={`${styles.popBox} pb-[15px]`}>
          <p className={`text-[12px]`}>Based on</p>
          <h2 className={`text-[35px] leading-[35px]`}>Popularity</h2>
        </div>

        <div className="mt-6 flex items-start gap-x-[20px] ">
          <div className={`w-[55%]`}>
            <div className="w-full">
              <Image src={require("../../../assets/btcc.jpg")} />
              <p className="text-[12px] mt-5">APRIL 23, 2016</p>
              <h1 className="text-[33px] mt-2 leading-[38px]">
                The Backstage Fix For Skin That Is Not Quite So Perfect
              </h1>
              <p className="mt-4">
                There are many elements of Charlotte D’Alessio’s life that read
                like a teenager’s fairy tale. Instagram didn’t exist when I was
                in high school, but I imagine I’d be pretty fascinated by…
              </p>
            </div>
          </div>
          <div
            className={`w-[45%] pl-[25px] border border-y-0 border-r-0 border-l-gray-400`}
          >
            <div className="flex flex-col gap-y-[25px]">
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
