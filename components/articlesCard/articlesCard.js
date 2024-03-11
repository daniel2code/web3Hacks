import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Img from "../../assets/hero1.jpg";

const ArticlesCard = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="w-[100%] h-[auto] aspect-square relative">
        {/* <Image
        // src={require("../../assets/btcc.jpg")}
        src={Img}
        height={400}
        width={400}
        alt="blog post image"
        // className="object-contain w-[100%] h-[250px]"
      /> */}
        <Image
          src={Img}
          alt="Descriptive alt text"
          // layout="responsive"
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          //   objectFit="cover" // Adjust as needed
        />
      </div>

      <div className=" py-[20px] mt-2">
        <h2 className="text-[19px] leading-[23px] text-[#fff] font-medium">
          EC in Advanced Talks with Asset Managers for Spot Bitcoin ETF:
          BlackRock in the Spotlight
        </h2>
        {/* <p className="text-[12px] mt-3 text-[#c2c3c7]">By</p> */}
      </div>

      <div className="w-full flex justify-between ">
        <div className="flex gap-x-[20px]">
          <button className="px-[10px] py-[8px] border border-[#ff5f13] font-medium text-[15px] text-white ">
            <Link href={router.pathname}>View post</Link>
          </button>

          <button className="px-[10px] py-[8px] border border-[#ff5f13] font-medium text-[15px] text-white ">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
