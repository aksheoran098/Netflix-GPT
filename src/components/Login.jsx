import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  let [isSignInForm, setIsSignInForm] = useState(true);
  let [errorMessage, setErrorMessage] = useState(null);

  let toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  let handleButtonClick = (e) => {
    // Validate the form data
    let message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) {
      return;
    }
    // REGISTER PAGE
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User Signed up
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          console.log(error);

          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    }

    // LOGIN PAGE
    else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
          if (errorCode == "auth/invalid-credential") {
            setErrorMessage("⊗ Email or password is wrong!");
          }
        });
    }
  };
  return (
    <>
      <Header />
      <div className="relative">
        <img
          src={BACKGROUND_IMAGE}
          className="h-screen w-screen min-w-[250px]"
        ></img>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute p-12 sm:p-8 md:p-12  opacity-84 bg-black text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm max-h-full w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 "
        >
          <h1 className=" font-bold text-2xl pb-4 mb-3 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              ref={name}
              className=" border-1 border-gray-300 p-3 sm:p-4 my-2 sm:my-4 w-full rounded-sm "
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            ref={email}
            className=" border-1 border-gray-300 p-3 sm:p-4 my-2 sm:my-4 w-full rounded-sm "
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={password}
            className=" border-1  border-gray-300 p-3 mb-4  w-full rounded-sm"
          />
          {errorMessage && (
            <p className="text-red-500 font-bold m-2">{errorMessage}</p>
          )}
          <button
            className=" mb-4 p-3 rounded-lg bg-red-600 w-full cursor-pointer hover:bg-red-800 transition duration-300 "
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className=" text-gray-400">
            {isSignInForm ? "New to Netflix? " : "Already registered? "}
            <span
              className="text-white hover:underline cursor-pointer transition duration-300"
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
