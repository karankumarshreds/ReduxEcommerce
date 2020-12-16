import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import HomePage from "./pages/home";
import ProductPage from "./pages/product-page";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/productpage/:productId" exact component={ProductPage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
