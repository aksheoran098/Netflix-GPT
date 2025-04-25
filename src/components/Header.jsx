// 	https://cdn-icons-png.flaticon.com/256/1077/1077012.png
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component will unmount
    return () => unsubscribe();
  }, []);

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="flex justify-between absolute w-full h-10 sm:h-20 z-10 px-2 py-2 bg-gradient-to-b from-black top-0 ">
      <img className="" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center text-white">
          <button
            className="cursor-pointer sm:bg-[#d9232e]/90 hover:bg-red-900 transition duration-300 sm:px-3 sm:py-1 overflow-hidden rounded-md mr-4 flex"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? (
              "Homepage"
            ) : (
              <>
                <span>
                  <svg
                    fill="#ffffff"
                    height="24"
                    width="24"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-97.68 -97.68 683.76 683.76"
                    xml:space="preserve"
                    stroke="#ffffff"
                    stroke-width="48.839999999999996"
                    transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
                <span>&nbsp;GPT Search</span>
              </>
            )}
          </button>
          <img
            className="h-2/3  sm:m-2 py-1 "
            src={user?.photoURL}
            alt="usericon"
          />

          <button
            className="cursor-pointer flex sm:bg-[#4294ff]/90 hover:bg-[#295a9a] transition duration-300 sm:px-3 sm:py-1       overflow-hidden rounded-md   "
            onClick={handleSignOut}
          >
            <span>Logout &nbsp; </span>
            <span>
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
