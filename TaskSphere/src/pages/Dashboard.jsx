import React from "react";
import {
  FaUsers,
  FaTasks,
  FaProjectDiagram,
  FaChartLine,
  FaClipboardList,
  FaBell,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar />

        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back to TaskSphere </p>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <h3>Total Employees</h3>
            <h2>120</h2>
          </div>

          <div className="stat-card">
            <FaProjectDiagram className="stat-icon" />
            <h3>Projects</h3>
            <h2>18</h2>
          </div>

          <div className="stat-card">
            <FaTasks className="stat-icon" />
            <h3>Tasks</h3>
            <h2>246</h2>
          </div>

          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <h3>Productivity</h3>
            <h2>91%</h2>
          </div>

        </div>

        <div className="dashboard-grid">

          <div className="panel">

            <h2>
              <FaClipboardList /> Recent Tasks
            </h2>

            <table>

              <thead>

                <tr>
                  <th>Task</th>
                  <th>Employee</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>Create Login Page</td>
                  <td>Robert</td>
                  <td>Completed</td>
                </tr>

                <tr>
                  <td>Build Dashboard</td>
                  <td>John</td>
                  <td>In Progress</td>
                </tr>

                <tr>
                  <td>Connect Flask API</td>
                  <td>Mary</td>
                  <td>Pending</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="panel">

            <h2>
              <FaBell /> Notifications
            </h2>

            <ul className="notifications">

              <li> 5 new tasks assigned today</li>

              <li>Project Alpha deadline tomorrow</li>

              <li>New employee registered</li>

              <li> Monthly report available</li>

              <li>Attendance updated</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;