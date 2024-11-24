import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-vh-100 position-relative overflow-hidden" 
         style={{ 
           background: 'linear-gradient(135deg, #4ade80 0%, #3b82f6 50%, #9333ea 100%)'
         }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100">
        <div className="container">
          <a className="navbar-brand" href="/">Food Waste Platform</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/special">Today's Special</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hotels">Hotels Food List</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Decorative Circles */}
      <div className="position-absolute top-50 start-50 translate-middle rounded-circle"
           style={{
             width: '400px',
             height: '400px',
             backgroundColor: 'rgba(59, 130, 246, 0.5)',
             filter: 'blur(50px)',
             zIndex: '0'
           }}>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle rounded-circle"
           style={{
             width: '300px',
             height: '300px',
             backgroundColor: 'rgba(147, 51, 234, 0.5)',
             filter: 'blur(50px)',
             zIndex: '0'
           }}>
      </div>

      {/* Main Content */}
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center text-white position-relative" style={{ zIndex: '1' }}>
          <h1 className="display-4 fw-bold mb-4" 
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            Zero Food Wastage
          </h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Wasted food takes a bite out of your budget. Feed the hungry and those in need, adding one good deed to your day!
          </p>
          
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/donor" className="btn btn-success btn-lg px-4 py-2 shadow" 
                  style={{ transition: 'transform 0.3s' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Get Started as Donor
            </Link>
            <Link to="/recipient" className="btn btn-primary btn-lg px-4 py-2 shadow"
                  style={{ transition: 'transform 0.3s' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Get Started as Recipient
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;