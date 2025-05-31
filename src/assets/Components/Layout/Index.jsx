import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './navbar'

const Layout = () => {
  return (
    <>
      <h3>this is index</h3>
     <Outlet/> 
    </>
  )
}

export default Layout
