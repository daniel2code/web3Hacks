import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const RatingStars = ({ rating, setRating }) => {
  return (
    <div className="flex w-full flex-row items-center gap-x-[20px]">
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <div key={index} onClick={() => setRating(index)} className="">
            {index <= rating ? (
              <FaStar size={30} color="#ff5f13" />
            ) : (
              <CiStar size={33} color="#fff" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RatingStars;
