import React from "react";
import Wrapper from "../wrapper/wrapper";
import { MdOutlineArticle } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";

const Home = () => {
  const blogStatus = [
    {
      name: "20 Articles Published",
      icon: <MdOutlineArticle size={45} />,
      color: "#00b4d820",
    },
    {
      name: "3000 visitors",
      icon: <BsFillPeopleFill size={45} />,
      color: "#7000d82c",
    },
    {
      name: "$4500 Earning",
      icon: <FaMoneyBillWave size={45} />,
      color: "#00FF0030",
    },
    {
      name: "$4500 Earning",
      icon: <FaMoneyBillWave size={45} />,
      color: "	#88080830",
    },
  ];

  return (
    <Wrapper>
      <div className="p-[30px]">
        <h2 className="text-[26px] font-semibold ">Blog Status</h2>

        <div className="flex justify-between mt-7">
          {blogStatus.map((item) => {
            return (
              <div
                className={`w-[23%] max-w-[400px] px-3 py-5 rounded-md flex items-center justify-center flex-col `}
                style={{ backgroundColor: item.color }}
              >
                {item.icon}

                <p className="mt-3 cursor-pointer">{item.name}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-[40px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] font-semibold">Published Articles</h2>

            <select className="w-[200px] text-[gray] outline-none px-2 py-2 rounded border border-gray-400 mt-1 bg-[transparent] ">
              <option>All</option>
              <option>Airdrops</option>
              <option>Blockchain</option>
              <option>Trending</option>
            </select>
          </div>

          <div className="w-full overflow-auto border rounded border-gray-300 mt-[40px] ">
            <div className="flex mt-2 px-3 py-3 w-[640px] sm:w-full">
              <p className="text-[15px] font-bold w-[17%]">ID</p>
              <p className="text-[15px] font-bold w-[27%]">Title</p>
              <p className="text-[15px] font-bold w-[19%]">Author</p>
              <p className="text-[15px] font-bold w-[17%]">Views</p>
              <p className="text-[15px] font-bold w-[17%]">Date Published</p>
            </div>

            {[...Array(10)].map(() => {
              return (
                <div className="flex t_body_box px-3 py-4 w-[640px] sm:w-full">
                  <p className="text-[13px] w-[17%]">2563798907738</p>
                  <p className="text-[13px] w-[27%]">
                    How will Blockchain change our economy
                  </p>
                  <p className="text-[13px] w-[19%]">Govaways</p>
                  <p className="text-[13px] w-[17%]">1000</p>
                  <p className="text-[13px] w-[17%]">21/05/2022</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
