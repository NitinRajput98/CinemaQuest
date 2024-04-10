import { useState, useRef } from "react";
import Header from "./Header";
import { valideData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validateObj, setValidateObj] = useState({
    emailValidMssg: null,
    passwordValidMssg: null,
    nameValidMssg: null,
  });
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    const validateObj = isSignInForm
      ? valideData(email.current.value, password.current.value)
      : valideData(
          email.current.value,
          password.current.value,
          true,
          name?.current?.value
        );

    setValidateObj(validateObj);
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
