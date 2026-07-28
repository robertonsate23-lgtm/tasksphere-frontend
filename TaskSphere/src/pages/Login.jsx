import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setError("");
     console.log("sending:", formData);
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Invalid email or password."
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="logo">TaskSphere</h1>

        <h2>Welcome Back</h2>

        <p className="subtitle">
          Login to manage your employees and projects.
        </p>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="links">
          <Link to="/forgot-password">
            Forgot Password?
          </Link>

          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;