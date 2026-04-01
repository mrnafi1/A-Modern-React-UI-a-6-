import { toast } from "react-toastify";

import products from "../data/products.json";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";


// linking image 
import CartIcon from '../images/shpping-cart.png'


const MainSection = ({ cartItems, setCartItems, activeTab, setActiveTab }) => {

  // Add a product to cart
  const handleAddToCart = (product) => {
    const alreadyAdded = cartItems.find((item) => item.id === product.id);

    if (alreadyAdded) {
      toast.info(`"${product.name}" is already in your cart!`);
      return;
    }

    setCartItems([...cartItems, product]);
    toast.success(`"${product.name}" added to cart! 🎉`);
  };

  // Remove one product from cart by  id
  const handleRemove = (productId) => {
    const removedItem = cartItems.find((item) => item.id === productId);
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    toast.error(`"${removedItem.name}" removed from cart.`);
  };

  // Clear the whole cart on checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }
    setCartItems([]);
    toast.success("Checkout successful! All items cleared. ✅");
  };

  // Calculate total price of all cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 text-center mt-4 max-w-xl mx-auto text-sm md:text-base">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        {/* Toggle buttons: Products | Cart */}

        <div className="flex justify-center mt-8 mb-10">
          <div className="inline-flex items-center gap-3 p-[1px] border border-gray-200 rounded-3xl bg-white shadow-sm">

            {/* Products Btn*/}
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2.5 font-semibold text-sm transition-colors ${activeTab === "products"
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl shadow-lg shadow-purple-600/30 scale-[1.02]"
                : "bg-white text-gray-600 hover:text-purple-600 rounded-2xl"
                }`}
            >
              Products
            </button>

            {/* Cart Btn */}
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2.5 font-semibold text-sm transition-colors flex items-center gap-2 ${activeTab === "cart"
                ? "bg-gradient-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-3xl"
                : "bg-white text-gray-600 hover:text-purple-600 rounded-2xl"
                }`}
            >
              <span>🛒 Cart</span>
              {cartItems.length > 0 && (
                <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${activeTab === "cart"
                  ? "bg-white text-[#4F39F6]"
                  : "bg-purple-100 text-[#4F39F6]"
                  }`}>
                  {cartItems.length}
                </span>
              )}
            </button>

          </div>
        </div>

        {/* products view */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/*cart  view */}
        {activeTab === "cart" && (
          <div className="max-w-2xl mx-auto">

            {/* empty cart message */}
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <div className="flex justify-center mb-6">
                  <img className="w-[85px] h-[80px] opacity-75" src={CartIcon} alt="Empty Cart" />
                </div>
                <h3 className="text-xl font-bold text-gray-600">Your cart is empty</h3>
                <p className="text-gray-500 text-sm mt-2">Add some products first!</p>
                <button
                  onClick={() => setActiveTab("products")}
                  className="mt-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-3xl font-semibold text-md hover:bg-purple-700 transition-colors"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div>
                {/* list of cart items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>

                {/* Total + Checkout button */}
                <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-500 font-medium">
                      {cartItems.length} item{cartItems.length > 1 ? "s" : ""} in cart
                    </p>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Total</p>
                      <p className="text-2xl font-extrabold text-gray-900">${totalPrice}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700 transition-colors"
                  >
                    Proceed to Checkout →
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default MainSection;
