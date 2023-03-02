import React from "react";

const TagCard = ({ text }) => {
  return (
    <div className="w-fit rounded px-[15px] py-[5px] border border-[#ff5f13] bg-[#ff5f1330] mx-[10px] my-[10px]">
      {" "}
      <p className="text-[#ffffff]">{text}</p>{" "}
    </div>
  );
};

export default TagCard;
