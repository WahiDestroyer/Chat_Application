
import { FaHeadphones, FaMicrophone, FaPlus } from 'react-icons/fa'
import { HiHashtag } from 'react-icons/hi'
import { ImVolumeMedium } from 'react-icons/im'
import { IoIosArrowDown, IoMdSettings } from 'react-icons/io'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { Link } from "react-router";

const Guild = () => {
  return (
    <div className="bg-dis-2nd w-68 px-2.5 flex flex-col">
      <div className="flex w-full justify-between border-b-2 border-black p-4">
        <Link to="/" className="text-white font-mono text-base font-bold">
          Guild
        </Link>
        <Link
          to="/"
          className="text-white font-mono text-base font-bold flex items-center"
        >
          <IoIosArrowDown />
        </Link>
      </div>
      <div>
        <div>
          <div className="flex justify-between mt-7">
            <h2 className="flex items-center gap-0.5 font-bold font-mono text-sm text-dark-gray pb-3">
              <span>
                <IoIosArrowDown />
              </span>
              TEXT CHANNELS
            </h2>
            <button className="text-dark-gray text-sm flex">
              <FaPlus />
            </button>
          </div>
          <div className="rounded-sm bg-light-gray flex justify-between p-1.5">
            <h2 className="flex items-center gap-1.5 text-white font-medium text-base font-mono">
              <span className="text-BB text-lg">
                <HiHashtag />
              </span>
              general
            </h2>
            <button className="flex items-center gap-1 text-BB text-base">
              <MdPersonAddAlt1 />
              <IoMdSettings />
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-7">
            <h2 className="flex items-center gap-0.5 font-bold font-mono text-sm text-dark-gray pb-3">
              <span>
                <IoIosArrowDown />
              </span>
              Voice CHANNELS
            </h2>
            <button className="text-dark-gray text-sm flex">
              <FaPlus />
            </button>
          </div>
          <div className="rounded-sm bg-light-gray flex justify-between p-1.5">
            <h2 className="flex items-center gap-1.5 text-white font-medium text-base font-mono">
              <span className="text-BB text-lg">
                <ImVolumeMedium />
              </span>
              General
            </h2>
            <button className="flex items-center gap-1 text-BB text-base">
              <MdPersonAddAlt1 />
              <IoMdSettings />
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-auto profile_part justify-between">
        <div className="flex gap-1">
          <img
            src="profile.jpg"
            alt="profile"
            className="rounded-full w-10 h-10 "
          />
          <div>
            <h3 className="font-mono font-medium text-sm text-white tracking-tighter">
              Wahid Tahosin Laam
            </h3>
            <small className="text-BB">wahidlaam</small>
          </div>
        </div>
        <div className="flex gap-2.5 items-center text-BB">
          <FaMicrophone />
          <FaHeadphones />
          <IoMdSettings />
        </div>
      </div>
    </div>
  );
}

export default Guild
