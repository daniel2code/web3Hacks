import React from "react";
import { BsFacebook, BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <div
        className={`w-full flex justify-center pb-[40px] bg-[#181d20] mt-[80px] `}
      >
        <div className={`lg:w-[75%] max-w-[1300px] px-[5%] lg:px-0`}>
          <div className=" w-full">
            <div className="flex flex-col items-start gap-x-[15px] lg:w-[50%]">
              <Image
                src="/logo.png"
                width={130}
                height={100}
                alt="app logo"
                className="object-contain"
              />
            </div>

            <div className="w-full flex mt-[30px] grid-x-[5%] justify-between">
              <p className="text-[14px] text-white w-[50%] font-[400]">
                Dapplapxs.co is a free aggregator for crypto airdrops such as
                updating (node, testnet, betanet, and mainnet) airdrops
                Including product promotion and community events highlights.
                Dapplapxs are not involved in the published airdrops in any
                ways. Although we try to list only legit project with great
                potential for high reward. Dapplapxs can not be responsible for
                any issues or loss due to scam. So make sure you never share
                your private keys or access phishing group and sites to be
                safe!. Follow Dapplapxs guide to stay safe for more information.
              </p>

              <form className="">
                <div className="flex items-center gap-x-3">
                  <input
                    placeholder="Your E-Mail"
                    className="h-[40px] w-[100%] bg-white max-w-[300px] border border-gray-300 rounded pl-4"
                  />
                  <button className="w-[100px] bg-[#ff5f13] h-[40px] text-[14px] rounded text-white">
                    SIGN UP
                  </button>
                </div>
                <div className="flex mt-2 gap-x-2">
                  <p className="text-[13px] text-[#fff]">
                    Get weekly featured airdrops directly to your mail
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className=" mt-[40px] pt-[40px] border border-gray-200 border-x-0 border-b-0 w-full lg:flex-row flex-col gap-y-[30px]">
            <div className=" w-full flex gap-x-[10%]">
              <div className="flex w-[30%] justify-between mt-[10px] ">
                <ul className={`flex gap-4 flex-col`}>
                  <h2 className="text-[21px] font-[600] mb-[15px]">
                    Categories
                  </h2>

                  <li className={`text-white cursor-pointer hover:underline`}>
                    Testnets
                  </li>

                  <li className={`text-white cursor-pointer hover:underline`}>
                    Airdrops
                  </li>

                  <li className={`text-white cursor-pointer hover:underline`}>
                    Trending
                  </li>

                  <li className={`text-white cursor-pointer hover:underline`}>
                    Nodes
                  </li>
                </ul>

                <ul className={`flex gap-4 flex-col`}>
                  <h2 className="text-[21px] font-[600] mb-[15px]">
                    Useful Links
                  </h2>

                  <li className={`text-white cursor-pointer hover:underline`}>
                    Home
                  </li>
                  <li className={`text-white cursor-pointer hover:underline`}>
                    Contact
                  </li>
                  <li className={`text-white cursor-pointer hover:underline`}>
                    About
                  </li>
                  <li className={`text-white cursor-pointer hover:underline`}>
                    Blog
                  </li>
                </ul>
              </div>

              <div className="flex flex-1 mt-[10px]">
                <ul className={`flex gap-4 flex-col`}>
                  <h2 className="text-[21px] font-[600] mb-[15px]">Donate</h2>

                  <li className="flex gap-x-[15px]">
                    <p className="text-[16px] font-[600] flex items-center">
                      ETH:{" "}
                      <span className="bg-[#fafafa4d] px-[7px] py-[3px] ml-[10px] text-[12px] font-[300] rounded-[5px] ">
                        0x7dEaCb1d403928D9FEd7c11B1888849533CAac67
                      </span>
                    </p>
                  </li>

                  <li className="flex gap-x-[15px]">
                    <p className="text-[16px] font-[600] flex items-center">
                      BNB:{" "}
                      <span className="bg-[#fafafa4d] px-[7px] py-[3px] ml-[10px] text-[12px] font-[300] rounded-[5px] ">
                        0x7dEaCb1d403928D9FEd7c11B1888849533CAac67
                      </span>
                    </p>
                  </li>

                  <li className="flex gap-x-[15px]">
                    <p className="text-[16px] font-[600] flex items-center">
                      MATIC:{" "}
                      <span className="bg-[#fafafa4d] px-[7px] py-[3px] ml-[10px] text-[12px] font-[300] rounded-[5px] ">
                        0x7dEaCb1d403928D9FEd7c11B1888849533CAac67
                      </span>
                    </p>
                  </li>

                  <li className="flex gap-x-[15px]">
                    <p className="text-[16px] font-[600] flex items-center">
                      LTC:{" "}
                      <span className="bg-[#fafafa4d] px-[7px] py-[3px] ml-[10px] text-[12px] font-[300] rounded-[5px] ">
                        0x7dEaCb1d403928D9FEd7c11B1888849533CAac67
                      </span>
                    </p>
                  </li>
                </ul>

                <ul className={`flex gap-4 flex-col ml-[4%] `}>
                  <h2 className="text-[21px] font-[600] mb-[15px]">
                    Blockchain Education
                  </h2>

                  <li className={`text-white `}>
                    <p className="text-[#ff5f13]">BLOCKCHAIN</p>

                    <p>What is Blockchain?</p>
                  </li>

                  <li className={`text-white `}>
                    <p className="text-[#ff5f13]">BLOCKCHAIN</p>

                    <p>Blockchain Basics: Key Things to Know as A Beginner</p>
                  </li>

                  <li className={`text-white `}>
                    <p className="text-[#ff5f13]">BLOCKCHAIN</p>

                    <p>
                      A Look into IPv6: The Role of Blockchain in New Internet
                      Communication Protocol
                    </p>
                  </li>

                  <li className={`text-white `}>
                    <p className="text-[#ff5f13]">BLOCKCHAIN</p>

                    <p>
                      Private vs. Public vs. Permissioned Blockchain: A
                      Comparative Guide
                    </p>
                  </li>
                </ul>
              </div>
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

      <div
        className={`w-full flex justify-center py-[30px] bg-[#232d3660] mt-[80px] `}
      >
        <div className={`lg:w-[75%] max-w-[1300px] px-[5%] lg:px-0`}>
          <div className="flex justify-between">
            <p>&copy; Copyright {year}. All Rights Reserved</p>

            <ul className={`flex gap-x-[20px] `}>
              <li className={`text-white cursor-pointer hover:underline`}>
                Terms
              </li>

              <li className={`text-white cursor-pointer hover:underline`}>
                Privacy & Policy
              </li>

              <li className={`text-white cursor-pointer hover:underline`}>
                Safe Guide
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
