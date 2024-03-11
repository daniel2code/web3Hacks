import React from "react";

const DividerWithText = () => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="border-t border-[#f2f3f860] border-[0.5px] flex-grow mr-3"></div>
      <div className="text-gray-600">or</div>
      <div className="border-t border-[#f2f3f860] border-[0.5px] flex-grow ml-3"></div>
    </div>
  );
};

export default DividerWithText;
