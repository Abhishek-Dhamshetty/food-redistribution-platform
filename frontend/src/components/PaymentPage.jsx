import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaMoneyBillAlt, FaCreditCard, FaGlobe } from 'react-icons/fa';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedFood } = location.state || {};

  const totalAmount = selectedFood ? selectedFood.reduce((total, food) => total + food.price, 150) : 150;

  const handlePayment = () => {
    navigate('/success'); // Navigate to the success page
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-5" style={{ width: '100%', maxWidth: '700px', backgroundColor: '#fefefe' }}>
        <h1 className="text-center text-primary mb-4">Payment Page</h1>

        {/* Bill Section */}
        <div className="card mb-4 border-success">
          <div className="card-header bg-success text-white text-center">Your Bill</div>
          <div className="card-body">
            {selectedFood?.map((food) => (
              <div key={food.id} className="d-flex justify-content-between border-bottom pb-2 mb-2">
                <span>{food.name}</span>
                <span>${food.price}</span>
              </div>
            ))}
            <div className="d-flex justify-content-between font-weight-bold">
              <span>Total</span>
              <span>${totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="list-group mb-4">
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
            <FaMoneyBillAlt className="me-3 text-success" size={20} />
            Pay at Delivery
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
            <FaGlobe className="me-3 text-info" size={20} />
            Pay Online
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
            <FaCreditCard className="me-3 text-warning" size={20} />
            Pay by Card
          </a>
        </div>

        {/* Complete Payment Button */}
        <div className="text-center">
          <button className="btn btn-success btn-lg w-100" onClick={handlePayment}>
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
