import React from "react";
import Wrapper from "../wrapper/wrapper";
import { MdOutlineArticle } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";

const Home = () => {
  const blogStatus = [
    { name: "20 Articles Published", icon: <MdOutlineArticle size={45} /> },
    { name: "3000 visitors", icon: <BsFillPeopleFill size={45} /> },
    { name: "$4500 Earning", icon: <FaMoneyBillWave size={45} /> },
    { name: "$4500 Earning", icon: <FaMoneyBillWave size={45} /> },
  ];

  return (
    <Wrapper>
      <div className="p-[30px]">
        <h2 className="text-[26px] font-semibold ">Blog Status</h2>

        <div className="flex justify-between mt-7">
          {blogStatus.map((item) => {
            return (
              <div className="w-[23%] max-w-[400px] px-3 py-5 bg-[#00b4d820] rounded-md flex items-center justify-center flex-col ">
                {item.icon}

                <p className="mt-3 cursor-pointer">{item.name}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] font-semibold">Articles</h2>

            <select className="w-[200px] text-[gray] outline-none px-3 py-2 rounded border border-gray-400 mt-1 bg-[transparent] ">
              <option>All</option>
              <option>Airdrops</option>
              <option>Blockchain</option>
              <option>Trending</option>
            </select>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
