import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <img
        src="log.png"
        alt="login"
        className="absolute object-cover w-full h-full -z-10"
      />
      <div className="bg-[#36393F] rounded-lg p-8 z-10 flex gap-10">
        <div>
          <div className="flex flex-col items-center text-center pb-5">
            <h2 className="text-white font-ubu text-2xl">Welcome back!</h2>
            <p className="font-ubu text-base text-BB leading-5 pt-2">
              We're so excited to see you again!
            </p>
          </div>
          {/* =================form part=================== */}
          <form className="grid grid-cols-1">
            <label className="font-ubu leading-4 text-xs text-BB pb-2">
              Email or Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              inputMode="email"
              pattern="[a-z0-9@.]*"
              className="outline-0 bg-[#202225] rounded-xs h-8 text-BB font-ubu p-1 text-sm"
            />
            <label className="font-ubu leading-4 text-xs text-BB pb-2 pt-5">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="outline-0 bg-[#202225] rounded-xs h-8 text-BB font-ubu text-sm"
            />
            <Link to="/errorpage" className="pb-5.5 ">
              <span className="border-[#00AFF4] hover:border-b-1 text-[#00AFF4] font-ubu text-[10px] leading-4 cursor-pointer transition-all duration-300">
                Forgot your password?
              </span>
            </Link>
            <button
              type="submit"
              className="bg-[#5865F2] font-ubu text-sm leading-6 text-white text-center py-1.5 rounded-xs"
            >
              Log In
            </button>
          </form>
          <small className="font-ubu text-[10px] leading-4 text-[#A3A6AA] flex items-center gap-0.5 pt-3">
            Need an account?
            <Link
              to="/signup"
              className="border-[#00AFF4] hover:border-b-1 text-[#00AFF4] font-ubu text-[10px] leading-4 cursor-pointer transition-all duration-300"
            >
              Register
            </Link>
          </small>
        </div>
        <div className="flex items-center flex-col text-center">
          <img src="QR.png" alt="QR Code" className="bg-cover bg-no-repeat border-white border-4 rounded-xs mt-3.5" />
          <p className="font-ubu text-2xl leading-7 max-w-[180px] pt-7 pb-2 text-white">
            Log in with QR Code
          </p>
          <p className="font-ubu text-base leading-5 text-BB max-w-64">Scan this with the Discord mobile app to log in instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
