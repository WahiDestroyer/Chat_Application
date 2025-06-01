import React from 'react'
import { Outlet } from 'react-router'
import Home from '../../pages/Home'
import Navbar from './Navbar'
import Chat from '../../pages/Chat'

const Layout = () => {
  return (
    <>
      <Navbar />
     <Outlet/> 
    </>
  )
}

export default Layout
