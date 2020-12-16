import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import { backendURI } from "./utils/urls-map";
// components
import Header from "./components/Header";

// pages
import HomePage from "./pages/home";
import ProductPage from "./pages/product-page";

function App() {
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`${backendURI}/api/products`);
      console.log(data);
    };
    getProducts();
  }, []);
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
