import React from "react";
import styles from "./About.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const About = () => {
  return (
    <div style={{backgroundColor: "#181d20"}} >
      <Navbar />
      <div className="w-full flex justify-center pt-[55px] md:pt-[105px]">
        <div
          className={`w-[100%] flex justify-center items-center mt-3 ${styles.wrapper}`}
        >
          <h2 className="text-white text-[30px] sm:text-[40px] font-bold">
            About Us
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center px-[5%] mt-[50px]">
        <div className="flex justify-between xl:w-[85%] w-full max-w-[1200px] lg:flex-row flex-col ">
          <h2 className="text-white text-[20px]">About page</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
