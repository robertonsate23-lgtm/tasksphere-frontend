import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar />

      <div className="content-wrapper">
        <Navbar />

        <main className="main-content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;