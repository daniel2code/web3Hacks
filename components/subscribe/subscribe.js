import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#e2f7fa] py-[50px] mt-[70px]">
      <div className="w-full flex justify-center">
        <div className="w-[100%] px-[5%] lg:w-[75%] flex justify-center flex-col md:flex-row items-center gap-x-[20px]">
          <p className="mb-[25px] text-[15px] font-medium">Subscribe Today</p>
          <div className="md:ml-[20px] ml-0">
            <form className="">
              <div className="flex items-center gap-x-3">
                <input
                  placeholder="Your E-Mail"
                  className="h-[40px] w-[100%] max-w-[300px] border border-gray-300 rounded pl-4"
                />
                <button className="w-[100px] bg-[black] h-[40px] text-[14px] rounded text-white">
                  SIGN UP
                </button>
              </div>
              <div className="flex mt-2 gap-x-2">
                <input type="checkbox" />
                <p className="text-[13px]">
                  I will like to receive news and special offers
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
