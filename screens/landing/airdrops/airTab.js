import React, { useState } from "react";
import styles from "./airtab.module.css";
import Link from "next/link";
import AirdropCard from "../../../components/airdropCard/airdropCard";

const Airdrop = () => {
  const [tab, setTab] = useState("Airdrops");

  return (
    <div className={`w-full flex justify-center py-[70px]`}>
      <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
        <div className={`${styles.popBox} pb-[15px]`}>
          <p className={`text-[12px] text-[#fff]`}>Check Out</p>
          <h2 className={`text-[35px] leading-[35px] text-[#fff]`}>
            Trending {tab}
          </h2>
        </div>

        <div className="flex border border-[#c2c3c730] w-full md:w-[66%] mt-[35px]">
          <div
            onClick={() => setTab("Airdrops")}
            className={`w-[33.3%] flex items-center text-[14px] md:text-[18px] font-semibold ${
              tab === "Airdrops" && "bg-[#ff5f13]"
            } justify-center cursor-pointer hover:bg-[#ff5f13] border border-r-[#c2c3c730] border-y-0 border-l-0`}
          >
            Airdrops
          </div>
          <div
            onClick={() => setTab("Testnets")}
            className={`w-[33.3%] py-[10px] flex items-center text-[14px] md:text-[18px] font-semibold ${
              tab === "Testnets" && "bg-[#ff5f13]"
            } justify-center cursor-pointer hover:bg-[#ff5f13] border border-r-[#c2c3c730] border-y-0 border-l-0`}
          >
            Testnets
          </div>
          <div
            onClick={() => setTab("Nodes")}
            className={`w-[34%] ${
              tab === "Nodes" && "bg-[#ff5f13]"
            } flex items-center text-[14px] md:text-[18px] font-semibold justify-center cursor-pointer hover:bg-[#ff5f13] border border-r-[#c2c3c730] border-y-0 border-l-0`}
          >
            Nodes
          </div>
        </div>

        {/* <PostCard hideBorder={ind === arr.length - 1 ? true : false} /> */}
        <div className="gap-y-[15px] grid gap-[15px] mt-[60px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((item, ind, arr) => {
            return (
              <Link href="/airdrop-details">
                <AirdropCard type={tab} />
              </Link>
            );
          })}
        </div>

        <div className="w-full justify-center mt-[40px] flex">
          <button className="w-[100px] bg-[#ff5f13] h-[40px] text-[14px] rounded text-white">
            <Link href="/airdrop">See All</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
