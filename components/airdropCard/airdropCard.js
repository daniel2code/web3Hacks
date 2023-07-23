import React from "react";
import styles from "./airdropCard.module.css";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FaMoneyBillWave } from "react-icons/fa";

const AirdropCard = ({ type }) => {
  return (
    <div
      className={`${styles.wrapper} relative border border-[#c2c3c730] cursor-pointer`}
    >
      <div className="absolute right-0 py-[2px] px-[20px] text-[#fff] bg-[#00A36C] ">
        {type}
      </div>
      <div className="w-full h-full p-[15px] md:p-[20px] bg-[#181d20]">
        <div className="w-full h-auto">
          <Image
            src={require("../../assets/oracle.png")}
            height="80"
            width="80"
            className="rounded-full"
            alt="token logo"
          />
        </div>

        <div className="flex justify-between items-start mt-[15px]">
          <div>
            <h4 className="text-[18px] font-semibold">Super Oracles</h4>

            <p className="flex items-center text-[14px] mt-1">
              {" "}
              <FaMoneyBillWave size={14} />
              <span className="ml-1">Value:</span>
              <span className="ml-1">Up to $1000</span>
            </p>

            <div className="flex items-center justify-center mt-3 h-[33px] w-[33px] rounded-full text-[12px] border border-[#c2c3c730]">
              KYC
            </div>
          </div>
          <div className="flex gap-x-1 items-center">
            <FcLike size={20} />
            <span>1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirdropCard;
