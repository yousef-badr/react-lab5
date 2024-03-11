import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <Outlet></Outlet>
      </div>
    </>
  );
}
