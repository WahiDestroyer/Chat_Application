import React from 'react'
import { Link } from 'react-router'

const LogIn = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#202123]">
      <div
        style={{ animation: "slideInFromLeft 1s ease-out" }}
        className="max-w-md w-full bg-gradient-to-r from-black to-white rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 "
      >
        <h2
          style={{ animation: "appear 2s ease-out" }}
          className="text-center text-4xl font-extrabold text-neon-g"
        >
          Welcome
        </h2>
        <p
          style={{ animation: "appear 3s ease-out" }}
          className="text-center text-neon-g"
        >
          Sign in to your account
        </p>
        <form method="POST" action="#" className="space-y-6">
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-neon-g"
              required
              id="email"
              name="email"
              type="email"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-neon-g peer-focus:text-sm"
              htmlFor="email"
            >
              Email address
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-600 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-neon-g"
              required
              id="password"
              name="password"
              type="password"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-neon-g peer-focus:text-sm"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input
                className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                type="checkbox"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <Link to="*" className="text-sm text-gray-600 hover:underline" >
              Forgot your password?
            </Link>
          </div>
          <button
            className="w-full py-2 px-4 bg-gray-600 hover:bg-neon-g rounded-md shadow-lg text-black font-semibold transition duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-gray-300">
          Don't have an account?
          <Link to="/signup" className="text-gray-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn
