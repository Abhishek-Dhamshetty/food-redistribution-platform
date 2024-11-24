import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [role, setRole] = useState("buyer"); // Default role is buyer
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-gradient">
      {/* Container for the sign-up form */}
      <div
        className="bg-white p-4 rounded shadow-lg"
        style={{ width: "450px", maxWidth: "90%" }}
      >
        <h2 className="text-center text-primary mb-4">Sign Up</h2>

        {/* Role Selection */}
        <div className="d-flex justify-content-between mb-4">
          <button
            className={`btn ${
              role === "buyer" ? "btn-success" : "btn-outline-secondary"
            } w-50 me-2`}
            onClick={() => setRole("buyer")}
          >
            Buyer
          </button>
          <button
            className={`btn ${
              role === "hotel" ? "btn-primary" : "btn-outline-secondary"
            } w-50`}
            onClick={() => setRole("hotel")}
          >
            Hotel Owner
          </button>
        </div>

        {/* Sign-Up Form */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-3"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
            className="btn btn-primary w-100"
            onClick={() => alert("Sign-Up button clicked!")}
          >
            Sign Up
          </button>
        </div>

        {/* Link to Login */}
        <div className="text-center mt-4">
          <Link to="/login" className="text-primary fw-bold">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
