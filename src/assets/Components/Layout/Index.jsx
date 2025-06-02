import React from "react";
import { Outlet } from "react-router";
import Home from "../../pages/Home";
import Navbar from "./Navbar";
import Chat from "../../pages/Guild";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
