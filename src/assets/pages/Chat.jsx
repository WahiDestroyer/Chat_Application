import React from "react";
import { BsEmojiSmileFill, BsPinAngleFill } from "react-icons/bs"
import { FaAt, FaBell } from "react-icons/fa"
import { FaCircleQuestion } from "react-icons/fa6"
import { HiHashtag } from "react-icons/hi"
import { IoAddCircleSharp, IoGift, IoSearchSharp } from "react-icons/io5"
import { MdGifBox, MdPeopleAlt } from "react-icons/md"

const Chat = () => {
  return (
    <div className="bg-dis-3rd w-full h-screen flex flex-col">
      <div className="border-b-2 border-[#303239] p-3.5 flex justify-between items-center">
        <h2 className="flex items-center gap-1.5 text-white font-medium text-base font-mono">
          <span className="text-[#72767D] text-lg">
            <HiHashtag />
          </span>
          general part
        </h2>
        <div className="flex justify-around gap-3.5 text-BB">
          <button>
            <FaBell />
          </button>
          <button>
            <BsPinAngleFill />
          </button>
          <button>
            <MdPeopleAlt />
          </button>
          <div className="flex items-center outline-0 relative text-[#6F737A]">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#202225] rounded pl-2"
            />
            <p className="flex items-center absolute right-2">
              <IoSearchSharp />
            </p>
          </div>
          <button>
            <FaAt />
          </button>
          <button>
            <FaCircleQuestion />
          </button>
        </div>
      </div>
      <div className="mt-auto">
        <img src="Empty.png" alt="empty" className="bg-no-repeat bg-cover" />
        <div className="flex h-fit">
          <div className="flex gap-0.5">
            <button className="flex items-center text-BB rounded-l-lg bg-[#40444B] px-1">
              <IoAddCircleSharp />
            </button>
            <input
              type="text"
              placeholder="Message #general"
              className="px-3 py-1 bg-[#40444B] placeholder:text-DD placeholder:font-mono placeholder:text-base outline-0"
            />
          </div>
          <div className="flex">
            <button className="flex items-center text-BB">
              <IoGift />
            </button>
            <button className="flex items-center text-BB">
              <MdGifBox />
            </button>
            <button className="flex items-center text-BB">
              <BsEmojiSmileFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
