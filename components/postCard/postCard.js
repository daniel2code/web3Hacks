import React from "react";
import Image from "next/image";
import { BsShare, BsFolder2Open } from "react-icons/bs";

const PostCard = ({ hideBorder }) => {
  return (
    <div
      className={`flex gap-x-6 items-center mb-7 pb-7 ${
        hideBorder ? "" : "border border-t-0 border-x-0 border-b-gray-200"
      } `}
    >
      <div className="w-[100%] h-auto">
        <Image
          src={require("../../assets/btcc.jpg")}
          height="100px"
          width="100%"
          layout="responsive"
        />
      </div>

      <div className="w-[90%]">
        <div className="flex gap-x-2 items-center">
          <p className="text-[12px] font-medium">Testnet</p>{" "}
          <div className={`w-[25px] border border-gray-200 border-t-0`} />
          <p className="text-[11px]">December 31, 2023</p>
        </div>

        <h2 className="text-[27px] my-2 leading-[32px]">
          Ethereum testnet guildlines.
        </h2>
        <p className="text-[14px]">
          Networks are different Ethereum environments you can access for
          development, testing, or production use cases. Since Ethereum is a
          protocol....
        </p>

        <div className="flex gap-x-3 mt-4">
          <div className="border border-gray-200 p-3 cursor-pointer">
            <BsFolder2Open />
          </div>
          <div className="border border-gray-200 p-3 cursor-pointer">
            <BsShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
