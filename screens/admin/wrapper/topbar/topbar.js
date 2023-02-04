import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-[#00b4d8] w-full py-4 flex items-center justify-between px-[3%]">
      <p className="text-[26px] text-[#fff]">Logo</p>

      <div className="flex gap-x-3 items-center">
        <p className="text-[#fff]">admin</p>
        <FaUserAlt color="white" />
      </div>
    </div>
  );
};

export default Topbar;
