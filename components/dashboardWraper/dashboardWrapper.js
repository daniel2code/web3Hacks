import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiHome } from "react-icons/fi";
import { useRouter } from "next/router";

const DashboardWrapper = ({ children }) => {
  const links = [
    { name: "Home", url: "/dashboard/home" },
    { name: "Access", url: "/dashboard/access" },
    { name: "Personal Stats", url: "/dashboard/stats" },
    { name: "Settings", url: "/dashboard/settings" },
  ];

  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className="w-full min-h-[100vh] bg-[#181d20] ">
      <div className="w-full min-h-[100vh] mx-auto max-w-[1700px] bg-[#181d20] flex justify-between">
        <div className="w-[280px] max-[700px]:hidden block  px-[2%] py-[50px] min-h-[100vh]  ">
          <Link href="/">
            <Image
              src="/logo.png"
              width={140}
              height={100}
              alt="app logo"
              className="object-cover"
            />
          </Link>

          <div className="w-full flex flex-col gap-y-[30px] mt-[40px]">
            {links.map((item) => {
              return (
                <Link
                  className={`flex gap-x-[15px] text-[#fff]  ${
                    router.pathname === item.url ? "bg-[#ff5f1315]" : ""
                  } items-center cursor-pointer hover:text-[#ff5f13]`}
                  href={item.url}
                >
                  <div
                    className={`flex items-center justify-center p-[8px] ${
                      router.pathname === item.url
                        ? "bg-[#ff5f13]"
                        : "bg-[#181d20]"
                    } rouded-[4px] `}
                  >
                    <FiHome
                      color="#fff"
                      size={20}
                      className="hover:text-[#ff5f13]"
                    />
                  </div>
                  <span className="text-[#fff] text-[15px] hover:text-[#ff5f13] ">
                    {item.name}
                  </span>{" "}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex-1  min-h-[100vh] sm:p-[10px]">
          <div className="flex-1 bg-[#232d3660] min-h-[calc(100vh-20px)] pt-[30px] pb-[10px] px-[4%] ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
