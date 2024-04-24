import { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import LoginErrorMssg from "./LoginErrorMssg";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { AVATAR, NETFLIX_BACKGROUND } from "../utils/constants";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import LoadingBar from "react-top-loading-bar";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validateObj, setValidateObj] = useState({
    emailValidMssg: null,
    passwordValidMssg: null,
    nameValidMssg: null,
  });
  const [signInSignUpErrorMssg, setSignInSignUpErrorMssg] = useState("");
  const [updateProfileSignUp, setUpdateProfileSignUp] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleBtnClick = () => {
    setSignInSignUpErrorMssg("");
    //Checking if input is valid
    const validateObj = isSignInForm
      ? validateData(email.current.value, password.current.value)
      : validateData(
          email.current.value,
          password.current.value,
          true,
          name?.current?.value
        );

    setValidateObj(validateObj);
    //If input is not valid
    if (!validateObj.isInputValid) return;
    setProgress(100);
    //If input is valid
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          setProgress(100);
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR,
          })
            .then(() => {
              setProgress(100);
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              // Profile updated!
            })
            .catch((error) => {
              setProgress(100);
              // An error occurred
              setUpdateProfileSignUp(error.message);
            });
        })
        .catch((error) => {
          setProgress(100);
          // const errorCode = error.code;
          const errorMessage = error.message;
          setSignInSignUpErrorMssg(errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          setProgress(100);
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          setProgress(100);
          // const errorCode = error.code;
          const errorMessage = error.message;
          setSignInSignUpErrorMssg(errorMessage);
        });
    }
  };

  return (
    <div className="bg-black bg-opacity-90">
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto"
          src={NETFLIX_BACKGROUND}
          alt="background-img"
        />
      </div>
      <Header setProgress={setProgress} progress={progress} />
      <LoadingBar
        color={"#f11946"}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="absolute w-11/12 md:w-1/3 h-auto bg-black top-28 right-0 left-0 mx-auto my-auto text-white p-20 bg-opacity-80 rounded-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {signInSignUpErrorMssg && (
            <LoginErrorMssg errorMssg={signInSignUpErrorMssg} />
          )}
          {!isSignInForm && (
            <input
              className="bg-black w-full mt-8 px-4 py-2 border-current	border rounded-md"
              type="text"
              placeholder="Name"
              ref={name}
            />
          )}
          {!isSignInForm && validateObj.nameValidMssg && (
            <p className="text-[#ff0000] ">
              <ExclamationCircleIcon className="w-4 inline-block" />
              {" " + validateObj.nameValidMssg}
            </p>
          )}
          <input
            className="bg-black w-full mt-8  px-4 py-2 border-current	 border rounded-md"
            type="text"
            placeholder="Email or phone number"
            ref={email}
          />
          {validateObj.emailValidMssg && (
            <p className="text-[#ff0000]">
              <ExclamationCircleIcon className="w-4 inline-block" />
              {" " + validateObj.emailValidMssg}
            </p>
          )}
          <input
            className="bg-black w-full mt-8 px-4 py-2 border-current	border rounded-md"
            type="text"
            placeholder="Password"
            ref={password}
          />
          {validateObj.passwordValidMssg && (
            <p className="text-[#ff0000] ">
              <ExclamationCircleIcon className="w-4 inline-block" />
              {" " + validateObj.passwordValidMssg}
            </p>
          )}
          {updateProfileSignUp && (
            <p className="text-[#ff0000] ">
              <ExclamationCircleIcon className="w-4 inline-block" />
              {" " + updateProfileSignUp}
            </p>
          )}
          <button
            className="bg-red-700 w-full my-4 p-2 rounded-lg text-lg font-medium"
            onClick={handleBtnClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-400 font-light my-4">
            {isSignInForm ? "New to Netflix? " : "Already registered? "}
            <span
              className="cursor-pointer font-medium text-white"
              onClick={() => {
                setSignInSignUpErrorMssg("");
                setIsSignInForm(!isSignInForm);
              }}
            >
              {isSignInForm ? "Sign up now." : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
