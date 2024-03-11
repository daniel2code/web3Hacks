import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardLoader = () => {
  return (
    <div className="w-full">
      <SkeletonTheme baseColor="#f7f7f7" highlightColor="#44444420">
        <div className=" w-full flex flex-wrap gap-x-[3%] gap-y-[20px] ">
          {[...Array(6)].map((_, i) => {
            return (
              <div className="w-[31%]" key={i} >
                <Skeleton height={180} />
              </div>
            );
          })}
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default CardLoader;
