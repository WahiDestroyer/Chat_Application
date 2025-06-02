import React from "react";
import { AiOutlineSearch } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import { GoDotFill, GoPlus } from "react-icons/go"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="bg-dis-1st p-3 flex flex-col items-center w-fit">
      <div className="dots flex justify-around pb-2.5">
        <p className="text-[#FC615D] text-2xl font-extrabold">
          <GoDotFill />
        </p>
        <p className="text-[#FDBC40] text-2xl">
          <GoDotFill />
        </p>
        <p className="text-[#34C749] text-2xl">
          <GoDotFill />
        </p>
      </div>
      <Link
        to="/chat"
        className="rounded-full bg-[#36393F] w-12 h-12 text-DD text-3xl flex items-center justify-center relative after:content-[''] after:absolute after:-bottom-3 after:left-2 after:w-8 after:h-0.5 after:bg-[#060607] mb-4.5"
      >
        <BsDiscord />
      </Link>
      <div className="grid gap-2">
        <Link
          to="/chat"
          className="rounded-full bg-[#36393F] w-12 h-12 text-dis-g text-3xl flex items-center justify-center"
        >
          <GoPlus />
        </Link>
        <Link
          to="/chat"
          className="rounded-full bg-[#36393F] w-12 h-12 text-dis-g text-3xl flex items-center justify-center"
        >
          <AiOutlineSearch />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
