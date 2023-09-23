import React from "react";
import Image from "next/image";
import { BsShare, BsFolder2Open } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { truncateText } from "../../utils/trunczteText";

const EditCard = ({ data, handleDelete, handleEdit }) => {
  return (
    <div className={`flex flex-col  gap-x-6 items-center mb-7 pb-7  shadow-md`}>
      <div className="w-[100%] h-[100%]">
        <Image
          src={require("../../assets/blockchain.jpg")}
          //   height={180}
          //   width={100}
          className="object-contain max-h-[220px] w-full h-[200px]"
          alt="blog post image"
        />
      </div>

      <div className={`w-full px-[4%]`}>
        <div className={`flex gap-x-2 items-center  mt-5`}>
          <p className="text-[12px] font-medium text-[#c2c3c7]">
            {data?.category || "Testnet"}
          </p>{" "}
          <div className={`w-[25px] border border-gray-200 border-t-0`} />
          <p className="text-[11px] text-[#c2c3c7]">
            {data?.date || "December 31, 2023"}
          </p>
        </div>

        <h2
          className={`sm:text-[27px] text-[#000] text-[20px] my-2 leading-[25px] sm:leading-[32px]`}
        >
          {(data?.title && truncateText(data?.title)) ||
            truncateText(" Ethereum testnet guildlines.", 30)}
        </h2>
        <p className={`text-[14px] text-[#00000090]  my-4`}>
          {(data?.body && truncateText(data?.body, 100)) ||
            truncateText(
              " Networks are different Ethereum environments you can access for development, testing, or production use cases. Since Ethereum is a protocol",
              100
            )}
        </p>

        <div className="flex gap-x-3 mt-4">
          <div
            className="border border-[#00000050] p-3 cursor-pointer"
            onClick={() => handleEdit(data)}
          >
            <FiEdit3 color="#00000050" />
          </div>
          <div
            className="border border-[#00000050] p-3 cursor-pointer"
            onClick={ () => handleDelete && handleDelete(data?.title, data?.id)}
          >
            <AiFillDelete color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
