import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./request.module.css";

const Request = () => {
  return (
    <div style={{ backgroundColor: "#181d20" }}>
      <Navbar />
      <div className="w-full flex justify-center pt-[55px] md:pt-[105px]">
        <div
          className={`w-[100%] flex justify-center flex-col items-center mt-3 ${styles.wrapper}`}
        >
          <h2 className="text-white text-[30px] sm:text-[40px] font-bold">
            Forum Request
          </h2>

          <p className="text-[#fff] text-[17px] text-center px-[5%] xl:w-[85%] w-full">
            We are diverse and inclusive, we want to place you in front of the
            eco system, submit a forum request let's help push you.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[50px] px-[5%]">
        <div className="flex  xl:w-[85%] w-full max-w-[1200px] flex-col ">
          <h3 className="text-[28px] sm:text-[35px] font-bold text-[#fff]">
            Submit a request
          </h3>

          <form className="mt-[50px] flex flex-wrap gap-[15px] gap-y-[20px] ">
            <div className="w-full">
              <label className="text-[#fff] text-[15px]">Community Name</label>
              <input
                className="w-full sm:w-[100%] mt-3 bg-transparent border border-[#f2f3f860] px-3 h-[50px] text-[#000] placeholder-[#9b9b9b]"
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full">
              <label className="text-[#f2f3f8] text-[15px]">Twitter Link</label>
              <input
                className="w-full sm:w-[100%] mt-3 bg-transparent border border-[#f2f3f860] px-3 h-[50px] text-[#000] placeholder-[#9b9b9b]"
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full">
              <label className="text-[#f2f3f8] text-[15px]">
                Whatsapp Link
              </label>
              <input
                className="w-full mt-3 sm:w-[100%] bg-transparent border border-[#f2f3f860] px-3 h-[50px] text-[#000] placeholder-[#9b9b9b]"
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full">
              <label className="text-[#f2f3f8] text-[15px]">Website</label>
              <input
                className="w-full sm:w-[100%] mt-3 bg-transparent border border-[#f2f3f860] px-3 h-[50px] text-[#000] placeholder-[#9b9b9b]"
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full">
              <label className="text-[#f2f3f8] text-[15px]">Cover Image</label>
              <input
                className="w-full sm:w-[100%] mt-3 bg-transparent border border-[#f2f3f860] px-3 h-[50px] text-[#000] placeholder-[#9b9b9b]"
                type="file"
                placeholder=""
              />
            </div>

            <div className="w-full">
              <label className="text-[#f2f3f8] text-[15px]">Description</label>
              <textarea
                className="w-[100%] mt-3 bg-transparent border border-[#f2f3f860] pt-3 px-3 text-[#000] placeholder-[#9b9b9b]"
                placeholder=""
                rows={6}
              />
            </div>

            <button className="bg-[#ff5f13] w-full sm:w-[100%] h-[55px] text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Request;
