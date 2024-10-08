import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constants";
import GoogleAuth from "../utils/GoogleAuth";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import BusyIndicator from "../utils/BusyIndicator";

const Login = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isSignInForm, setIsSignInForm] = useState(false); // by default the form will be signin and not signup
  // when isSignInForm is false, then it is sigUp form
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [busyIndicator, setBusyIndicator] = useState(false);

  const handleButtonClick = () => {
    const message = checkValidData(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      setBusyIndicator(true)
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://cdn-icons-png.flaticon.com/512/2566/2566166.png",
          })
          setBusyIndicator(false)
            .then(() => {})
            .catch((error) => {
              setErrorMessage(error.message);
              
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          setBusyIndicator(false)
        });
    } else {
      // Sign In Logic
      setBusyIndicator(true)
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setBusyIndicator(false)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          setBusyIndicator(false)
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
    {
      busyIndicator && <BusyIndicator/>
    }
    <div>
      <Header />
      <div className="fixed">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <img src={BG_URL} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl pb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <div className="flex justify-between text-gray-500">
          <h4 className="text-sm text-red-500">
            <Checkbox
              {...label}
              defaultChecked
              sx={{
                color: green[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
            Remember Me
          </h4>
          <h4 className="text-sm">Need Help?</h4>
        </div>
        <button
          className="p-3 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <GoogleAuth prefix={isSignInForm ? "Log in" : "Sign up"} />
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? SIGN UP"
            : "Already registered? SIGN IN"}
        </p>
        <p className="text-gray-500 font-thin">
          Sign in is protected by Google reCAPTCHA to ensure you are not a bot.
          <span class="text-blue-500 font-bold"> Learn More !</span>
        </p>
      </form>
    </div>
    </>
  );
};
export default Login;
