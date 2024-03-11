import React from "react";

const TagCard = React.forwardRef(({ text, color, onClick, ref }) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="w-fit rounded-[6px] cursor-pointer px-[15px] py-[5px] border border-[#ff5f13] bg-[#ff5f1320] hover:bg-[#ff5f13] text-[15px] my-[10px]"
    >
      {" "}
      <p className="text-[#ffffff]">{text}</p>{" "}
    </div>
  );
});

export default TagCard;
