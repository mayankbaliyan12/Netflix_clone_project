import React from "react";
import GoogleLogo from "../../src/utils/Images/google.png"

import fnSignUpFirstTimeWithGoogle from "../utils/fnSignUpWithGoogle"
const GoogleAuth = ({ prefix }) => {
  

  return (
    <div className="flex justify-center items-center cursor-pointer" onClick={(event)=>fnSignUpFirstTimeWithGoogle(event)}>
      <img className="w-6" src={GoogleLogo} alt="Googlelogo" />

      <div className="text-blue-600 px-1">{prefix} with Google</div>
    </div>
  );
};

export default GoogleAuth;
