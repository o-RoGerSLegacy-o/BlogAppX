import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Post from "./Post";

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
