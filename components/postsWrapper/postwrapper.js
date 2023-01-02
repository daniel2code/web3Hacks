import React from "react";
import SecondaryCard from "../secondaryCard/sec";

const Postwrapper = ({ children }) => {
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="mt-6 flex  w-[75%] max-w-[1300px] items-start gap-x-[10px] ">
        <div className={`w-[60%]`}>{children}</div>
        <div
          className={`w-[40%] pl-[25px]`}
        >
          <div className="flex flex-col gap-y-[25px] sticky top-[150px] left-0">
            <h2 className="text-center mb-4 font-semibold text-[17px ]">
              Latest Posts
            </h2>
            {[...Array(5)].map((item) => {
              return <SecondaryCard />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postwrapper;
