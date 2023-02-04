import React from "react";
import Sidebar from "./sidebar/sidebar";
import Topbar from "./topbar/topbar";

const Wrapper = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <div className="w-[250px]" >
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
