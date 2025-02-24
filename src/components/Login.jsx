import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  let [isSignInForm, setIsSignInForm] = useState(true);
  let toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          className=" "
        ></img>
        <form
          action=""
          className=" absolute w-4/12 p-12 bg-black opacity-84  text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm  "
        >
          <h1 className=" font-bold text-2xl pb-4 mb-3 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              name=""
              placeholder="Full Name"
              id=""
              className=" border-1 border-gray-300 p-3 mb-4  w-full rounded-sm "
            />
          )}
          <input
            type="text"
            name=""
            placeholder="Email Address"
            id=""
            className=" border-1 border-gray-300 p-3 mb-4  w-full rounded-sm "
          />
          <input
            type="password"
            name=""
            placeholder="Password"
            id=""
            className=" border-1  border-gray-300 p-3 mb-4  w-full rounded-sm"
          />
          <button className=" mb-4 p-3 rounded-lg bg-red-700 w-full ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className=" text-gray-400">
            {isSignInForm ? "New to Netflix? " : "Already registered? "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign In now."}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
