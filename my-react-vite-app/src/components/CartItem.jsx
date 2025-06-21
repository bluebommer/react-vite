import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../Context/CartContex';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      {/* Product Image */}
      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
            <span className="text-pink-600 text-xs font-semibold">
              {item.name.substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-gray-800 truncate">{item.name}</h4>
        <p className="text-pink-600 font-semibold text-sm">${item.price.toFixed(2)}</p>
        {item.variant && (
          <p className="text-xs text-gray-500">{item.variant}</p>
        )}
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 hover:bg-white rounded transition-colors"
          disabled={item.quantity <= 1}
        >
          <Minus size={14} className={item.quantity <= 1 ? 'text-gray-400' : 'text-gray-600'} />
        </button>
        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 hover:bg-white rounded transition-colors"
        >
          <Plus size={14} className="text-gray-600" />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        title="Remove item"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default CartItem;