import React from 'react';
import { useCart } from '../Context/CartContex';

const AddToCartButton = ({ product, className = "", children, ...props }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Add toast notification here
    console.log(`Added ${product.name} to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 ${className}`}
      {...props}
    >
      {children || 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;