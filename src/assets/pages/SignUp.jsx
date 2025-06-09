import React, { useState } from "react";
import { Link } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignUp = () => {
  const [age, setAge] = useState(null);
  return (
    <div className="h-screen flex items-center justify-center relative">
      <img
        src="log.png"
        alt="login"
        className="absolute object-cover w-full h-full -z-10"
      />
      <div className="bg-[#36393F] rounded-lg px-8 py-5 z-10 flex gap-10 w-90">
        <div className="w-full">
          <div className="flex flex-col items-center text-center pb-5">
            <h2 className="text-white font-ubu text-2xl">Create an account</h2>
          </div>
          {/* =================form part=================== */}
          <form className="grid grid-cols-1 w-full">
            <label className="font-ubu leading-4 text-xs text-BB pb-2">
              Email or Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              inputMode="email"
              pattern="[a-z0-9@.]*"
              className="outline-0 bg-[#202225] rounded-xs h-8 text-BB font-ubu p-1 text-sm w-full"
            />
            <label className="font-ubu leading-4 text-xs text-BB pb-2 pt-5">
              DISPLAY NAME
            </label>
            <input
              type="text"
              className="outline-0 bg-[#202225] rounded-xs h-8 text-BB font-ubu text-sm"
            />
            <label className="font-ubu leading-4 text-xs text-BB pb-2 pt-5">
              USERNAMER<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="outline-0 bg-[#202225] rounded-xs h-8 text-BB font-ubu text-sm"
            />
            <label className="font-ubu leading-4 text-xs text-BB pb-2 pt-5">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="outline-0 bg-[#202225] rounded-xs h-8 text-BB font-ubu text-sm"
            />
            <label className="font-ubu leading-4 text-xs text-BB pb-2 pt-5">
              Confirm Password<span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="outline-0 bg-[#202225] rounded-xs h-8 text-BB font-ubu text-sm"
            />

            <label
              className="font-ubu leading-4 text-xs text-BB pb-2 pt-5"
              for="age"
            >
              Age
            </label>
            <DatePicker
              selected={age}
              onChange={(date) => setAge(date)}
              id="age"
              placeholderText="DD/MM/YYYY"
              className="w-full h-8 p-2 rounded-xs bg-[#202225] text-white font-ubu text-sm focus:outline-none"
              calendarClassName="!bg-[#202225] text-white rounded-lg shadow-lg p-4"
              dayClassName={() =>
                "text-white hover:bg-[#202225] rounded-full w-8 h-8 flex items-center justify-center"
              }
            />
            <button
              type="submit"
              className="bg-[#5865F2] font-ubu text-sm leading-6 text-white text-center py-1.5 rounded-xs mt-6"
            >
              Log In
            </button>
          </form>
          <small className="font-ubu text-[10px] leading-4 text-[#A3A6AA] flex items-center gap-0.5 pt-3">
            Already have an account?
            <Link
              to="/login"
              className="border-[#00AFF4] hover:border-b-1 text-[#00AFF4] font-ubu text-[10px] leading-4 cursor-pointer transition-all duration-300"
            >
              Log In
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
