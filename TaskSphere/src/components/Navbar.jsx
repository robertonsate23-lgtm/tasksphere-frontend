import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "5 new tasks assigned today",
      time: "Just now",
    },
    {
      id: 2,
      title: "Project Alpha deadline tomorrow",
      time: "30 minutes ago",
    },
    {
      id: 3,
      title: "Attendance submitted successfully",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="navbar-top">

      <div className="search-box">
        <FaSearch />

        <input
          type="text"
          placeholder="Search employees, tasks or projects..."
        />
      </div>

      <div className="navbar-right">

        <div className="notification">

          <button
            className="notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FaBell />
            <span className="badge">{notifications.length}</span>
          </button>

          {showNotifications && (
            <div className="notification-dropdown">

              <h3>Notifications</h3>

              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="notification-item"
                >
                  <strong>{item.title}</strong>
                  <p>{item.time}</p>
                </div>
              ))}

            </div>
          )}

        </div>

        <div className="user-profile">

          <FaUserCircle className="user-icon" />

          <div className="user-details">
            <h4>Robert Onsate</h4>
            <p>Administrator</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;