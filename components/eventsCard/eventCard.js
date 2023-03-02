import React from "react";
import styles from "./eventCard.module.css";
import Image from "next/image";
import { BsHeartFill, BsFillCalendar2EventFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const EventCard = () => {
  return (
    <div
      className={` w-full min-w-[250px] bg-[#181d20] shadow border border-[#c2c3c730]`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
    >
      <div className={`${styles.cardWrap} h-[120px] w-full`}>
        <div className="flex px-[15px] py-5 justify-between">
          <h2 className="text-[#fff] font-bold text-[20px] w-[85%] ">
            Web3 Hacks coin launch program
          </h2>
          <BsHeartFill color="#ff5f13" size="20px" />
        </div>
      </div>

      <div className="px-[15px] pb-[20px] pt-[6px] mt-[20px]">
        <div className="flex items-center pb-[20px]">
          <div
            className="w-[50px] h-[50px] flex justify-center items-center bg-[#ff5f1340]"
            style={{ borderRadius: "50%" }}
          >
            <BsFillCalendar2EventFill color="#ff5f13" size="20px" />
          </div>

          <div className="ml-[20px]">
            <p className="text-[17px] font-semibold text-[#fff] ">
              Sat, March 20 2023
            </p>
            <p className="text-[15px] text-[#ffffff90] ">10:00AM - 4:00PM</p>
          </div>
        </div>

        <div className="flex items-center pb-[15px]">
          <div
            className="w-[50px] h-[50px] flex justify-center items-center bg-[#ff5f1340]"
            style={{ borderRadius: "50%" }}
          >
            <MdLocationPin color="#ff5f13" size="20px" />
          </div>

          <div className="ml-[20px]">
            <p className="text-[17px] font-semibold text-[#fff] ">
              Hotel De Golf
            </p>
            <p className="text-[15px] text-[#ffffff90] ">
              15 Margaret Avenue Aba
            </p>
          </div>
        </div>

        <p className="font-semibold text-[17px] text-[#fff] mt-[10px]">About</p>
        <p className="text-[#ffffff97] text-[15px] mt-[5px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.....
        </p>
      </div>
    </div>
  );
};

export default EventCard;
