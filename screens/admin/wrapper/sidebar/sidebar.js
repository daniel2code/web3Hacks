import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-full bg-[#00b4d8] h-[100vh]">
      <div className="pt-[30px] flex flex-col gap-y-4 text-[#fff]">
        <p className="pl-[22%] font-semibold cursor-pointer">
          {" "}
          <Link href="/admin/home">Home</Link>{" "}
        </p>
        <p className="pl-[22%] font-semibold cursor-pointer">
          {" "}
          <Link href="/admin/write">Write</Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
