import React from "react";
import { BsFacebook, BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={`w-full flex justify-center py-[70px] bg-[#161616] mt-[80px]`}>
      <div className={`w-[75%] max-w-[1300px]`}>
        <div className="flex justify-between items-start gap-x-[7%]">
          <div className="flex gap-x-[15px] w-[50%]">
            <h2 className="text-[17px] font-semibold text-white">Logo</h2>
            <p className="text-[14px] text-white">
              With blockchain, we will put an end to the monopoly of
              government-issued currencies, as suggested in the title of Hayek’s
              work – “Denationalization of Money.”
            </p>
          </div>
          <div className="w-[50%] flex justify-between">
            <ul className={`flex gap-4`}>
              <li className={`text-white cursor-pointer`}>Home</li>
              <li className={`text-white cursor-pointer`}>Contact</li>
              <li className={`text-white cursor-pointer`}>About</li>
              <li className={`text-white cursor-pointer`}>Blog</li>
            </ul>{" "}
            <ul className={`flex gap-6`}>
              <li className={`text-white cursor-pointer`}>Testnets</li>
              <li className={`text-white cursor-pointer`}>Airdrops</li>
              <li className={`text-white cursor-pointer`}>Trending</li>
            </ul>{" "}
          </div>

          {/* <div>
            
            <ul className={`flex gap-5`}>
              <li className="cursor-pointer">
                {" "}
                <BsFacebook color="black" />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsTwitter color="black" />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsInstagram color="black" />{" "}
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsTelegram color="black" />{" "}
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
