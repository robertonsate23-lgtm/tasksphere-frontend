import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landing-page">

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">TaskSphere</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <h1>Manage Tasks. Improve Productivity.</h1>

          <p>
            TaskSphere helps organizations assign tasks, monitor employee
            performance, collaborate efficiently, and generate reports from one
            centralized platform.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>

            <Link to="/login" className="btn-secondary">
              Login
            </Link>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="features">

        <h2>Why Choose TaskSphere?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Task Management</h3>
            <p>
              Create, assign, prioritize and monitor employee tasks with ease.
            </p>
          </div>

          <div className="feature-card">
            <h3>Employee Management</h3>
            <p>
              Keep employee records organized and track individual performance.
            </p>
          </div>

          <div className="feature-card">
            <h3>Project Tracking</h3>
            <p>
              Organize projects, assign teams and monitor project progress in
              real time.
            </p>
          </div>

          <div className="feature-card">
            <h3>Reports & Analytics</h3>
            <p>
              Generate detailed reports with insights into productivity and
              project completion.
            </p>
          </div>

          <div className="feature-card">
            <h3>Attendance</h3>
            <p>
              Track employee attendance, working hours and leave requests
              efficiently.
            </p>
          </div>

          <div className="feature-card">
            <h3>Notifications</h3>
            <p>
              Receive instant alerts about deadlines, new assignments and
              project updates.
            </p>
          </div>

        </div>

      </section>

      {/* Call to Action */}
      <section
        style={{
          padding: "80px 20px",
          background: "#2563eb",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Ready to boost your team's productivity?
        </h2>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "40px",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          Join TaskSphere today and simplify task management, employee
          collaboration and project tracking.
        </p>

        <Link to="/register" className="btn-primary">
          Create Free Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 TaskSphere. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Landing;