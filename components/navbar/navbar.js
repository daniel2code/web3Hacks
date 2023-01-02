import Link from "next/link";
import React from "react";
import { BsFacebook, BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-[75%] max-w-[1300px]`}>
        <div
          className={`flex w-full justify-between border border-b-gray-200 border-x-0 border-t-0 pt-3 pb-4`}
        >
          <ul className={`flex gap-4`}>
            <li className={`text-black cursor-pointer`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`text-black cursor-pointer`}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={`text-black cursor-pointer`}>
              {" "}
              <Link href="/about">About</Link>
            </li>
          </ul>{" "}
          <ul className={`flex gap-5`}>
            <li className="cursor-pointer">
              {" "}
              <BsFacebook color="black" />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsTwitter color="black" />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsInstagram color="black" />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsTelegram color="black" />{" "}
            </li>
          </ul>
        </div>

        <div className={`w-full flex items-center justify-between pt-3`}>
          <h1 className={`text-[40px] text-black`}>Logo</h1>
          <ul className={`flex gap-6`}>
            <li className={`text-black cursor-pointer`}>
              {" "}
              <Link href="/blog">Blog</Link>
            </li>
            <li className={`text-black cursor-pointer`}>
              {" "}
              <Link href="/testnet">Testnets</Link>
            </li>
            <li className={`text-black cursor-pointer`}>
              {" "}
              <Link href="/airdrop">Airdrops</Link>
            </li>
            <li className={`text-black cursor-pointer`}>
              {" "}
              <Link href="/trending">Trending</Link>
            </li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
