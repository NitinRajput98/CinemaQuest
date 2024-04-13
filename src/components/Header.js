import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser);
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="w-full absolute">
      {location.pathname === "/" && (
        <div className="flex justify-between bg-gradient-to-b from-black">
          <img
            className="w-48 h-24 p-2 mx-2 my-1 ml-36"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          ></img>
        </div>
      )}
      {location.pathname !== "/" && (
        <div className="flex justify-between bg-gradient-to-b from-zinc-900">
          <img
            className="w-48 h-24 p-2 mx-2 my-1 ml-36"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          ></img>
          <div className="flex">
            <img
              className="rounded-2xl w-16 h-16 p-2 mt-4 mr-2"
              src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
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
