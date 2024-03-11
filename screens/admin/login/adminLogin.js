import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { notifications } from "../../../utils/notificationBar";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, saveToken } from "../../../provider/slices/authSlice";

const AdminLogin = () => {
  const [step, setStep] = useState(1);
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const mutation = useMutation((newTodo) => {
    return axios.post("https://api.dapplab.co/api/admin/login", newTodo)
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setStep(1);
    await mutation.mutate(formDetails);
  }

  const saveUserToken = (token) => {
    localStorage.setItem("token", token);
  };
  // const updateStore = useCallback(() => {}, []);

  useEffect(() => {
    if (step <= 1 && mutation.isError) {
      notifications("danger", mutation.error?.response.data.message);
      setStep(step + 1);
    }

    if (step <= 1 && mutation.isSuccess === true) {
      notifications(
        "success",
        mutation?.data?.data?.message || "Login Successful"
      );
      setStep(step + 1);
      dispatch(saveToken(mutation?.data?.data?.data?.token));
      dispatch(checkIsAuth(true));
      saveUserToken(mutation?.data?.data?.data?.token);
      setTimeout(() => {
        auth.isAuth && router.push("/admin/home");
      }, 2000);
    }
  }, [mutation]);

  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <h3 className="text-[28px] sm:text-[35px] font-bold text-white">
        Admin Login
      </h3>

      {/* <p className="text-[#fff]">
        error: {mutation.error?.response.data.message}
      </p> */}

      <div className="max-w-[600px] w-full formbox px-[2%] py-[30px] mt-[30px]">
        <form
          className="mt-6 flex flex-col gap-[15px] justify-between"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full bg-transparent border border-[#f2f3f8] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formDetails.email}
            required
          />
          <input
            className="w-full bg-transparent border border-[#f2f3f8]  px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
            type="password"
            placeholder="Password"
            name="password"
            value={formDetails.password}
            onChange={handleChange}
            required
          />

          <button
            disabled={mutation.isLoading}
            className="bg-[#7a8c90] w-full mt-[30px] flex justify-center items-center h-[55px] text-white"
          >
            Login {mutation.isLoading && <div className="lds-dual-ring"></div>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
