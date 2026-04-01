

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [activeTab, setActiveTab] = useState("products");

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2500} theme="light" />

      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setActiveTab("cart")}
      />

      <Banner />
      <Stats />

      <MainSection
        cartItems={cartItems}
        setCartItems={setCartItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Steps />
      <Pricing />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;