import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { BsFacebook, BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import Navbar from "../../../components/navbar/navbar";
import Image from "next/image";
import heroImg from "../../../public/hero1.jpg";

const Hero = () => {
  const [step, setStep] = useState(1);

  const link =
    "https://media.istockphoto.com/id/1413037138/photo/technology-block-chain-network-connection-big-data-visualization-cyber-security-background.jpg?b=1&s=170667a&w=0&k=20&c=OSNRmcab3VoQtxqvg89ahu_s06OEC-93mkpFwJsXbPU=";

  return (
    <div
      className={`${styles.heroWrap} flex justify-center`}
      // style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="block w-full md:hidden fixed z-10">
        <Navbar bg={true} />
      </div>

      <div
        className={`w-full xl:w-[75%] max-w-[1300px] px-[5%] xl:px-[0%] flex flex-col`}
      >
        <div
          className={`hidden lg:flex w-full justify-center ${styles.heroBox} pt-[27px] pb-[25px]`}
        >
          <ul className={`flex gap-[30px] w-full justify-center`}>
            <li
              className={`text-white cursor-pointer hover:underline hover:text-[#ff5f13] transition-colors`}
            >
              Home
            </li>
            <li
              className={`text-white cursor-pointer hover:underline hover:text-[#ff5f13] transition-colors`}
            >
              Categories
            </li>
            <li
              className={`text-white cursor-pointer hover:underline hover:text-[#ff5f13] transition-colors`}
            >
              Contact Us
            </li>
            <li
              className={`text-white cursor-pointer hover:underline hover:text-[#ff5f13] transition-colors`}
            >
              About Us
            </li>

            {/* <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              >
                Dropdown
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            </div> */}
          </ul>{" "}
        </div>

        <div
          className={`w-full hidden md:flex items-center justify-between pt-[25px]`}
        >
          <ul className={`flex gap-6`}>
            <li
              className={`text-white cursor-pointer hover:underline hover:text-[#ff5f13] transition-colors`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={`text-white cursor-pointer hover:underline hover:text-[#ff5f13] transition-colors`}
            >
              <Link href="/testnet">Testnets</Link>
            </li>
            <li
              className={`text-white cursor-pointer hover:underline hover:text-[#ff5f13] transition-colors`}
            >
              <Link href="/airdrop">Airdrops</Link>
            </li>
            <li
              className={`text-white cursor-pointer hover:underline hover:text-[#ff5f13] transition-colors`}
            >
              <Link href="/trending">Trending</Link>
            </li>
          </ul>

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

        <div
          className={`w-full pb-[6%] flex-1 flex flex-col justify-center items-center`}
        >
          {/* <h4 className={`text-[#ff5f13] italic font-bold text-[20px]`}>
            Dapplabx
          </h4> */}

          <Image
            src="/logo.png"
            width={170}
            height={100}
            alt="app logo"
            className="object-cover"
          />

          <h2
            className={`md:text-[45px] text-[35px] leading-[44px] text-center md:leading-[52px] mt-4 text-white max-w-[100%] lg:max-w-[85%] xl:max-w-[60%]`}
          >
            Get your exclusive blockchain contents, trends and hacks
          </h2>

          <ul className="flex gap-x-[35px] mt-[20px] flex-wrap justify-center">
            <li className={`${styles.textDot}`}>Dapps</li>
            <li className={`${styles.textDot}`}>Blockchain</li>
            <li className={`${styles.textDot}`}>Defi</li>
            <li className={`${styles.textDot}`}>Airdrops</li>
          </ul>

          <div className="flex gap-4 mt-[20%] sm:mt-[30px]">
            <button className="py-3 w-[150px] bg-[#ff5f13] rounded">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
