import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Password updated successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1 className="logo">TaskSphere</h1>

        <h2>Reset Password</h2>

        <p className="subtitle">
          Create a new secure password for your account.
        </p>

        {message && <div className="success">{message}</div>}

        <form onSubmit={handleSubmit}>

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">
            Update Password
          </button>

        </form>

      </div>
    </div>
  );
}

export default ResetPassword;