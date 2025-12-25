import { Routes, Route } from "react-router-dom";

import HomePage from "./landingPage/home/HomePage";
import AboutPage from "./landingPage/about/AboutPage";
import SignupPage from "./landingPage/signup/SignupPage";
import LoginPage from "./landingPage/signup/LoginPage";
import ProductsPage from "./landingPage/products/ProductsPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/support/SupportPage";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import WrongPage from "./landingPage/WrongPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
