import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Reports from "../pages/Reports";
import Attendance from "../pages/Attendance";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected (temporarily without ProtectedRoute) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;