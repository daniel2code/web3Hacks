import React from "react";
import TagCard from "../../../components/tagCard/tagCard";

const categoryTags = [
  "Technology",
  "Blockchain",
  "Web3",
  "Crypto Currency",
  "Game",
  "Defi",
  "Token",
  "Crypto",
  "NFT",
  "Metaverse",
  "Bitcoin",
  "Events",
  "Daaps",
  "Crypto Exchange",
  "AMA",
  "Decentralizaton",
];

const Tags = () => {
  return (
    <div className={`w-full flex justify-center py-[50px]`}>
      <div className={`xl:w-[75%] w-full max-w-[1300px] px-[5%] xl:px-[0%]`}>
        <div className={`popBox pb-[15px]`}>
          <p className={`text-[12px] text-[#fff]`}>Explore</p>
          <h2 className={`text-[35px] leading-[35px] text-[#fff]`}>
            Categories
          </h2>
        </div>

        <div className="w-full flex flex-wrap gap-x-[15px] justify-center mb-[20px] mt-[60px]">
          {categoryTags.map((item, i) => {
            return <TagCard text={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tags;
