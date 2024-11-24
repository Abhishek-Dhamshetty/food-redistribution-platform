import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DonorPage = () => {
  const [donations, setDonations] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiryDate, setExpiryDate] = useState("");

  const navigate = useNavigate();

  const handleAddDonation = () => {
    const newDonation = {
      id: Date.now(),
      foodName,
      quantity: parseInt(quantity, 10),
      expiryDate,
    };
    setDonations([...donations, newDonation]);
    setFoodName("");
    setQuantity(1);
    setExpiryDate("");
  };

  const handleRemoveDonation = (id) => {
    setDonations(donations.filter((donation) => donation.id !== id));
  };

  const handleQuantityChange = (id, change) => {
    setDonations((prev) =>
      prev.map((donation) =>
        donation.id === id
          ? { ...donation, quantity: Math.max(1, donation.quantity + change) }
          : donation
      )
    );
  };

  const handleSubmitDonations = async () => {
    try {
      await axios.post("http://localhost:5000/api/donations", donations);
      alert("Donations submitted!");
      navigate("/donor-payment", { state: { donations } });
    } catch (error) {
      console.error("Error submitting donations:", error);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Add Your Food for Donation</h1>
      <div className="card p-4 shadow-sm mb-5">
        <div className="row mb-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Food Name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="datetime-local"
              className="form-control"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-success w-100"
              onClick={handleAddDonation}
              disabled={!foodName || !quantity || !expiryDate}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center">Your Donations</h2>
      {donations.length > 0 ? (
        <div className="row">
          {donations.map((donation) => (
            <div key={donation.id} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{donation.foodName}</h5>
                    <p>
                      Quantity: <strong>{donation.quantity}</strong>
                    </p>
                    <p className="text-muted">Expires on: {donation.expiryDate}</p>
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => handleQuantityChange(donation.id, -1)}
                      disabled={donation.quantity <= 1}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-success btn-sm mx-1"
                      onClick={() => handleQuantityChange(donation.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm mx-1"
                      onClick={() => handleRemoveDonation(donation.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No donations added yet.</p>
      )}

      {donations.length > 0 && (
        <div className="text-center mt-4">
          <button className="btn btn-primary btn-lg" onClick={handleSubmitDonations}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default DonorPage;
