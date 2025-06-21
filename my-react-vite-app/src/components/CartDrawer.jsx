import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartSystem';
import CartItem from './CartItem';

const CartDrawer = () => {
  const { items, isOpen, toggleCart, clearCart, getTotalPrice } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    // Add your checkout logic here
    alert('Checkout functionality to be implemented!');
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={toggleCart}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-pink-600" />
            <h2 className="text-lg font-semibold text-gray-800">Shopping Cart</h2>
          </div>
          <button 
            onClick={toggleCart}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <ShoppingBag size={64} className="text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm mb-4">Add some beautiful nail products to get started!</p>
              <button 
                onClick={toggleCart}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer - Totals and Checkout */}
        {items.length > 0 && (
          <div className="border-t bg-white p-4 space-y-4">
            {/* Clear Cart Button */}
            <div className="flex justify-center">
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-700 underline transition-colors"
              >
                Clear entire cart
              </button>
            </div>

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                <span>Total</span>
                <span className="text-pink-600">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button 
              onClick={handleCheckout}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <button 
              onClick={toggleCart}
              className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-2 rounded-lg font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;