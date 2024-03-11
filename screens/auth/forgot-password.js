import React from "react";
import AuthWrapper from "../../components/authWrapper/authWrapper";

const ForgotPasswordPage = () => {
  return (
    <AuthWrapper>
      <div className="w-full px-[2%]">
        <h2 className="text-[#ffffff] font-[600] text-left text-[24px]">
          Reset Password
        </h2>

        <input
          className="w-full bg-transparent border border-[#f2f3f860] mt-[30px] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
          type="text"
          placeholder="Password"
        />

        <input
          className="w-full bg-transparent border border-[#f2f3f860] mt-[30px] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
          type="text"
          placeholder="Confirm Password"
        />
        <div className="flex gap-x-[5%] items-end justify-between mt-[50px]  ">
          <button className=" bg-[#ff5f13] rounded-[6px] mt-[15px] font-[600] flex-1  h-[45px]">
            Reset
          </button>

          <p className="text-[#fff] underline">Remembered your account?</p>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPasswordPage;
