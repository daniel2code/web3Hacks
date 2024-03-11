import React, { useState } from "react";
import DashboardWrapper from "../../../components/dashboardWraper/dashboardWrapper";
import { FaBell } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { IoListSharp } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import moment from "moment";
import Image from "next/image";
import ArticlesCard from "../../../components/articlesCard/articlesCard";
import ArticlesTable from "../../../components/ArticlesTable/articlesTable";

const Home = () => {
  const [tab, setTab] = useState("All");
  const [view, setView] = useState("Grid");

  const tabList = [
    { name: "All", id: 1 },
    { name: "Testnet", id: 2 },
    { name: "Airdrops", id: 3 },
    { name: "Node", id: 4 },
    // { name: "Blockchain", id: 5 },
    { name: "Crypto", id: 6 },
  ];

  return (
    <DashboardWrapper>
      <div className="flex-1 flex w-full gap-x-[4%] ">
        <div className="w-full lg:w-[67%] border lg:border-[#ffffff40] border-y-0 border-l-0 pr-[3%] ">
          <div className="flex justify-between items-center pr-[3%] ">
            <div className="">
              <h1 className="text-[#fff] text-[18px] sm:text-[30px] ">
                Hi Daniel, Good Morning!
              </h1>

              <p className="text-[#ffffff80]">See your saved articles</p>
            </div>

            <div className="bg-[#ff5f1315] sm:h-[60px] h-[40px] sm:w-[60px] w-[40px] rounded-[50%] flex justify-center items-center ">
              <FaBell size={20} color="#ff5f13" />
            </div>
          </div>

          <div className="w-full mt-[40px] flex gap-x-[30px] tab-box">
            {tabList.map((item) => {
              return (
                <p
                  className={` text-[15px] main-tab pb-[10px] cursor-pointer ${
                    tab === item.name
                      ? "border border-x-[0] border-t-0 border-[#ff5f13] text-[#ff5f13] "
                      : "text-[#fff]"
                  } `}
                  onClick={() => setTab(item.name)}
                >
                  {item.name}
                </p>
              );
            })}
          </div>

          <div className="mt-[20px] flex flex-wrap gap-x-[4%] gap-y-[30px] ">
            <div className="w-full mt-[20px] flex justify-between mb-[20px] ">
              <div className="w-[45%] items-center gap-x-[15px] px-[15px] flex border border-[#ffffff60]  rounded-[30px] h-[40px] ">
                <RiSearchLine />
                <input
                  className="flex-1 border-0 outline-none bg-transparent "
                  placeholder="Search Catalogs"
                />
              </div>

              <div className="w-[100px] flex h-[40px] border border-[#ffffff60]  rounded-[30px]">
                <div
                  onClick={() => setView("Grid")}
                  className={`w-[50%] h-[39px] flex justify-center items-center rounded-tl-[30px] rounded-bl-[30px] ${
                    view === "Grid" ? "bg-[#ff5f13]" : ""
                  } cursor-pointer `}
                >
                  <IoGrid />
                </div>

                <div
                  onClick={() => setView("List")}
                  className={`w-[50%] h-[39px] flex justify-center items-center rounded-tr-[30px] rounded-br-[30px] ${
                    view === "List" ? "bg-[#ff5f13]" : ""
                  } cursor-pointer `}
                >
                  <IoListSharp />
                </div>
              </div>
            </div>

            {view === "List" ? (
              <ArticlesTable />
            ) : (
              <>
                {/* <div className="mt-[20px] w-full flex-1"> */}
                {[...Array(12)].map(() => {
                  return (
                    <div className="w-full sm:w-[48%]">
                      <ArticlesCard />
                    </div>
                  );
                })}
                {/* </div> */}
              </>
            )}
          </div>
        </div>

        <div className="w-[33%] hidden lg:block ">
          <div className="w-full items-center gap-x-[15px] px-[15px] flex border border-[#ffffff60] rounded-[30px] h-[50px] ">
            <RiSearchLine />
            <input
              className="flex-1 border-0 outline-none bg-transparent "
              placeholder="Search Contents"
            />
          </div>

          <div className="w-full flex justify-end items-end flex-col mt-[30px] ">
            <h1 className="text-[#fff] text-[25px] ">
              {moment().format("dddd")}
            </h1>

            <p className="text-[#fffffff60] text-[15px] mt-[5px] ">
              {moment().format("Do MMMM, YYYY")}
            </p>
          </div>

          <div className="w-full mt-[40px] max-w-[100%] rounded-[5px] bg-[#181d20] py-[15px] px-[18px] flex items-center justify-center flex-col ">
            <p className="text-[#ffffff] font-[600] ">Your Catalog Stats</p>

            <div className="w-full mt-[25px] flex flex-wrap gap-y-[30px] ">
              <div className="flex gap-x-[20px] w-[50%] ">
                <div className="w-[40px] h-[40px] rounded-[5px] bg-[#4CB9E750] flex justify-center items-center ">
                  <FaBook color="#4CB9E7" />
                </div>

                <div>
                  <p className="text-[#ffffff] text-[18px] font-[600] ">300</p>

                  <p className="text-[#ffffff80] text-[12px]">Testnet</p>
                </div>
              </div>

              <div className="flex gap-x-[20px] w-[50%] ">
                <div className="w-[40px] h-[40px] rounded-[5px] bg-[#FF980050] flex justify-center items-center ">
                  <FaBook color="#FF9800" />
                </div>

                <div>
                  <p className="text-[#ffffff] text-[18px] font-[600] ">300</p>

                  <p className="text-[#ffffff80] text-[12px]">Airdrops</p>
                </div>
              </div>

              <div className="flex gap-x-[20px] w-[50%] ">
                <div className="w-[40px] h-[40px] rounded-[5px] bg-[#B15EFF50] flex justify-center items-center ">
                  <FaBook color="#B15EFF" />
                </div>

                <div>
                  <p className="text-[#ffffff] text-[18px] font-[600] ">300</p>

                  <p className="text-[#ffffff80] text-[12px]">Node</p>
                </div>
              </div>

              {/* <div className="flex gap-x-[20px] w-[50%] ">
                <div className="w-[40px] h-[40px] rounded-[5px] bg-[#4CB9E750] flex justify-center items-center ">
                  <FaBook color="#4CB9E7" />
                </div>

                <div>
                  <p className="text-[#ffffff] text-[18px] font-[600] ">300</p>

                  <p className="text-[#ffffff50] text-[12px]"></p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="w-full mt-[40px] rounded-[5px] bg-[#181d20] py-[15px] px-[18px] flex items-start justify-start flex-col ">
            <p className="text-[#ffffff] font-[600] ">Latest Post</p>

            <div className="w-full mt-[10px] ">
              {[...Array(4)].map((item) => {
                return (
                  <div className="flex gap-x-[20px] mt-[15px] w-full">
                    <div className="w-[40px] h-[40px] rounded-[5px] flex justify-center items-center ">
                      <Image
                        src={require("../../../assets/hero.jpg")}
                        height={100}
                        width={100}
                        className="object-cover h-[40px] w-[40px]"
                      />
                    </div>

                    <div>
                      <p className="text-[#ffffff] text-[15px] font-[600] ">
                        What is Blockchain?
                      </p>

                      <p className="text-[#ffffff80] text-[12px]">
                        {" "}
                        {moment().format("Do MMMM, YYYY")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Home;
