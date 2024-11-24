import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center vh-100"
      style={{
        backgroundColor: '#1d3557', // A visually appealing deep blue background
        color: 'white',
        padding: '20px',
      }}
    >
      {/* Animated Content */}
      <div
        className="text-center w-75 animate__animated animate__jackInTheBox"
        style={{
          marginTop: '10%',
          marginBottom: '5%',
          flex: 3, // 75% for animation content
        }}
      >
        <h1 className="display-4 fw-bold mb-4">🎉 Order Successfully Placed! 🎉</h1>
        <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
          Thank you for your order. Your food is on its way!
        </p>
        <p className="text-warning fs-5 animate__animated animate__fadeInUp animate__delay-2s">
          Estimated delivery time: <strong>15 minutes</strong>
        </p>
      </div>

      {/* Back to Home Button */}
      <div
        className="d-flex justify-content-center align-items-center flex-shrink-0 w-100 p-3"
        style={{
          flex: 1, // 25% for the button
        }}
      >
        <button
          className="btn btn-warning btn-lg animate__animated animate__heartBeat animate__infinite"
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
