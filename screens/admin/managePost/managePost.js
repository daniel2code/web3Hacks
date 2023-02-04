import React from "react";
import Wrapper from "../wrapper/wrapper";
import { MdOutlineArticle } from "react-icons/md";
import PrimaryCard from "../../../components/primaryCard/primary";

const ManagePost = () => {
  return (
    <Wrapper>
      <div className="p-6">
        <h1 className="text-[27px] font-semibold ">Manage posts</h1>

        {/* <div
          className={`w-[23%] max-w-[300px] mt-6 px-2 py-4 bg-[#00b4d820] rounded-md flex items-center justify-center flex-col `}
        >
          <MdOutlineArticle size={45} />

          <p className="mt-3 cursor-pointer">100 Articles</p>
        </div> */}

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] font-semibold">100 Articles</h2>

            <select className="w-[200px] text-[gray] outline-none px-2 py-2 rounded border border-gray-400 mt-1 bg-[transparent] ">
              <option>All</option>
              <option>Airdrops</option>
              <option>Blockchain</option>
              <option>Trending</option>
            </select>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="flex gap-x-[15px] flex-wrap gap-y-[20px] px-[5%] lg:px-0">
            {[...Array(8)].map((item) => {
              return <PrimaryCard showBtn={true} link="/admin/write" />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ManagePost;
