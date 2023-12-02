import React from "react";
import { Link, } from "react-router-dom";
export const Signup = () => {
 
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="//"
      />
      <div className="bg-black/70 fixed top-0 left-0 w-full h-screen text-center"></div>
      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg p-6">
          <div className="max-w-[320px] mx-auto">
            <h1 className="text-3xl font-sans-bold text-white">Sign Up</h1>
            <form className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-700 rounded text-white"
                type="email"
                placeholder="Email"
                autoComplete="email"               
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded text-white"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
               
               
              />
              <button className="bg-red-600 py-3 my-6 rounded font-sans-bold text-white">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-gray-600">
                <p>
                  <input
                    type="checkbox"
                    className="mr-2"
                  
                   
                  />
                  Remember me
                </p>
                <p className="cursor-pointer">Need Help?.</p>
              </div>
              <p className="my-4">
                <span className="text-gray-600 mr-2">
                  Already subscribed to NetFlix?.
                </span>

                <Link to="/login">Sign In</Link>
              </p>
              <Link to="/"> go to Home</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
