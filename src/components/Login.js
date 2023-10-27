import React, { useState, useRef } from "react";
import Header from './Header';
import  checkValidation  from "../utils/validate";



const Login = () => {

    const [isLogin, setIsLogin] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const [error,setError]=useState("")

    const handleLogin = () => {
        setIsLogin(!isLogin);
    }
    const handleValidate = () => {
        console.log(email.current.value, password.current.value);
        setError(checkValidation(email.current.value, password.current.value));
    }

  return (
      <div>
          <Header />
          <div className="absolute">
              <img
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                  alt="netflix-background"
              />
          </div>
          <form
              onSubmit={(e) => e.preventDefault()}
              className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
          >
              <h1 className="font-bold text-3xl py-4">
                  {isLogin ? "Sign In" : "Sign Up"}
              </h1>
              {!isLogin && (
                  <input
                      type="text"
                      placeholder="Full Name"
                      className="p-4 my-4 w-full bg-gray-700"
                  />
              )}
              <input
                  ref={email}
                  type="text"
                  placeholder="Email Address"
                  className="p-4 my-4 w-full bg-gray-700"
              />
              <input
                  ref={password}
                  type="Password"
                  placeholder="password"
                  className="p-4 my-4 w-full bg-gray-700"
              />
              <p className="text-red-700 font-bold">{error}</p>
              <button
                  onClick={handleValidate}
                  className="p-4 my-6 w-full bg-red-700"
              >
                  {isLogin ? "Sign In" : "Sign Up"}
              </button>
              <span>{isLogin ? "New to Netflix?" : "Already registred?"}</span>
              <span onClick={handleLogin} className="pl-1 cursor-pointer">
                  {!isLogin ? "Sign in now" : "Sign up now"}
              </span>
          </form>
      </div>
  );
}

export default Login
