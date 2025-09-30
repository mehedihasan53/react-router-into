import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center gap-8 items-center p-4">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
