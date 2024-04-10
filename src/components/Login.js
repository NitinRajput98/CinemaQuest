import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-img"
        />
      </div>
      <Header />

      <div className="absolute w-4/12 h-auto bg-black top-1/4 right-0 left-0 mx-auto my-auto text-white p-10 bg-opacity-80 rounded-md">
        <form>
          <h1 className="font-bold text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="bg-black w-full mt-8 px-4 py-2 border-current	border rounded-md"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            className="bg-black w-full mt-8 my-4 px-4 py-2 border-current	 border rounded-md"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="bg-black w-full my-4 px-4 py-2 border-current	border rounded-md"
            type="text"
            placeholder="Password"
          />
          <button className="bg-red-700 w-full my-4 p-2 rounded-lg text-lg font-medium">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-400 font-light">
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
