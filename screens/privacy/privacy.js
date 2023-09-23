import React from "react";
import styles from "./details.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Socials from "../../components/socials/socials";
import Image from "next/image";
import {
  BsFillPlusCircleFill,
  BsArrowRight,
  BsTelegram,
  BsTwitter,
  BsFacebook,
  BsReddit,
  BsMedium,
} from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillMinusCircle } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

const AirdropDetails = () => {
  return (
    <div className="w-full bg-[#181d20]">
      <Navbar bg={true} />

      <div className={`w-full flex justify-center pt-[80px]`}>
        <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
          <h2 className={`text-[35px] leading-[35px] text-[#fff] mt-[40px]`}>
            SupraOracles
          </h2>

          <div className="w-full border border-[#c2c3c730] p-[20px] mt-[15px]  lg:flex-row flex-col flex justify-between ">
            <div className="w-full md:w-[300px]">
              <div className="w-[80%]">
                <Image
                  src={require("../../assets/oracle.png")}
                  height="100%"
                  width="100%"
                  alt="token logo"
                />
              </div>

              <div className="w-[80%] mt-[20px]">
                <div className="border border-[#c2c3c730] rounded-[20px] w-fit flex gap-x-[20px] p-[10px] ">
                  <AiFillMinusCircle size={27} />
                  <p>2000</p>
                  <BsFillPlusCircleFill size={22} />
                </div>

                <div className="flex mt-[15px]">
                  <p className="text-[15px]">Airdrop Link:</p>
                  <p className="text-[green] text-[15px] ml-1">Go to Airdrop</p>
                </div>

                <div className="flex mt-[15px]">
                  <p className="text-[15px]">Network:</p>
                  <p className="text-[green] text-[15px] ml-1">Ethereum</p>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-[20px] lg:mt-0">
              <p className="text-[#fff]">
                WhiteBIT is one of the biggest European exchanges aimed at
                driving the mass adoption of blockchain technologies by
                providing our users with a secure and easy-to-use trading
                platform. It's a centralized crypto-to-fiat exchange with a team
                of 1000+ members. Having the European licenses, they meet all
                KYC and AML requirements. WBT is an asset issued by WhiteBIT and
                grants holders unique opportunities.
              </p>

              <p className="text-[#fff] mt-4">
                WhiteBIT Network Mainnet is almost here and to celebrate it they
                are allocating a portion of the WBT Ecosystem Fund to a
                retrodrop. keep WBT in “Holding”, participle in their testnet,
                and do their Zealy tasks to be eligible for the airdrop when the
                mainnet goes live.
              </p>

              <h4 className="font-bold mt-5">Step-by-Step Guide:</h4>
              <h4 className="font-bold mt-1">
                Airdrop 1: Exchange-related tasks
              </h4>

              <ul>
                <li>Create an account at WhiteBIT.</li>
                <li>Complete your KYC verification.</li>
                <li>
                  Create your WB Soul. WB Souls are the centerpiece of WB
                  Network, created to bridge the on-chain and off-chain worlds,
                  and are the expression of Web3.
                </li>
                <li>
                  You will be eligible for an airdrop after creating a WB Soul.
                </li>
                <li>The exact amount will be announced at a later stage.</li>
                <li>
                  Also, buy WBT tokens and keep them in “Holding” to get more
                  rewards. There are 11 levels of WBT Holding. The higher the
                  level, the bigger the reward. (Optional)
                </li>
              </ul>

              <p className="text-[#fff] mt-4">
                WhiteBIT is one of the biggest European exchanges aimed at
                driving the mass adoption of blockchain technologies by
                providing our users with a secure and easy-to-use trading
                platform. It's a centralized crypto-to-fiat exchange with a team
                of 1000+ members. Having the European licenses, they meet all
                KYC and AML requirements. WBT is an asset issued by WhiteBIT and
                grants holders unique opportunities.
              </p>

              <p className="text-[#fff] mt-4">
                WhiteBIT is one of the biggest European exchanges aimed at
                driving the mass adoption of blockchain technologies by
                providing our users with a secure and easy-to-use trading
                platform. It's a centralized crypto-to-fiat exchange with a team
                of 1000+ members. Having the European licenses, they meet all
                KYC and AML requirements. WBT is an asset issued by WhiteBIT and
                grants holders unique opportunities.
              </p>

              <p className="text-[#fff] mt-4">
                WhiteBIT is one of the biggest European exchanges aimed at
                driving the mass adoption of blockchain technologies by
                providing our users with a secure and easy-to-use trading
                platform. It's a centralized crypto-to-fiat exchange with a team
                of 1000+ members. Having the European licenses, they meet all
                KYC and AML requirements. WBT is an asset issued by WhiteBIT and
                grants holders unique opportunities.
              </p>

              <div className="mt-[20px] ">
                <p className="font-bold text-[16px] ">Requirements:</p>
                <p className="flex items-center">
                  <GrMail /> <span className="ml-[8px]">Email required</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#c2c3c730] flex flex-col justify-center items-center py-[20px] px-[5%] my-[20px]">
            <button className="bg-[#ff5f13] w-[230px] h-[55px] font-bold text-white flex items-center gap-x-[15px] justify-center">
              Claim Airdrop
              <BsArrowRight size={25} color="#fff" />
            </button>
          </div>

          <div className="border border-[#c2c3c730] py-[20px] px-[20px] my-[20px]">
            <p className="text-[30px] text-[#fff]">Overview</p>

            <div className="" />

            <div className="mt-[20px] flex justify-between">
              <div className="w-[50%]">
                <div className="flex mt-[15px]">
                  <p className="text-[15px]">Website:</p>
                  <p className="text-[#ff5f13] text-[15px] ml-1">
                    https://whitebit.com/
                  </p>
                </div>

                <div className="flex mt-[15px]">
                  <p className="text-[15px]">Ticket</p>
                  <p className="text-[#ff5f13] text-[15px] ml-1">WB</p>
                </div>

                <div className="flex items-center mt-[15px]">
                  <p className="text-[15px]">Twitter:</p>
                  <div className="w-[30px] h-[30px] rounded-full justify-center items-center flex ml-1">
                    <BsTwitter color="" />
                  </div>
                </div>

                <div className="flex items-center mt-[15px]">
                  <p className="text-[15px]">Facebook:</p>
                  <div className="w-[30px] h-[30px] rounded-full justify-center items-center flex ml-1">
                    <BsFacebook color="" />
                  </div>
                </div>
              </div>

              <div className="w-[50%]">
                <div className="flex items-center mt-[15px]">
                  <p className="text-[15px]">Telegram Group:</p>
                  <div className="w-[30px] h-[30px] rounded-full justify-center items-center flex ml-1">
                    <BsTelegram color="" />
                  </div>
                </div>

                <div className="flex items-center mt-[15px]">
                  <p className="text-[15px]">Reddit:</p>
                  <div className="w-[30px] h-[30px] rounded-full justify-center items-center flex ml-1">
                    <BsReddit color="" />
                  </div>
                </div>

                <div className="flex items-center mt-[15px]">
                  <p className="text-[15px]">Medium:</p>
                  <div className="w-[30px] h-[30px] rounded-full justify-center items-center flex ml-1">
                    <BsMedium color="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </div>
  );
};

export default AirdropDetails;
