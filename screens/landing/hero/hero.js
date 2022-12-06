import React from "react";
import styles from "./Hero.module.css";
import { BsFacebook, BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  return (
    <main className={`${styles.heroWrap} flex justify-center`}>
      <div className={`w-[75%]`}>
        <div
          className={`flex w-full justify-between ${styles.heroBox} pt-3 pb-4`}
        >
          <ul className={`flex gap-4`}>
            <li className={`text-white cursor-pointer`}>Home</li>
            <li className={`text-white cursor-pointer`}>Contact</li>
            <li className={`text-white cursor-pointer`}>About</li>
          </ul>{" "}
          <ul className={`flex gap-5`}>
            <li className="cursor-pointer">
              {" "}
              <BsFacebook color="white" />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsTwitter color="white" />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsInstagram color="white" />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsTelegram color="white" />{" "}
            </li>
          </ul>
        </div>

        <div className={`w-full flex items-center justify-between pt-5`}>
          <h1 className={`text-[40px] text-white`}>Logo</h1>
          <ul className={`flex gap-6`}>
            <li className={`text-white cursor-pointer`}>Blog</li>
            <li className={`text-white cursor-pointer`}>Testnets</li>
            <li className={`text-white cursor-pointer`}>Airdrops</li>
            <li className={`text-white cursor-pointer`}>Trending</li>
          </ul>{" "}
        </div>

        <div className={`w-full mt-[90px]`}>
          <h4 className={`text-white text-[12px]`}>Blockchain</h4>
          <h2
            className={`text-[45px] leading-[52px] mt-4 text-white max-w-[60%]`}
          >
            Get your exclusive blockchain contents, trends and hacks
          </h2>

          <div className="flex gap-4 mt-[120px]">
            <button className="p-5 bg-white rounded">
              <MdArrowBackIos color="black" />
            </button>

            <button className="p-5 bg-white rounded">
              <MdArrowForwardIos color="black" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
