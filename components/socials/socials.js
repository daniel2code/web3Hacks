import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsTelegram,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const socialsBox = [
  { name: "Facebook", icon: <BsFacebook /> },
  { name: "Twitter", icon: <BsTwitter /> },
  { name: "Instagram", icon: <BsInstagram /> },
  { name: "Telegram", icon: <BsTelegram /> },
  { name: "Facebook", icon: <BsFacebook /> },
  { name: "Youtube", icon: <BsYoutube /> },
];

const Socials = () => {
  return (
    <div className="flex justify-center py-[50px] border border-b-gray-400 border-t-0 border-x-0">
      <div className="flex gap-x-[50px]">
        {socialsBox.map((item) => {
          return (
            <div className="flex items-center gap-x-[15px]">
              {item.icon}
              <p className="text-[14px] font-normal">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
