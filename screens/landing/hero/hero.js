import React, { useState } from "react";
import styles from "./Hero.module.css";
import { BsFacebook, BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import Navbar from "../../../components/navbar/navbar";
import heroImg from "../../../assets/bloc.jpg";

const Hero = () => {
  const [step, setStep] = useState(1);

  const link = "https://media.istockphoto.com/id/1413037138/photo/technology-block-chain-network-connection-big-data-visualization-cyber-security-background.jpg?b=1&s=170667a&w=0&k=20&c=OSNRmcab3VoQtxqvg89ahu_s06OEC-93mkpFwJsXbPU="

  return (
    <div
      className={`${styles.heroWrap} flex justify-center`}
      // style={{ backgroundImage: `url(${link})` }}
    >
      <Navbar bg={true} />
      <div
        className={`w-full xl:w-[75%] max-w-[1300px] px-[5%] xl:px-[0%] flex flex-col items-center justify-center`}
      >
        {/* <div
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
        </div> */}

        {/* <div className={`w-full flex items-center justify-between pt-5`}>
          <h1 className={`text-[40px] text-white`}>Logo</h1>
          <ul className={`flex gap-6`}>
            <li className={`text-white cursor-pointer`}><Link href="/blog" >Blog</Link></li>
            <li className={`text-white cursor-pointer`}><Link href="/testnet" >Testnets</Link></li>
            <li className={`text-white cursor-pointer`}><Link href="/airdrop" >Airdrops</Link></li>
            <li className={`text-white cursor-pointer`}><Link href="/trending" >Trending</Link></li>
          </ul>{" "}
        </div> */}

        <div className={`w-full pt-[105px]`}>
          <h4 className={`text-[#ff5f13] font-bold text-[12px]`}>Blockchain</h4>
          <h2
            className={`md:text-[45px] text-[35px] leading-[44px] md:leading-[52px] mt-4 text-white max-w-[100%] lg:max-w-[85%] xl:max-w-[60%]`}
          >
            Get your exclusive blockchain contents, trends and hacks
          </h2>

          <div className="flex gap-4 mt-[120px]">
            <button className="p-5 bg-[#ff5f13] rounded">
              <MdArrowBackIos color="white" />
            </button>

            <button className="p-5 bg-[#ff5f13] rounded">
              <MdArrowForwardIos color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
