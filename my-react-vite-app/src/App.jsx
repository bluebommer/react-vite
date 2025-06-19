
import './App.css';
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Checkout from './components/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
