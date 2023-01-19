import React from "react";
import PrimaryCard from "../../../components/primaryCard/primary";

const Trends = () => {
  return (
    <div className="bg-[#faf2e2] py-[50px] ">
      <div className="w-full flex justify-center">
        <div className="lg:w-[75%] w-full ">
          <div className={`pb-[15px]`}>
            <p className={`text-[12px] text-center`}>Based on</p>
            <h2 className={`text-[35px] leading-[35px] text-center`}>Trends</h2>
          </div>
        </div>
      </div>

      <div className="w-full mt-6">
        <div className="flex gap-x-[15px] w-screen overflow-scroll px-[5%] lg:px-0">
          {[...Array(8)].map((item) => {
            return <PrimaryCard />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Trends;
