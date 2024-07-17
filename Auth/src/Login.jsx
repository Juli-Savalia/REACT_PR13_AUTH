import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth, googleauthprovider } from "./firebaseconfig";

const Login = () => {
  const handleLogin = async () => {
    // console.log(users);
    try {
      const result = await signInWithPopup(auth, googleauthprovider);
      // const user = result.user;
      // console.log("Signed in with Google:", user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="p-5 text-center position-relative"
      style={{ backgroundColor: "skyblue", zIndex: "1" }}
    >
      <img
        src="public/atom.png"
        alt="react"
        className="position-absolute"
        style={{ zIndex: "-1", opacity: "0.1" }}
      />
      <div className="p-5 col-9 mx-auto">
        <h1
          className="text-center fw-bolder pb-5 mb-5"
          style={{ fontSize: "70px" }}
        >
          Sign In with Google in React
        </h1>
        <div className="py-5 mt-5">
          <div className="d-flex align-items-center justify-content-center">
            <div className="bg-white py-2 px-2 border border-1 border-info">
              <img src="public/google.png" alt="google" height={30} />
            </div>
            <button
              className="border-0 px-3 py-2"
              style={{ backgroundColor: "blue" }}
              onClick={() => handleLogin()}
            >
              <Link to={"/"} className="text-decoration-none text-white fs-5">
                Sign In With Google
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
