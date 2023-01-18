import React from "react";
import { BsFacebook, BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className={`w-full flex justify-center py-[70px] bg-[#161616] mt-[80px]`}
    >
      <div className={`lg:w-[75%] max-w-[1300px] px-[5%] lg:px-0`}>
        <div className="flex justify-between items-start gap-x-[7%] lg:flex-row flex-col gap-y-[30px]">
          <div className="flex gap-x-[15px] lg:w-[50%]">
            <h2 className="text-[17px] font-semibold text-white">Logo</h2>
            <p className="text-[14px] text-white">
              With blockchain, we will put an end to the monopoly of
              government-issued currencies, as suggested in the title of Hayek’s
              work – “Denationalization of Money.”
            </p>
          </div>

          <div className=" w-full lg:w-[50%] flex md:justify-between gap-y-[20px]">
            <ul className={`flex gap-4 md:flex-row flex-col w-1/2 md:w-fit`}>
              <li className={`text-white cursor-pointer`}>Home</li>
              <li className={`text-white cursor-pointer`}>Contact</li>
              <li className={`text-white cursor-pointer`}>About</li>
              <li className={`text-white cursor-pointer`}>Blog</li>
            </ul>{" "}
            <ul className={`flex gap-6 md:flex-row flex-col`}>
              <li className={`text-white cursor-pointer`}>Testnets</li>
              <li className={`text-white cursor-pointer`}>Airdrops</li>
              <li className={`text-white cursor-pointer`}>Trending</li>
            </ul>{" "}
          </div>

          <div>
            {/* <ul className={`flex gap-5`}>
              <li className="cursor-pointer">
                {" "}
                <BsFacebook color="white" />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsTwitter color="white" />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsInstagram color="white" />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsTelegram color="white" />{" "}
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
