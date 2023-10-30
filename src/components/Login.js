import React, { useState, useRef } from "react";
import Header from './Header';
import checkValidation from "../utils/validate";
import { auth } from '../utils/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { LOGIN_BACKGROUND, USER_PROFILE } from "../utils/constants";



const Login = () => {

    const [isLogin, setIsLogin] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        setIsLogin(!isLogin);
    }
    const handleValidate = () => {
        console.log(email.current.value, password.current.value);
        const message = checkValidation(email.current.value, password.current.value);
        setError(message);

        if (message !== null) return;

        if (!isLogin) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL:USER_PROFILE
                            
                    })
                        .then(() => {

                            const { uid, displayName, email, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    displayName: displayName,
                                    email: email,
                                    photoURL: photoURL,
                                })
                            );
                           
                        })
                        .catch((error) => {
                            setError(error);
                        });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + " " + errorMessage);
                });
           
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + " " + errorMessage);
                });
             

        }
    }

  return (
      <div>
          <Header />
          <div className="absolute">
              <img
                  className="h-screen sm:h-auto md:object-cover object-cover"
                  src={LOGIN_BACKGROUND}
                  alt="netflix-background"
              />
          </div>
          <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
          >
              <h1 className="font-bold text-3xl py-4">
                  {isLogin ? "Sign In" : "Sign Up"}
              </h1>
              {!isLogin && (
                  <input
                      ref={name}
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
