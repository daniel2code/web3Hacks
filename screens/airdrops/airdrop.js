import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import ImgT from "../../components/imagewithTitle/imgT";
import PostWrapper from "../../components/postsWrapper/postwrapper";
import AirdropCard from "../../components/airdropCard/airdropCard";
import PostCard from "../../components/postCard/postCard";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";
import Socials from "../../components/socials/socials";

const Airdrop = () => {
  const [tab, setTab] = useState("Latest");

  return (
    <div style={{ backgroundColor: "#181d20" }}>
      <Navbar bg={true} />
      <ImgT title="Airdrops" />

      <PostWrapper>
        <div className="flex border border-[#c2c3c730]">
          <div
            onClick={() => setTab("Latest")}
            className={`w-[33.3%] flex items-center text-[14px] md:text-[18px] font-semibold ${
              tab === "Latest" && "bg-[#ff5f13]"
            } justify-center cursor-pointer hover:bg-[#ff5f13] border border-r-[#c2c3c730] border-y-0 border-l-0`}
          >
            Latest
          </div>
          <div
            onClick={() => setTab("Hottest")}
            className={`w-[33.3%] py-[10px] flex items-center text-[14px] md:text-[18px] font-semibold ${
              tab === "Hottest" && "bg-[#ff5f13]"
            } justify-center cursor-pointer hover:bg-[#ff5f13] border border-r-[#c2c3c730] border-y-0 border-l-0`}
          >
            Hottest
          </div>
          <div
            onClick={() => setTab("Potential")}
            className={`w-[34%] ${
              tab === "Potential" && "bg-[#ff5f13]"
            } flex items-center text-[14px] md:text-[18px] font-semibold justify-center cursor-pointer hover:bg-[#ff5f13] border border-r-[#c2c3c730] border-y-0 border-l-0`}
          >
            Potential
          </div>
        </div>

        {/* <PostCard hideBorder={ind === arr.length - 1 ? true : false} /> */}
        <div className="gap-y-[15px] grid gap-[15px] mt-[30px] grid-cols-1 md:grid-cols-2">
          {[...Array(6)].map((item, ind, arr) => {
            return (
              <Link href="/airdrop-details">
                <AirdropCard type={tab} />
              </Link>
            );
          })}
        </div>
      </PostWrapper>
      <Socials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Airdrop;
