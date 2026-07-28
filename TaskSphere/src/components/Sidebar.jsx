import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaProjectDiagram,
  FaTasks,
  FaCalendarCheck,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      // Remove saved login information
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.clear();

      // Redirect to login page
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="sidebar">

      <div className="logo">
        <h2>TaskSphere</h2>
      </div>

      <nav>

        <Link to="/dashboard">
          <FaHome /> Dashboard
        </Link>

        <Link to="/employees">
          <FaUsers /> Employees
        </Link>

        <Link to="/projects">
          <FaProjectDiagram /> Projects
        </Link>

        <Link to="/tasks">
          <FaTasks /> Tasks
        </Link>

        <Link to="/attendance">
          <FaCalendarCheck /> Attendance
        </Link>

        <Link to="/reports">
          <FaChartBar /> Reports
        </Link>

        <Link to="/settings">
          <FaCog /> Settings
        </Link>

      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>

    </div>
  );
}

export default Sidebar;