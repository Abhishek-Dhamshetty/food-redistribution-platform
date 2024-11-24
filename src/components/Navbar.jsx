// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { IoPersonAdd } from 'react-icons/io5';

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg position-fixed top-0 z-50 w-100">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaUtensils className="me-2" size={28} color="white" />
          Food Waste Platform
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <MdLogin className="me-1" size={20} /> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                <IoPersonAdd className="me-1" size={20} /> Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/special">
                <IoPersonAdd className="me-1" size={20} /> Today's Special
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotels">
                Hotels Food List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
  );
};

export default Navbar;

