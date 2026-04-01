

// remove button for a cart icon 
const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3">

      {/* Left: icon + product name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-lg">
          {item.icon}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
          <p className="text-xs text-gray-400 capitalize">{item.period}</p>
        </div>
      </div>

      {/* Right: price + remove button */}
      <div className="flex items-center gap-4">
        <span className="font-bold text-gray-900">${item.price}</span>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-400 hover:text-red-600 text-sm font-semibold border border-red-200 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
        >
          Remove
        </button>
      </div>

    </div>
  );
};

export default CartItem;
