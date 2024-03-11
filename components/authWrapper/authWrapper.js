import React from "react";
import Link from "next/link";
import Image from "next/image";

const AuthWrapper = ({ children }) => {
  return (
    <div className="w-full min-h-[100vh] bg-[#181d20] flex justify-between">
      <div className="w-[50%] hidden md:flex flex-col justify-between px-[5%] py-[6%] auth-bg">
        <Link href="/">
          <Image
            src="/logo.png"
            width={140}
            height={100}
            alt="app logo"
            className="object-cover"
          />
        </Link>

        <div>
          <h1 className="text-[#fff] font-[600] text-[45px] leading-[55px] ">
            We Will Manage Your Business Social Media Account
          </h1>

          <button className=" bg-[#ff5f13]  mt-[35px]  w-[200px] h-[45px]">
            Learn More
          </button>
        </div>

        <div className="flex gap-x-[25px]">
          <p className="text-[15px] text-[#ff] cursor-pointer underline">
            Terms of Use
          </p>
          <p className="text-[15px] text-[#ff] cursor-pointer underline">
            Privacy
          </p>
          <p className="text-[15px] text-[#ff] cursor-pointer underline">
            Safety Guide
          </p>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col justify-between px-[5%] py-[6%]">
        <div></div>
        <div>{children}</div>
        <div></div>
      </div>
    </div>
  );
};

export default AuthWrapper;
