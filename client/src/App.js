import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
// components
import Header from "./components/Header";

// pages
import HomePage from "./pages/home";
import ProductPage from "./pages/product-page";
import CartPage from "./pages/cart-page";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/product/:productId" component={ProductPage} />
      <Route path="/cart/:productId?" component={CartPage} />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
