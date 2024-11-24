import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-gradient w-100">
      {/* Container for the login form */}
      <div
        className="bg-white p-4 rounded shadow-lg"
        style={{
          width: "450px",
          maxWidth: "90%",
          margin: "0 auto", // This will center the container horizontally
        }}
      >
        <h2 className="text-center text-primary mb-4">Login</h2>

        {/* Login Form */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={() => alert("Login button clicked!")}
          >
            Login
          </button>
        </div>

        {/* Social Login Buttons */}
        <div className="mb-3">
          <button className="btn btn-danger d-flex align-items-center justify-content-center w-100 mb-2">
            <FaGoogle className="me-2" /> Login with Google
          </button>
          <button className="btn btn-primary d-flex align-items-center justify-content-center w-100 mb-2">
            <FaFacebook className="me-2" /> Login with Facebook
          </button>
          <button
            className="btn btn-warning text-white d-flex align-items-center justify-content-center w-100 mb-2"
            style={{
              background: "linear-gradient(90deg, #FF416C, #FF4B2B)",
              border: "none",
            }}
          >
            <FaInstagram className="me-2" /> Login with Instagram
          </button>
          <button className="btn btn-info text-white d-flex align-items-center justify-content-center w-100">
            <FaTwitter className="me-2" /> Login with Twitter
          </button>
        </div>

        {/* Link to Sign Up */}
        <div className="text-center">
          <Link to="/signup" className="text-primary fw-bold">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
