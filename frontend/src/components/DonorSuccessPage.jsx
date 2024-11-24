import React from "react";
import Lottie from "lottie-react";
import successAnimation from "../animations/success.json";

const DonorSuccessPage = () => {
  return (
    <div className="container py-5 text-center">
      <h2>Donation Accepted Successfully!</h2>
      <Lottie
        animationData={successAnimation}
        loop={false}
        style={{ height: "400px", width: "400px", margin:"auto",display:"block"}}
      />
      <button className="btn btn-primary mt-4">Go to Dashboard</button>
    </div>
  );
};

export default DonorSuccessPage;
