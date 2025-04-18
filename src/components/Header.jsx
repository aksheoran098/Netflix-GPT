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
    <div className="flex justify-between absolute w-full h-20 z-10 px-2 py-2 bg-gradient-to-b from-black top-0 ">
      <img className="" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center text-white">
          <button
            className="cursor-pointer bg-gray-500/40 m-4 px-3 py-1 border-zinc-500 border-[1px] overflow-hidden rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="h-2/3  " src={user?.photoURL} alt="usericon" />
          <button className="cursor-pointer " onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
