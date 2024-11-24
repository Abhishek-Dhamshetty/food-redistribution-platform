import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HotelsPage = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const hotels = [
    { id: 1, name: "Mehfil", description: "Located in the heart of the city with the best Italian cuisine." },
    { id: 2, name: "Pista House", description: "Famous for its American fast food and cozy atmosphere." },
    { id: 3, name: "Paradise", description: "Experience authentic Japanese dishes in a traditional setting." },
  ];

  const foodItems = {
    1: [
      { id: 1, name: "Dosa", price: 10,image:"image" },
      { id: 2, name: "Dosa", price: 10,image:"image" },
      { id: 3, name: "Dosa", price: 10,image:"image" },
      { id: 4, name: "Dosa", price: 10,image:"image" },
      { id: 5, name: "Dosa", price: 10,image:"image" },

    ],
    
  };

  const handleAddToCart = (foodId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [foodId]: (prevCart[foodId] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (foodId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[foodId] > 1) {
        updatedCart[foodId]--;
      } else {
        delete updatedCart[foodId];
      }
      return updatedCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="container py-5">
      {!selectedHotel ? (
        <>
          <h1 className="display-4 text-center mb-4">Hotel Food List</h1>
          <div className="row">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="col-md-4 mb-4"
              >
                <div
                  className="card p-3 shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedHotel(hotel.id)}
                >
                  <h5 className="card-title text-center">{hotel.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2 className="mb-4">
            Food Items from {hotels.find((h) => h.id === selectedHotel).name}
          </h2>
          <div className="row">
            {foodItems[selectedHotel].map((food) => (
              <div key={food.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src={food.image}
                    className="card-img-top"
                    alt={food.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{food.name}</h5>
                    <p className="card-text text-muted">${food.price}</p>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-success btn-sm mx-1"
                        onClick={() => handleAddToCart(food.id)}
                      >
                        +
                      </button>
                      <span className="mx-2">{cart[food.id] || 0}</span>
                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => handleRemoveFromCart(food.id)}
                        disabled={!cart[food.id]}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-light border rounded">
            <h4>About {hotels.find((h) => h.id === selectedHotel).name}</h4>
            <p className="mb-0">
              {hotels.find((h) => h.id === selectedHotel).description}
            </p>
          </div>
          <div className="text-center mt-5">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/payment", { state: { cart } })}
              disabled={totalItems === 0}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelsPage;
