import Link from "next/link";
import React, { useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsTelegram,
  BsFillMoonFill,
  BsInstagram,
} from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = ({ bg }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const bgColor = bg === true ? "bg-transparent" : "bg-[#181d20]";
  const navText = bg ? "text-white" : "text-[#c2c3c7]";
  const iconColor = bg ? "#ff5f13" : "#ff5f13";

  return (
    <div
      className={`w-full flex justify-center fixed navbar-box ${bgColor} z-10`}
    >
      <div className={`xl:w-[75%] max-w-[1300px] w-full px-[5%] xl:px-0`}>
        {/* <div
          className={`md:flex hidden w-full justify-between border border-b-gray-200 border-x-0 border-t-0 pt-3 pb-4`}
        >
          <ul className={`flex gap-4`}>
            <li className={`${"text-"} cursor-pointer ${navText}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`cursor-pointer ${navText}`}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={`cursor-pointer ${navText}`}>
              {" "}
              <Link href="/about">About</Link>
            </li>
            <li className={`cursor-pointer ${navText}`}>
              {" "}
              <Link href="/events">Events</Link>
            </li>

            <li className={`cursor-pointer ${navText}`}>
              {" "}
              <Link href="/organizer">Organizer</Link>
            </li>

            <li className={`cursor-pointer ${navText}`}>
              {" "}
              <Link href="/coins">Coins</Link>
            </li>
          </ul>{" "}
          <ul className={`flex gap-5`}>
            <li className="cursor-pointer">
              {" "}
              <BsFacebook color={iconColor} />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsTwitter color={iconColor} />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsInstagram color={iconColor} />{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <BsTelegram color={iconColor} />{" "}
            </li>
          </ul>
        </div> */}

        <div className={`w-full flex items-center justify-between pt-2`}>
          <h1 className={`text-[40px] ${navText}`}>Logo</h1>
          {/* <ul className={`hidden md:flex gap-6`}>
            <li className={`${navText} cursor-pointer`}>
              {" "}
              <Link href="/blog">Blog</Link>
            </li>
            <li className={`${navText} cursor-pointer`}>
              {" "}
              <Link href="/testnet">Testnets</Link>
            </li>
            <li className={`${navText} cursor-pointer`}>
              {" "}
              <Link href="/airdrop">Airdrops</Link>
            </li>
            <li className={`${navText} cursor-pointer`}>
              {" "}
              <Link href="/trending">Trending</Link>
            </li>
          </ul> */}

          <ul className={`hidden md:flex gap-4`}>
            <li className={`${"text-"} cursor-pointer ${navText}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`cursor-pointer ${navText}`}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={`cursor-pointer ${navText}`}>
              {" "}
              <Link href="/about">About</Link>
            </li>
            <li className={`cursor-pointer ${navText}`}>
              {" "}
              <Link href="/events">Events</Link>
            </li>

            <li className={`cursor-pointer ${navText}`}>
              {" "}
              <Link href="/organizer">Organizer</Link>
            </li>

            <li className={`cursor-pointer ${navText}`}>
              {" "}
              <Link href="/coins">Coins</Link>
            </li>
          </ul>{" "}
          <HiMenuAlt2
            className="flex md:hidden"
            size={30}
            color={iconColor}
            onClick={handleMenu}
          />
        </div>
      </div>

      {menu && (
        <div className="fixed bg-[#00000050] z-10 w-full px-3 py-3 h-screen">
          <div className="bg-[#181d20] border border-[#c2c3c730] p-[5%] rounded w-[100%] h-[530px]">
            <MdOutlineClose
              color="#fff"
              className="float-right"
              size={30}
              onClick={handleMenu}
            />

            <ul className={`flex flex-col gap-3 mt-7`}>
              <li className={`text-[#fff] cursor-pointer font-medium`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`text-[#fff] cursor-pointer font-medium`}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={`text-[#fff] cursor-pointer font-medium`}>
                <Link href="/about">About</Link>
              </li>
              <li className={`text-[#fff] cursor-pointer font-medium`}>
                <Link href="/events">Event</Link>
              </li>

              <li className={`cursor-pointer font-medium text-[#fff]`}>
                <Link href="/organizer">Organizer</Link>
              </li>

              <li className={`cursor-pointer text-[#fff] font-medium`}>
                <Link href="/coins">Coins</Link>
              </li>
            </ul>

            <ul className={`flex flex-col gap-4 mt-4`}>
              <li className={`text-[#fff] cursor-pointer font-medium`}>
                <Link href="/blog">Blog</Link>
              </li>
              <li className={`text-[#fff] cursor-pointer font-medium`}>
                <Link href="/testnet">Testnets</Link>
              </li>
              <li className={`text-[#fff] cursor-pointer font-medium`}>
                <Link href="/airdrop">Airdrops</Link>
              </li>
              <li className={`text-[#fff] cursor-pointer font-medium`}>
                <Link href="/trending">Trending</Link>
              </li>
            </ul>

            <ul className={`flex gap-5 mt-10`}>
              <li className="cursor-pointer">
                {" "}
                <BsFacebook color="#ff5f13" size={25} />
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsTwitter color="#ff5f13" size={25} />
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsInstagram color="#ff5f13" size={25} />
              </li>
              <li className="cursor-pointer">
                {" "}
                <BsTelegram color="#ff5f13" size={25} />
              </li>
            </ul>

            {/* <div className="p-2 bg-[#ff5f1330] rounded-full w-[60px] h-[37px] flex items-center justify-center mt-[30px]">
              <BsFillMoonFill color="#ff5f13" size={20} />
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
