import React from "react";
// import { BsFillBoxSeamFill } from "react-icons/bs";

const EmptyState = () => {
  return (
    <div className="w-full my-[30%] flex items-center justify-center flex-col ">
      {/* <BsFillBoxSeamFill  /> */}
      <p className="mt-[15px] text-[#000] ">No articles found</p>
    </div>
  );
};

export default EmptyState;
