import React from "react";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import DividerWithText from "../../components/dividerWithText/divider";
import AuthWrapper from "../../components/authWrapper/authWrapper";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { loginUser } from "../../provider/slices/auth/loginSlice";
import { loginValidationSchema } from "../../utils/validations/loginValidation";

const Login = () => {
  function handleGoogleRegister() {
    // TODO: Replace CLIENT_ID and REDIRECT_URI with actual values
    const clientId =
      "322909581155-n701v1ekah8n13vfj4hntk8po1m8aeki.apps.googleusercontent.com";
    const redirectUri = "https://api.dapplab.co/api/oauth/google/callback";
    const scope = encodeURIComponent("openid email profile");
    const state = encodeURIComponent("YOUR_UNIQUE_STATE_STRING"); // Should be a unique and non-guessable value
    const responseType = "code";
    const accessType = "offline"; // For requesting refresh token
    const prompt = "consent";

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state}&access_type=${accessType}&prompt=${prompt}`;

    window.location.href = googleAuthUrl;
  }

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);

  const { values, errors, handleChange, handleReset, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginValidationSchema,
      onSubmit: (values) => {
        dispatch(loginUser({ email: values.email, password: values.password }));
      },
    });

  return (
    <AuthWrapper>
      <div className="w-full px-[2%]">
        <h2 className="text-[#ffffff] font-[600] text-left text-[24px]">
          Welcome Back
        </h2>

        <p className="mt-[10px] text-[#f2f3f890] ">
          Login to explore unlimited contents
        </p>

        <div
          // onClick={() => signIn("google")}
          onClick={handleGoogleRegister}
          className=" border border-[#f2f3f860] mt-[30px] mb-[35px] px-3 h-[55px] w-full justify-center items-center flex gap-x-[15px] cursor-pointer "
        >
          <BsGoogle size={22} /> Sign in with Google
        </div>

        <DividerWithText />

        <div className="w-full mt-[20px]">
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

        <div className="w-full mt-[5px] sm:mt-[20px]">
          <input
            className="w-full bg-transparent border border-[#f2f3f860] mt-[30px] px-3 h-[55px] text-[#fff] placeholder-[#9b9b9b]"
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
        <div className="flex gap-x-[5%] items-end justify-between mt-[50px]  ">
          <button
            className=" bg-[#ff5f13] mt-[15px] flex items-center justify-center font-[600] flex-1  h-[45px]"
            onClick={handleSubmit}
          >
            Login
            {loading && <div className="lds-dual-ring"></div>}
          </button>

          <Link href="/signup">
            <p className="text-[#fff] underline text-[14px] sm:text-[16px]  ">
              Don't have an account?
            </p>
          </Link>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Login;
