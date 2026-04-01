import { useState } from "react";

import NavCartIcon from '../images/shpping-cart.png';


const Navbar = ({ cartCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // This function runs when cart is clicked
  const handleCartClick = () => {
    onCartClick();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold text-3xl">DigiTools</h1>

        {/* Desktop nav links - hide on mobile */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-gray-700 hover:text-purple-600 text-md font-semibold">Products</a>
          <a href="#features" className="text-gray-700 hover:text-purple-600 text-md font-semibold">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-purple-600 text-md font-semibold">Pricing</a>
          <a href="#testimonials" className="text-gray-700 hover:text-purple-600 text-md font-semibold">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-purple-600 text-md font-semibold">FAQ</a>
        </div>

        {/* Right side: cart icon + buttons */}
        <div className="hidden md:flex items-center gap-4">

          {/* Cart icon — clicking it opens the cart tab */}
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <img className="w-[24px] h-[22px] opacity-75" src={NavCartIcon} alt="" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-purple-600">Log In</a>
          <a href="#" className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-semibold px-4 py-2 rounded-3xl hover:bg-purple-700">
            Get Started
          </a>
        </div>

        {/* Mobile: show cart icon + hamburger */}
        <div className="flex md:hidden items-center gap-3">

          {/* Mobile cart icon */}
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <img className="w-6 h-6" src={NavCartIcon} alt="" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 text-2xl font-bold">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2">
          <a href="#products" className="block py-2 text-sm text-gray-700 hover:text-purple-600 font-semibold">Products</a>
          <a href="#features" className="block py-2 text-sm text-gray-700 hover:text-purple-600 font-semibold">Features</a>
          <a href="#pricing" className="block py-2 text-sm text-gray-700 hover:text-purple-600 font-semibold">Pricing</a>
          <a href="#testimonials" className="block py-2 text-sm text-gray-700 hover:text-purple-600 font-semibold">Testimonials</a>
          <a href="#faq" className="block py-2 text-sm text-gray-700 hover:text-purple-600 font-semibold">FAQ</a>
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-sm font-semibold text-gray-700 ">Log In</a>
            <a href="#" className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-semibold px-4 py-2 rounded-lg">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
