import { useState, useRef } from "react";
import Header from "./Header";
import { valideData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import LoginErrorMssg from "./LoginErrorMssg";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

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

  const handleBtnClick = () => {
    setSignInSignUpErrorMssg("");
    //Checking if input is valid
    const validateObj = isSignInForm
      ? valideData(email.current.value, password.current.value)
      : valideData(
          email.current.value,
          password.current.value,
          true,
          name?.current?.value
        );

    setValidateObj(validateObj);
    console.log(validateObj);
    //If input is not valid
    if (!validateObj.isInputValid) return;
    //If input is valid
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
              setUpdateProfileSignUp(error.message);
            });
          console.log("Sign Up", user);
        })
        .catch((error) => {
          const errorCode = error.code;
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
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInSignUpErrorMssg(errorMessage);
        });
    }
  };

  return (
    <div className="bg-black bg-opacity-90">
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-img"
        />
      </div>
      <Header />

      <div className="absolute w-1/3 h-auto bg-black top-28 right-0 left-0 mx-auto my-auto text-white p-20 bg-opacity-80 rounded-md">
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
            <p className="text-red-700">{"💥" + validateObj.nameValidMssg}</p>
          )}
          <input
            className="bg-black w-full mt-8  px-4 py-2 border-current	 border rounded-md"
            type="text"
            placeholder="Email or phone number"
            ref={email}
          />
          {validateObj.emailValidMssg && (
            <p className="text-red-700 ">{"💥" + validateObj.emailValidMssg}</p>
          )}
          <input
            className="bg-black w-full mt-8 px-4 py-2 border-current	border rounded-md"
            type="text"
            placeholder="Password"
            ref={password}
          />
          {validateObj.passwordValidMssg && (
            <p className="text-red-700 ">
              {"💥" + validateObj.passwordValidMssg}
            </p>
          )}
          {updateProfileSignUp && (
            <p className="text-red-700 ">{"💥" + updateProfileSignUp}</p>
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
