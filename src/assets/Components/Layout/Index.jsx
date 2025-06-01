import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './navbar'
import Home from '../../pages/Home'

const Layout = () => {
  return (
    <>
      <Navbar/>
     <Outlet/> 
    </>
  )
}

export default Layout
