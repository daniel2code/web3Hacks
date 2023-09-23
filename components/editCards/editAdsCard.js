import React from "react";
import Image from "next/image";
import { BsShare, BsFolder2Open } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { truncateText } from "../../utils/trunczteText";

const EditAdsCard = ({ data, handleDelete, handleEdit }) => {
  return (
    <div
      className={`flex flex-row justify-between  gap-x-[15px] items-center mb-4  shadow-md`}
    >
      <div className="w-[80px] h-[80px]">
        <Image
          src={require("../../assets/blockchain.jpg")}
          //   height={180}
          //   width={100}
          className="object-contain max-h-[100px] w-[80px] h-[80px]"
          alt="blog post image"
        />
      </div>

      <div
        className={`w-full flex-1 justify-between items-center flex gap-x-[15px]`}
      >
        <h2 className={`sm:text-[18px] text-[#000] text-[16px] my-2 `}>
          {truncateText("Polkadok Do.", 30)}
        </h2>

        <div className="flex gap-x-3 mt-4">
          <div
            className="border border-[#00000050] p-3 cursor-pointer"
            onClick={() => handleEdit(data)}
          >
            <FiEdit3 color="#00000050" />
          </div>
          <div
            className="border border-[#00000050] p-3 cursor-pointer"
            onClick={() => handleDelete && handleDelete(data?.id, data?.id)}
          >
            <AiFillDelete color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAdsCard;
