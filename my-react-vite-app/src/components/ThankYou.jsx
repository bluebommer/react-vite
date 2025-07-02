// src/pages/ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pt-24 text-center">
      <CheckCircle size={64} className="text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank you for your order!</h1>
      <p className="text-gray-600 mb-6">Your payment was successful and your order is being processed.</p>
      <Link
        to="/"
        className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
      >
        Back to Shop
      </Link>
    </div>
  );
};

export default ThankYou;
