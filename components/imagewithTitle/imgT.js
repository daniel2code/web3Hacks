import React from "react";
import styles from "./ImgT.module.css";

const ImgT = ({ title }) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`w-[75%] max-w-[1300px] flex justify-center items-center mt-6 ${styles.wrapper}`}
        // style={{ backgroundImage: "url(../../assets/bloc.jpg)" }}
      >
        <h2 className="text-white text-[37px] font-bold">{title || "Title"}</h2>
      </div>
    </div>
  );
};

export default ImgT;
