import React from "react";
import Image from "next/image";
import { BsShare, BsFolder2Open } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { truncateText } from "../../utils/trunczteText";
import { formatDate } from "../../utils/formatDate";

const EditCard = ({
  index,
  data,
  handleDelete,
  handleEdit,
  handlePublishPost,
}) => {
  const { loading } = useSelector((state) => state.publishPost);

  console.log(data);

  return (
    <div
      className={`flex flex-col gap-x-6 items-center mb-[15px] pb-7  shadow-md`}
    >
      <div className="w-[100%]">
        <Image
          src={
            (data && data?.images[0]?.url) ||
            require("../../assets/blockchain.jpg")
          }
          height={100}
          width={100}
          className="object-contain max-h-[220px] w-full h-[220px]"
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
            {formatDate(data?.created_at) || ""}
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-between h-[100%]">
          <div className="w-full">
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
          </div>

          <div className="w-full">
            <div className="flex gap-x-3 ">
              <div
                className="border border-[#00000050] p-3 cursor-pointer"
                onClick={() => handleEdit(data)}
              >
                <FiEdit3 color="#00000050" />
              </div>

              <div
                className="border border-[#00000050] p-3 cursor-pointer"
                onClick={() =>
                  handleDelete && handleDelete(data?.title, data?.id)
                }
              >
                <AiFillDelete color="red" />
              </div>
            </div>

            {data?.published_at === null ? (
              <button
                className="w-full h-[40px] rounded-[8px] bg-green-700 text-[#ffff] outline-none mt-[15px]"
                onClick={() => handlePublishPost(data?.slug)}
                disabled={loading}
              >
                {index + 1 === data?.id && loading ? "Loading" : "Publish"}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
