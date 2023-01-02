import React from "react";
import Image from "next/image";

const Sec = () => {
  return (
    <div className="w-full flex gap-x-[15px] border border-t-0 border-x-0 border-b-gray-200 pb-1">
      <div className="w-[150px] h-[120px]">
        <Image
          src={require("../../assets/btcc.jpg")}
          height="100%"
          width="100%"
        />
      </div>

      <div>
        <h3 className="text-[14px] font-semibold leading-[17px]">
          What to Wear to a Taylor Swift Concert, According to Gigi Hadid
        </h3>

        <p className="text-[12px] mt-2 leading-[14px]">
          There are many elements of Charlotte D’Alessio’s life that read like a
          teenager’s fairy tale.…
        </p>
      </div>
    </div>
  );
};

export default Sec;
