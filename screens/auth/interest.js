import React, { useState, useEffect, useRef } from "react";
import TagCard from "../../components/tagCard/tagCard";
import AuthWrapper from "../../components/authWrapper/authWrapper";
import { useRouter } from "next/router";

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

const Interest = () => {
  const [interestsBox, setInterestBox] = useState([]);
  const tagRef = useRef();
  const router = useRouter();

  const handleInterests = (text) => {
    if (interestsBox.includes(text)) {
      let val = interestsBox.filter((item) => {
        return item !== text;
      });

      setInterestBox(val);
    } else {
      setInterestBox([...interestsBox, text]);
    }
  };

  useEffect(() => {
    const handleChangeColor = () => {
      if (tagRef.current) {
        tagRef.current.click();
      }
    };

    handleChangeColor();
  }, [interestsBox]);

  console.log(interestsBox);

  const handleSubmit = () => {
    router.push("/dashboard/home");
  };

  return (
    <AuthWrapper>
      <div className="w-full px-[2%]">
        <h2 className="text-[#ffffff] font-[600] text-left text-[24px]">
          Choose your interests
        </h2>

        <p className="text-[15px] text-[#ffffff90] mt-[10px] ">
          Select topics for your contents personalisation.{" "}
        </p>

        <div className="w-full flex gap-y-[6px] gap-x-[10px] flex-wrap mt-[40px]">
          {categoryTags.map((item, i) => {
            return (
              <TagCard
                text={item}
                key={i}
                color={
                  interestsBox.some((element) => element === item)
                    ? "#ff5f13"
                    : ""
                }
                onClick={() => handleInterests(item)}
                ref={tagRef}
              />
            );
          })}
        </div>

        <div className="flex gap-x-[5%] items-end justify-between mt-[40px]  ">
          <button
            className="border border-[#ff5f13] mt-[15px] font-[600] w-[40%]  h-[45px]"
            onClick={handleSubmit}
          >
            Skip
          </button>

          <button
            className=" bg-[#ff5f13] mt-[15px] font-[600] flex-1  h-[45px]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Interest;
