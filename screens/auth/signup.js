import React, { useState } from "react";
import AuthWrapper from "../../components/authWrapper/authWrapper";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import DividerWithText from "../../components/dividerWithText/divider";
import Otp from "./otp";
import Interest from "./interest";
import { useFormik } from "formik";
import { signupUser } from "../../provider/slices/auth/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { signupValidationSchema } from "../../utils/validations/signValidation";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { API } from "../../utils/axiosConfig";
import { notifications } from "../../utils/notificationBar";
import { saveUserData } from "../../provider/slices/auth/loginSlice";

const Signup = () => {
  const { steps, setSteps } = useState(1);
  // const { loading } = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAfterRequest = () => {
    router.push("/otp");
  };

  const mutation = useMutation((payload) => {
    return API.post("/auth/email/register", payload)
      .then((res) => {
        console.log(res);
        notifications("success", res.data.message);
        localStorage.setItem("token", res?.data?.data?.token);
        dispatch(saveUserData(res?.data?.data));
        handleAfterRequest();
      })
      .catch((err) => {
        const obj = JSON.parse(err.response.data.message);
        const resultArray = Object.values(obj);

        console.log(err.response.data.message);
        console.log(resultArray[0]);
        notifications("danger", resultArray[0]);
      });
  });

  const { values, errors, handleChange, handleReset, handleSubmit, touched } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      validationSchema: signupValidationSchema,
      onSubmit: async (values) => {
        console.log(values);
        await mutation.mutate(values);
        // dispatch(
        //   signupUser({
        //     first_name: values.first_name,
        //     last_name: values.last_name,
        //     email: values.email,
        //     password: values.password,
        //     password_confirmation: values.password_confirmation,
        //     cb: handleAfterRequest,
        //   })
        // );
      },
    });

  console.log(mutation.error);

  return (
    <AuthWrapper>
      {/* <Otp /> */}
      {/* <Interest /> */}
      <div className="w-full px-[2%]">
        <h2 className="text-[#ffffff] font-[600] text-left text-[24px]">
          Start Exploring
        </h2>

        <p className="mt-[10px] text-[#f2f3f890] ">
          Sign up to explore unlimited contents
        </p>

        <div className=" border border-[#f2f3f860] mt-[30px] mb-[35px] px-3 h-[55px] w-full justify-center items-center flex gap-x-[15px] cursor-pointer ">
          <BsGoogle size={22} /> Sign in with Google
        </div>

        <DividerWithText />

        <div className="flex justify-between gap-x-[5%] mt-[35px] ">
          <div>
            <input
              className="w-full bg-transparent border border-[#f2f3f860] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
            />

            {touched.first_name && errors.first_name && (
              <p className="error-text">{errors.first_name}</p>
            )}
          </div>

          <div>
            <input
              className="w-full bg-transparent border border-[#f2f3f860] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
            />

            {touched.last_name && errors.last_name && (
              <p className="error-text">{errors.last_name}</p>
            )}
          </div>
        </div>

        <div className="w-full mt-[30px]">
          <input
            className="w-full bg-transparent border border-[#f2f3f860] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />

          {touched.email && errors.email && (
            <p className="error-text">{errors.email}</p>
          )}
        </div>

        <div className="w-full  mt-[30px]">
          <input
            className="w-full bg-transparent border border-[#f2f3f860] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
            type="text"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />

          {touched.password && errors.password && (
            <p className="error-text">{errors.password}</p>
          )}
        </div>

        <div className="w-full mt-[30px]">
          <input
            className="w-full bg-transparent border border-[#f2f3f860] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
            type="text"
            placeholder="Confirm Password"
            name="password_confirmation"
            value={values.password_confirmation}
            onChange={handleChange}
          />

          {touched.password_confirmation && errors.password_confirmation && (
            <p className="error-text">{errors.password_confirmation}</p>
          )}
        </div>

        <div className="flex gap-x-[5%] items-end justify-between mt-[50px]">
          <button
            className=" bg-[#ff5f13] mt-[15px] flex items-center justify-center font-[600] flex-1  h-[45px]"
            onClick={handleSubmit}
            type="submit"
          >
            Sign Up
            {mutation.isLoading === true && (
              <div className="lds-dual-ring"></div>
            )}
          </button>
          <Link href="/login">
            <p className="text-[#fff] underline text-[14px] sm:text-[16px] ">
              I Already Have An Account
            </p>
          </Link>{" "}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Signup;
