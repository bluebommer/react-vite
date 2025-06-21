import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartSystem';

const CartIcon = ({ className = "" }) => {
  const { toggleCart, getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <button
      onClick={toggleCart}
      className={`relative p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 ${className}`}
    >
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center min-w-[20px] animate-pulse">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;