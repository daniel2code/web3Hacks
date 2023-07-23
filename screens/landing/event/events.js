import React from "react";
import styles from "./event.module.css";
import EventCard from "../../../components/eventsCard/eventCard";
import Link from "next/link";

const Events = () => {
  return (
    <div className={`w-full flex justify-center py-[70px]`}>
      <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
        
        <div className={`${styles.popBox} pb-[15px]`}>
          <p className={`text-[12px] text-[#fff]`}>Never miss</p>
          <h2 className={`text-[35px] leading-[35px] text-[#fff]`}>
            Upcoming Events
          </h2>
        </div>

        <div className="my-[20px] flex justify-between flex-wrap">
          {[...Array(6)].map(() => {
            return (
              <div className="w-full md:w-[48%] lg:w-[32%] mt-[20px]">
                <EventCard />
              </div>
            );
          })}

          <div className="w-full justify-center mt-[40px] flex">
            <button className="w-[100px] bg-[#ff5f13] h-[40px] text-[14px] rounded text-white">
              <Link href="/events">More events</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
