import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { AVATAR, NETFLIX_LOGO } from "../utils/constants";
import { toggleGPTSearchPage } from "../utils/configSlice";
import { Link } from "react-router-dom";
import AvatarModal from "./AvatarModal";
import { SearchIcon } from "@heroicons/react/outline";

const Header = (props) => {
  const dispatch = useDispatch();
  const isGPTSearchPage = useSelector((store) => store.config.isGPTSearchPage);
  const location = useLocation();
  const navigate = useNavigate();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGPTSearchPage());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        props?.setProgress && props?.setProgress(100);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    const handler = (e) => {
      if (!e.target.closest("#avatar-modal") && e.target.id !== "avatar-img")
        setAvatarOpen(false);
    };

    window.addEventListener("click", handler);

    //Unsubscribe when component unmounts
    return () => {
      unsubscribe();
      window.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div className="w-full absolute z-50">
      {location.pathname === "/" && (
        <div className="flex justify-normal md:justify-between bg-gradient-to-b from-black">
          <Link to="/">
            <img
              className="w-48 h-24 p-2 mx-2 my-1 md:ml-16 pl-0 ml-28"
              src={NETFLIX_LOGO}
              alt="logo"
            ></img>
          </Link>
        </div>
      )}
      {location.pathname !== "/" && (
        <div className="flex justify-between bg-gradient-to-b from-zinc-900">
          <Link to="/browse">
            <img
              className="w-48 h-24 p-2 mx-2 my-1 ml-16 pl-0"
              src={NETFLIX_LOGO}
              alt="logo"
            ></img>
          </Link>
          <div className="flex">
            <button
              onClick={handleGptSearch}
              className="w-40 h-8 mt-10 m-2 text-white hover:text-gray-400 rounded-lg flex"
            >
              {/* {location.pathname === "/browse" && ( */}
              <SearchIcon
                className={!isGPTSearchPage ? `w-6 mr-2` : `hidden`}
              />
              {/* )} */}
              <p>{isGPTSearchPage ? "Home" : "GPT Search"}</p>
            </button>
            <img
              className="rounded-2xl w-16 h-16 p-2 mt-4 mr-2 cursor-pointer"
              src={AVATAR}
              alt="avatar"
              id="avatar-img"
              // onMouseEnter={() => {
              //   setAvatarOpen(true);
              // }}
              // onMouseLeave={() => {
              //   setAvatarOpen(false);
              // }}
              onClick={() => {
                setAvatarOpen(true);
              }}
            ></img>
            {avatarOpen && (
              <AvatarModal
                handleSignOut={handleSignOut}
                setAvatarOpen={setAvatarOpen}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
