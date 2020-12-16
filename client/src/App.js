import React from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import HomePage from "./pages/home";

// css
// import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
