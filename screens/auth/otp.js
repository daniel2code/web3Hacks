import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../provider/slices/auth/verifyOtp";
import { notifications } from "../../utils/notificationBar";
import AuthWrapper from "../../components/authWrapper/authWrapper";
import { UseWidth } from "../../utils/useWidth";
import { useRouter } from "next/router";

const OtpComponent = () => {
  const [otp, setOtp] = useState("");
  const { loading } = useSelector((state) => state.verifyOtp);
  const { data } = useSelector((state) => state.signup);
  const { userData } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { screenWidth } = UseWidth();
  const router = useRouter();

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const renderInput = (props, index, inputProps) => {
    return <input {...props} {...inputProps} />;
  };

  const handleAfterRequest = () => {
    router.push("/interest");
  };

  const handleSubmitOtp = () => {
    if (otp.length < 6) notifications("danger", "Incomplete OTP");
    else {
      dispatch(
        verifyUser({
          user_id: userData?.user?.id,
          code: otp,
          cb: handleAfterRequest,
        })
      );
    }
  };

  console.log(userData);

  return (
    <AuthWrapper>
      <div className="w-full">
        <h2 className="text-[#ffffff] font-[600] text-left text-[24px]">
          Enter OTP
        </h2>

        <p className="text-[15px] text-[#ffffff90] mt-[10px] ">
          Enter the otp sent to {userData?.user?.email}
        </p>

        <div className="w-full mt-[40px]">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            renderInput={renderInput}
            inputStyle={{
              width: screenWidth < 600 ? "45px" : "80px",
              height: screenWidth < 600 ? "45px" : "80px",
              margin: "10px 5px",
              fontSize: "25px",
              borderRadius: "0%", // square shape
              border: "1px solid #ffffff60",
              // backgroundColor: "transparent"
            }}
          />
        </div>

        <div className="flex gap-x-[5%] items-end justify-between mt-[50px]  ">
          <button
            className=" bg-[#ff5f13] flex justify-center items-center mt-[15px] font-[600] flex-1  h-[45px]"
            onClick={handleSubmitOtp}
          >
            Submit
            {loading && <div className="lds-dual-ring"></div>}
          </button>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default OtpComponent;
