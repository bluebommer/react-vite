import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Product from './components/Product';
import Checkout from './components/Checkout';
import NavBar from './components/NavBar';
import { CartProvider } from './Context/CartContex';
import ThankYou from './components/ThankYou';

const stripePromise = loadStripe('pk_test_51RdECqR7jEddfEfnuDdi8u4Do8LZ5SKFL7CamyJWflaZZhDF1ILYiXNOaPM2TJz9IkFP3cMq0G0bPjH0uheMYHfZ002xGbrSux'); // Replace this with your Stripe key

function App() {
  return (
    <CartProvider>
      <Elements stripe={stripePromise}>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </>
      </Elements>
    </CartProvider>
  );
}

export default App;
