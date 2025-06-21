
import './App.css';
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Checkout from './components/Checkout';
import NavBar from './components/NavBar';
import { CartProvider } from './Context/CartContex';
// import CollectionsPage from './components/CollectionsPage';

function App() {
  return (
    <CartProvider>
       <>
    
     <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} /> 
      <Route path="/checkout" element={<Checkout />} />
     
    </Routes>
    </>
    </CartProvider>
   
  
  
  );
}

export default App;
