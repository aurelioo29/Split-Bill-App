import { Link } from "react-router";
import { svg } from "../data/assets";
import PropTypes from "prop-types";

const AuthForm = ({ formType }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full my-6 mb-14">
        <div className="flex-1 h-0.5 bg-[#003633]"></div>
        <h1 className="text-5xl font-semibold mx-4 text-center text-[#003633] tracking-wider">
          {formType === "register"
            ? "Create an Account"
            : "Log in to your Account"}
        </h1>
        :<div className="flex-1 h-0.5 bg-[#003633]"></div>
      </div>

      {/* Formulir */}
      <form className="space-y-4">
        {/* // First-Name && Last-Name */}
        {formType === "register" && (
          <div className="flex gap-2">
            <div className="flex items-center w-1/2 p-4 rounded-md bg-[#003633d5] shadow-lg">
              <img
                src={svg.people}
                alt="User Icon"
                className="w-5 h-5 mr-5 text-white"
              />
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 outline-none text-white tracking-widest"
              />
            </div>
            <div className="flex items-center w-1/2 p-4 rounded-md bg-[#003633d5] shadow-lg">
              <img
                src={svg.people}
                alt="User Icon"
                className="w-5 h-5 mr-5 text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 outline-none text-white tracking-widest"
              />
            </div>
          </div>
        )}

        {/* Email */}
        <div className="flex items-center w-full p-4 rounded-md bg-[#003633d5] shadow-lg mt-5">
          <img
            src={svg.email}
            alt="User Icon"
            className="w-5 h-5 mr-5 text-white"
          />
          <input
            type="email"
            placeholder="Input your email"
            className="flex-1 outline-none text-white tracking-widest"
          />
        </div>

        {/* Password */}
        <div className="flex items-center w-full p-4 rounded-md bg-[#003633d5] shadow-lg mt-5">
          <img
            src={svg.lock}
            alt="User Icon"
            className="w-5 h-5 mr-5 text-white"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="flex-1 outline-none text-white tracking-widest"
          />
        </div>

        {/* // Re-type Password */}
        {formType === "register" && (
          <div className="flex items-center w-full p-4 rounded-md bg-[#003633d5] shadow-lg mt-5">
            <img
              src={svg.lock}
              alt="User Icon"
              className="w-5 h-5 mr-5 text-white"
            />
            <input
              type="password"
              placeholder="Enter confirm password"
              className="flex-1 outline-none text-white tracking-widest"
            />
          </div>
        )}

        <div className="flex items-center tracking-wider text-md mt-10">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <a href="#" className="underline font-bold">
              Terms & Conditions
            </a>
          </label>
        </div>

        <button className="w-full bg-[#003633] text-white font-bold p-2 rounded-lg transition tracking-widest text-2xl cursor-pointer mt-4">
          {formType === "register" ? "Create Account" : "Log in"}
        </button>

        <p className="text-center text-lg mt-6 tracking-widest">
          {formType === "register" ? (
            <>
              Already have an account?{" "}
              <Link to={"/login"} className="underline">
                Log in
              </Link>
            </>
          ) : (
            <>
              Don&apos;t have an account??{" "}
              <Link to={"/register"} className="underline">
                Create an account
              </Link>
            </>
          )}
        </p>
      </form>
    </>
  );
};

AuthForm.propTypes = {
  formType: PropTypes.string.isRequired,
};

export default AuthForm;
