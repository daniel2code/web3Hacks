import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const pageLinks = [
    { name: "Home", link: "/admin/home", id: 1 },
    { name: "Write a Post", link: "/admin/write", id: 2 },
    { name: "Create Airdrop", link: "/admin/create-airdrop", id: 3 },
    { name: "Create Event", link: "/admin/event", id: 4 },
    { name: "Create Ads", link: "/admin/ads", id: 5 },
    { name: "Manage Airdrops", link: "/admin/manage-airdrops", id: 6 },
    { name: "Manage Articles", link: "/admin/manage", id: 7 },
    { name: "Manage Event", link: "/admin/manage-event", id: 8 },
    { name: "Manage Ads", link: "/admin/manage-ads", id: 9 },
  ];

  return (
    <div className="w-full bg-[#00b4d8] h-[100vh]">
      <div className="pt-[30px] flex flex-col gap-y-4 text-[#fff]">
        {pageLinks.map((item) => {
          return (
            <p
              className={`pl-[15%] mt-[5px] ${
                router.pathname === item.link && "bg-[#00000020]"
              } hover:bg-[#00000020] mx-[20px] py-[7px] rounded font-semibold cursor-pointer`}
              key={item?.id}
            >
              <Link href={item?.link}>{item?.name}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
