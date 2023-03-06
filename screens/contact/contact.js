import React from "react";
import styles from "./Contact.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { MdLocationPin } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsTelegram,
  BsMedium,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#181d20" }}>
      <Navbar />
      <div className="w-full flex justify-center pt-[55px] md:pt-[105px]">
        <div
          className={`w-[100%] flex justify-center flex-col items-center mt-3 ${styles.wrapper}`}
        >
          <h2 className="text-white text-[30px] sm:text-[40px] font-bold">
            Contact Us
          </h2>

          <p className="text-[#fff] text-[17px] text-center px-[5%] xl:w-[85%] w-full" >
            Partnerships strengthen all involved parties. If you’re looking for
            partnerships or advertising opportunities reach out and let’s grow
            together!
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[50px] px-[5%]">
        <div className="flex justify-between xl:w-[85%] w-full max-w-[1200px] lg:flex-row flex-col ">
          <div className="lg:w-[46%] ">
            <h3 className="text-[28px] sm:text-[35px] font-bold text-[#fff]">
              Get in Touch
            </h3>

            <form className="mt-6 flex flex-wrap gap-[15px] justify-between">
              <input
                className="w-full sm:w-[48%] bg-transparent border border-[#f2f3f860] px-3 h-[55px] text-[#000] placeholder-[#9b9b9b]"
                type="text"
                placeholder="Your name"
              />
              <input
                className="w-full sm:w-[48%] bg-transparent border border-[#f2f3f860] px-3 h-[55px] text-[#000] placeholder-[#9b9b9b]"
                type="number"
                placeholder="Phone"
              />

              <textarea
                className="w-[100%] bg-transparent border border-[#f2f3f860] pt-3 px-3 text-[#000] placeholder-[#9b9b9b]"
                placeholder="Your message"
                rows={6}
              />

              <input
                className="w-full sm:w-[48%] bg-transparent border border-[#f2f3f860] px-3 h-[55px] text-[#000] placeholder-[#9b9b9b]"
                type="text"
                placeholder="E-mail"
              />

              <button className="bg-[#ff5f13] w-full sm:w-[48%] h-[55px] text-white">
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-[46%] lg:mt-0 mt-[50px]">
            <h3 className="text-[28px] sm:text-[35px] font-bold text-[#fff] ">
              Contact information
            </h3>

            <div className="w-full border border-[#f2f3f860] py-4 mt-6">
              <div className="flex gap-y-3 flex-col sm:flex-row w-full border border-x-0 border-t-0 border-b-gray-300 py-5 px-5">
                <h3 className="w-[40%] text-[#fff] sm:w-[35%] font-bold text-[16px] sm:text-[18px]">
                  ADDRESS
                </h3>
                <div className="flex gap-x-4">
                  <MdLocationPin size={30} color={`#c2c3c7`} />
                  <p className="text-[15px] text-[#c2c3c7] sm:text-[16px]">
                    30 Nwaniba Road Aba, Abia State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-y-3 flex-col sm:flex-row w-full border border-x-0 border-t-0 border-b-gray-300 py-7 px-5">
                <h3 className="w-[40%] sm:w-[35%] text-[#fff] font-bold text-[16px] sm:text-[18px]">
                  24/7 SUPPORT
                </h3>
                <div className="flex gap-x-4">
                  <BsFillTelephoneFill size={22} color={`#c2c3c7`} />
                  <p className="text-[15px] text-[#c2c3c7] sm:text-[16px]">
                    +234-90578393839
                  </p>
                </div>
              </div>

              <div className="flex w-full gap-y-3 flex-col sm:flex-row py-7 px-5">
                <h3 className="w-[40%] sm:w-[35%] font-bold text-[16px] sm:text-[18px] text-[#fff]">
                  GET SOCIAL
                </h3>
                <div className="flex gap-x-4">
                  <BsFacebook size={23} color="#c2c3c7" />
                  <BsTwitter size={23} color="#c2c3c7" />
                  <BsTelegram size={23} color="#c2c3c7" />
                  <BsMedium size={23} color="#c2c3c7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[100px] border border-t-[#c2c3c750] border-x-0 border-b-0 " />

      <Footer />
    </div>
  );
};

export default Contact;
