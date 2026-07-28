import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "If an account exists with that email, a reset link has been sent."
    );
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1 className="logo">TaskSphere</h1>

        <h2>Forgot Password</h2>

        <p className="subtitle">
          Enter your email to receive a password reset link.
        </p>

        {message && <div className="success">{message}</div>}

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Send Reset Link
          </button>

        </form>

        <div className="links">
          <Link to="/login">Back to Login</Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;