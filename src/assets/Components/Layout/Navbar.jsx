import React from "react";
import { CiSettings } from "react-icons/ci"
import { IoChatbox, IoServer } from "react-icons/io5";
import { MdGroup } from "react-icons/md";
import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="bg-dark-g h-screen pt-12 pr-9 pl-6 w-fit flex flex-col shadow-r">
      <h1 className="font-inter font-bold text-3xl text-gray-200">
        <span className="text-neon-g ">Chat</span>APP
      </h1>
      <div className="pt-24 gap-4 grid">
        <Link
          to="/"
          className="text-white flex items-center gap-1.5 font-inter font-semibold text-lg pl-5 py-3 bg-black rounded-2xl max-w-30"
        >
          <IoChatbox /> Chat
        </Link>
        <Link
          to="/"
          className="text-white flex items-center gap-1.5 font-inter font-semibold text-lg pl-5 py-3 bg-black rounded-2xl max-w-30"
        >
          <IoServer /> Server
        </Link>
      </div>
      <div className="mt-auto flex gap-3 mb-5">
        <div className="h-10 w-10 rounded-full overflow-hidden object-cover">
          <img src="profile.jpg" alt="profile" />
        </div>
        <div>
          <h2 className="text-white font-semibold">Wahid Tahosin Laam</h2>
          <small className="flex text-gray-400 items-center gap-2">
            Edit Profile <CiSettings />
          </small>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
