import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  let [isSignInForm, setIsSignInForm] = useState(true);
  let [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

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
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
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
          navigate("/browse");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          className=" "
        ></img>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute w-4/12 p-12  opacity-84 bg-black text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm  "
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
              className=" border-1 border-gray-300 p-3 mb-4  w-full rounded-sm "
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            ref={email}
            className=" border-1 border-gray-300 bg-black p-3 mb-4  w-full rounded-sm "
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
            className=" mb-4 p-3 rounded-lg bg-red-700 w-full cursor-pointer"
            onClick={handleButtonClick}
          >
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
