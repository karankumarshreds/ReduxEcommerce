import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
// components
import Header from "./components/Header";

// pages
import HomePage from "./pages/home";
import ProductPage from "./pages/product-page";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/product/:productId" component={ProductPage} />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
