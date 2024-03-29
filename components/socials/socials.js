import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsTelegram,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const socialsBox = [
  { name: "Facebook", icon: <BsFacebook color="#fff" /> },
  { name: "Twitter", icon: <BsTwitter color="#fff" /> },
  { name: "Instagram", icon: <BsInstagram color="#fff" /> },
  { name: "Telegram", icon: <BsTelegram color="#fff" /> },
  { name: "Facebook", icon: <BsFacebook color="#fff" /> },
  { name: "Youtube", icon: <BsYoutube color="#fff" /> },
];

const Socials = () => {
  return (
    <div className="flex justify-center py-[50px] border border-b-gray-400 border-t-0 border-x-0">
      <div className="flex gap-x-[50px] flex-wrap gap-y-[20px] justify-center  lg:px-0 px-[5%]">
        {socialsBox.map((item, i) => {
          return (
            <div
              className="flex w-[40%] sm:w-fit items-center gap-x-[15px]"
              key={i}
            >
              {item.icon}
              <p className="text-[14px] text-[#fff] font-normal">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
