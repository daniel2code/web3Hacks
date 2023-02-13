import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar/sidebar";
import Topbar from "./topbar/topbar";
import { useSelector } from "react-redux";

const Wrapper = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuth);

  const router = useRouter();

  // useEffect(() => {
  //   if (!auth) {
  //     router.push("/admin/login");
  //   }
  // }, [auth]);

  return (
    <>
      <Topbar />
      <div className="flex">
        <div className="w-[250px]">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
