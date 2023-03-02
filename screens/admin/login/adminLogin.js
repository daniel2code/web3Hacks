import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

const AdminLogin = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const mutation = useMutation((newTodo) => {
    return axios.post(
      "https://quiclet.urbandesignsco.com/api/admin/login",
      newTodo
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(formDetails);
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <h3 className="text-[28px] sm:text-[35px] font-bold text-white">
        Admin Login
      </h3>

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
