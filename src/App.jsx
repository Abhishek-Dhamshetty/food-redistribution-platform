import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import DonorPage from './components/DonorPage';
import RecipientPage from './components/RecipientPage';
import HotelsPage from './components/HotelsPage';
import TodaysSpecialsPage from './components/TodaysSpecialsPage';
import PaymentPage from './components/PaymentPage'
import SuccessPage from './components/SuccessPage';
import DonorPaymentPage from "./components/DonorPaymentPage";
import DonorSuccessPage from "./components/DonorSuccessPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/recipient" element={<RecipientPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/special" element={<TodaysSpecialsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/donor-payment" element={<DonorPaymentPage />} />
        <Route path="/donor-success" element={<DonorSuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
