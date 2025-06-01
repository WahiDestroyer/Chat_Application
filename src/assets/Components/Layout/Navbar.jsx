import React from 'react'
import { IoChatbox } from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav className="bg-dark-g h-screen pt-12 pr-12 pl-6 flex flex-col">
      <h1 className="font-inter font-bold text-3xl text-gray-200 mb-auto">
        <span className="text-neon-g">Chat</span>APP
      </h1>
      <div>
        <button className='text-white flex items-center gap-1.5 font-inter font-semibold text-lg'>
          <IoChatbox /> Chat
        </button>
        <button></button>
      </div>
    </nav>
  );
}

export default Navbar
