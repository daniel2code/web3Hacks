import React from "react";
import SecondaryCard from "../secondaryCard/sec";

const Postwrapper = ({ children }) => {
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="mt-6 flex w-full px-[5%] lg:px-0 lg:w-[75%] max-w-[1300px] items-start gap-x-[10px] xmd:flex-row flex-col">
        <div className={`xmd:w-[60%] w-full`}>{children}</div>
        <div className={`xmd:w-[40%] w-full md:pl-[25px] pl-0`}>
          <div className="flex flex-col gap-y-[25px] sticky top-[150px] left-0">
            <h2 className="text-center mb-4 font-semibold text-[#000] text-[17px ]">
              Latest Posts
            </h2>
            {[...Array(5)].map((item, i) => {
              return <SecondaryCard key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postwrapper;
