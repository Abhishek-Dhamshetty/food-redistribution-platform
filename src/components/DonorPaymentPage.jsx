import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DonorPaymentPage = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { donations } = state || { donations: [] };

  const handlePayment = () => {
    if (!accountNumber || !ifscCode) {
      alert("Please fill all payment details.");
      return;
    }
    navigate("/donor-success");
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Donor Payment Details</h1>
      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="IFSC Code"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
          />
        </div>
        <button className="btn btn-success w-100" onClick={handlePayment}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default DonorPaymentPage;
