import React, { useState } from "react";
import { useCart } from "../Context/CartContex.jsx";
import CartItem from "./CartItem";
import { ArrowLeft, CreditCard, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [errors, setErrors] = useState({});

  const [shipping, setShipping] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    email: "",
  });

 const isShippingValid =
  Object.values(shipping).every((val) => val.trim() !== "") &&
  Object.values(errors).every((e) => !e);

  const validateField = (key, value) => {
    switch (key) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format";
      case "phone":
        return /^\+?\d{7,15}$/.test(value) ? "" : "Invalid phone number";
      case "zip":
        return /^[\d\w\s-]{3,10}$/.test(value) ? "" : "Invalid ZIP code";
      default:
        return value.trim() === "" ? "This field is required" : "";
    }
  };

  const handleCheckout = async () => {
    setIsProcessing(true);

    if (!stripe || !elements) {
      alert("Stripe is not loaded.");
      setIsProcessing(false);
      return;
    }

    const amount = Math.round(totalPrice * 1.08 * 100);

    try {
      await fetch("http://localhost:4242/create-shipping-label", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to_name: shipping.name,
          to_street1: shipping.street,
          to_city: shipping.city,
          to_state: shipping.state,
          to_zip: shipping.zip,
          to_country: shipping.country,
          to_phone: shipping.phone,
          customer_email: shipping.email,
        }),
      });

      const res = await fetch("http://localhost:4242/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        const itemsWithSize = items.map((item) => ({
          ...item,
          size: item.size || null,
          fingerSizes: item.fingerSizes || null,
        }));

        await fetch("http://localhost:4242/save-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: itemsWithSize,
            total: totalPrice,
            shipping,
            createdAt: new Date().toISOString(),
            paymentStatus: "succeeded",
          }),
        });

        await fetch("http://localhost:4242/send-order-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: itemsWithSize,
            total: totalPrice,
            shipping,
          }),
        });

        clearCart();
        window.location.href = "/thank-you";
      }

      setIsProcessing(false);
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during checkout.");
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-sm p-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any nail designs to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Your Order ({totalItems} {totalItems === 1 ? "item" : "items"})
              </h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${((totalPrice * 0)  + 5).toFixed(2)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total</span>
                  <span>${(totalPrice + 5).toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Shipping Information
                </h3>
                {Object.keys(shipping).map((key) => (
                  <div key={key} className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {key.charAt(0).toUpperCase() +
                        key
                          .slice(1)
                          .replace("zip", "ZIP / Postal Code")
                          .replace("state", "State / Province")
                          .replace("street", "Street Address")
                          .replace("name", "Full Name")
                          .replace("phone", "Phone Number")
                          .replace("country", "Country")
                          .replace("email", "Email")}
                    </label>
                    <input
                      name={key}
                      type={key === "email" ? "email" : "text"}
                      value={shipping[key]}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setShipping((prev) => ({ ...prev, [name]: value }));
                        setErrors((prev) => ({
                          ...prev,
                          [name]: validateField(name, value),
                        }));
                      }}
                      className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                        errors[key]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-pink-500"
                      }`}
                      required
                    />
                    {errors[key] && <p className="text-sm text-red-500 mt-1">{errors[key]}</p>}

                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Details
                </label>
                <div className="border rounded-md p-2 h-12">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#32325d",
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={!isShippingValid || isProcessing}
                className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    Place Order
                  </>
                )}
              </button>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <Truck size={20} />
                  <span className="text-sm font-medium">
                    Free shipping on all orders
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  Estimated delivery: 3-5 business days
                </p>
              </div>

              <button
                onClick={clearCart}
                className="w-full mt-4 text-gray-500 hover:text-red-500 transition-colors text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
