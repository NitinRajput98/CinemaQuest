import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { AVATAR, NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="w-full absolute">
      {location.pathname === "/" && (
        <div className="flex justify-between bg-gradient-to-b from-black">
          <img
            className="w-48 h-24 p-2 mx-2 my-1 ml-36"
            src={NETFLIX_LOGO}
            alt="logo"
          ></img>
        </div>
      )}
      {location.pathname !== "/" && (
        <div className="flex justify-between bg-gradient-to-b from-zinc-900">
          <img
            className="w-48 h-24 p-2 mx-2 my-1 ml-36"
            src={NETFLIX_LOGO}
            alt="logo"
          ></img>
          <div className="flex">
            <img
              className="rounded-2xl w-16 h-16 p-2 mt-4 mr-2"
              src={AVATAR}
              alt="avatar"
            ></img>
            <button
              onClick={handleSignOut}
              className="font-semibold text-white m-2"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
