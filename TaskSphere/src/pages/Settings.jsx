import React, { useState } from "react";
import {
  FaCog,
  FaUser,
  FaLock,
  FaBell,
  FaPalette,
  FaGlobe,
  FaSave,
  FaUndo,
  FaTrash,
} from "react-icons/fa";

import "../styles/Settings.css";

const Settings = () => {

  const [settings, setSettings] = useState({
    fullName: "Robert Onsate",
    username: "robertonsate",
    email: "robert@example.com",
    phone: "+254712345678",
    department: "Information Technology",
    jobTitle: "Software Developer",

    currentPassword: "",
    newPassword: "",
    confirmPassword: "",

    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,

    darkMode: false,
    language: "English",
    timezone: "Africa/Nairobi",

    autoBackup: true,
    sessionTimeout: "30 Minutes",
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });

  };

  const saveSettings = (e) => {

    e.preventDefault();

    alert("Settings saved successfully.");

  };

  const resetSettings = () => {

    if (window.confirm("Reset all settings?")) {

      window.location.reload();

    }

  };

  const deleteAccount = () => {

    if (
      window.confirm(
        "Are you sure you want to delete your account?"
      )
    ) {

      alert("Account deleted.");

    }

  };
  return (
    <div className="settings">

      <div className="settings-header">

        <h1>
          <FaCog />
          Settings
        </h1>

      </div>

      <form onSubmit={saveSettings}>


        <div className="settings-card">

          <h2>
            <FaUser />
            Profile Information
          </h2>

          <div className="settings-grid">

            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={settings.fullName}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Username</label>

              <input
                type="text"
                name="username"
                value={settings.username}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Department</label>

              <input
                type="text"
                name="department"
                value={settings.department}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Job Title</label>

              <input
                type="text"
                name="jobTitle"
                value={settings.jobTitle}
                onChange={handleChange}
              />

            </div>

          </div>

        </div>

        <div className="settings-card">

          <h2>
            <FaLock />
            Security
          </h2>

          <div className="settings-grid">

            <div className="form-group">

              <label>Current Password</label>

              <input
                type="password"
                name="currentPassword"
                value={settings.currentPassword}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>New Password</label>

              <input
                type="password"
                name="newPassword"
                value={settings.newPassword}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={settings.confirmPassword}
                onChange={handleChange}
              />

            </div>

          </div>

        </div>

        <div className="settings-card">

          <h2>
            <FaBell />
            Notifications
          </h2>

          <div className="toggle-group">

            <label>

              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
              />

              Email Notifications

            </label>

            <label>

              <input
                type="checkbox"
                name="smsNotifications"
                checked={settings.smsNotifications}
                onChange={handleChange}
              />

              SMS Notifications

            </label>

            <label>

              <input
                type="checkbox"
                name="pushNotifications"
                checked={settings.pushNotifications}
                onChange={handleChange}
              />

              Push Notifications

            </label>

          </div>

        </div>

        <div className="settings-card">

          <h2>
            <FaPalette />
            Appearance
          </h2>

          <div className="toggle-group">

            <label>

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />

              Enable Dark Mode

            </label>

          </div>

        </div>

        <div className="settings-card">

          <h2>
            <FaGlobe />
            System Preferences
          </h2>

          <div className="settings-grid">

            <div className="form-group">

              <label>Language</label>

              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
              >

                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
                <option>Swahili</option>

              </select>

            </div>

            <div className="form-group">

              <label>Time Zone</label>

              <select
                name="timezone"
                value={settings.timezone}
                onChange={handleChange}
              >

                <option>Africa/Nairobi</option>
                <option>UTC</option>
                <option>Europe/London</option>
                <option>America/New_York</option>

              </select>

            </div>

            <div className="form-group">

              <label>Session Timeout</label>

              <select
                name="sessionTimeout"
                value={settings.sessionTimeout}
                onChange={handleChange}
              >

                <option>15 Minutes</option>
                <option>30 Minutes</option>
                <option>1 Hour</option>
                <option>2 Hours</option>

              </select>

            </div>

            <div className="toggle-group">

              <label>

                <input
                  type="checkbox"
                  name="autoBackup"
                  checked={settings.autoBackup}
                  onChange={handleChange}
                />

                Enable Automatic Backup

              </label>

            </div>

          </div>

        </div>

        <div className="settings-actions">

          <button
            type="submit"
            className="save-btn"
          >
            <FaSave />
            Save Changes
          </button>

          <button
            type="button"
            className="reset-btn"
            onClick={resetSettings}
          >
            <FaUndo />
            Reset Settings
          </button>

          <button
            type="button"
            className="delete-btn"
            onClick={deleteAccount}
          >
            <FaTrash />
            Delete Account
          </button>

        </div>

      </form>

    </div>
  );
};

export default Settings;