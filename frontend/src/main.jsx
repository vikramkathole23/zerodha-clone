import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./landing_page/About/AboutPage";
import SignUp from "./landing_page/signup/signup";
import HomePage from "./landing_page/Home/homePage";
import PricingPage from "./landing_page/pricing/pricingPage";
import Product from "./landing_page/product/productPage";
import Support from "./landing_page/support/supportPage";
import Navbar from "./Navbar";
import Footer from "./Footer";

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/support" element={<Support />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
