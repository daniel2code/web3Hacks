import React from "react";
import Image from "next/image";
import { BsShare, BsFolder2Open } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

const PostCard = ({ hideBorder }) => {
  const view = useSelector((state) => state.reducer.view.view);

  const checkView = view === "list";

  return (
    <div
      className={`flex ${
        view === "list" ? "flex-col" : "flex-row"
      } gap-x-6 items-center mb-7 pb-7 ${
        hideBorder ? "" : "border border-t-0 border-x-0 border-b-gray-200"
      } `}
    >
      <div className="w-[100%] h-auto">
        <Image
          src={require("../../assets/btcc.jpg")}
          height="100px"
          width="100%"
          layout="responsive"
          alt="blog post image"
        />
      </div>

      <div className={`${checkView ? "w-full" : "w-[90%]"}`}>
        <div
          className={`flex gap-x-2 items-center ${checkView ? "mt-5" : "mt-0"}`}
        >
          <p className="text-[12px] font-medium text-[#c2c3c7]">Testnet</p>{" "}
          <div className={`w-[25px] border border-gray-200 border-t-0`} />
          <p className="text-[11px] text-[#c2c3c7]">December 31, 2023</p>
        </div>

        <h2
          className={`sm:text-[27px] text-[#fff] text-[20px] my-2 leading-[25px] sm:leading-[32px]`}
        >
          Ethereum testnet guildlines.
        </h2>
        <p className={`text-[14px] text-[#c2c3c7] ${checkView ? "my-4" : "my-0"}`}>
          Networks are different Ethereum environments you can access for
          development, testing, or production use cases. Since Ethereum is a
          protocol....
        </p>

        <div className="flex gap-x-3 mt-4">
          <div className="border border-gray-200 p-3 cursor-pointer">
            <BsFolder2Open color="#c2c3c7" />
          </div>
          <div className="border border-gray-200 p-3 cursor-pointer">
            <BsShare color="#c2c3c7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
