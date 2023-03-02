import React from "react";
import SecondaryCard from "../secondaryCard/sec";

const Postwrapper = ({ children }) => {
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="mt-6 flex w-full px-[5%] justify-between lg:px-0 lg:w-[75%] max-w-[1300px] items-start gap-x-[10px] xmd:flex-row flex-col">
        <div className={`xmd:w-[58%] w-full`}>{children}</div>
        <div className={`xmd:w-[38%] w-full md:pl-[25px] pl-0`}>
          <div className="flex flex-col gap-y-[25px] stick top-[150px] left-0">
            <h2 className="text-center mb-4 font-semibold text-[#c2c3c7] text-[17px ]">
              Latest Posts
            </h2>
            {[...Array(5)].map((item, i) => {
              return <SecondaryCard key={i} />;
            })}
          </div>

          <div className="flex flex-col gap-y-[25px] sticky top-[150px] mt-[60px] left-0">
            <h2 className="text-center mb-4 font-semibold text-[#c2c3c7] text-[17px ]">
              Upcoming Events
            </h2>
            {[...Array(5)].map((item, i) => {
              return (
                <div className="border border-x-0 border-t-0 border-b-[#ffffff50] pb-[18px]" key={i} >
                  <h2 className="text-[#fff] font-bold text-[17px] leading-[18px] w-[100%] ">
                    Web3 Hacks coin launch program and acceleration
                  </h2>

                  <div className="flex mt-[8px] ">
                    <p className="text-[15px] cursor-pointer underline font-semibold text-[#ff5f13] ">
                      Sat, March 20 2023
                    </p>
                    <p className="text-[15px] ml-[15px] cursor-pointer underline text-[#ff5f13] ">
                      10:00AM - 4:00PM
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postwrapper;
