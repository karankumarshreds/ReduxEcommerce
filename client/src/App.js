import React from "react";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// css
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <div className="main">TESTING TO SEE IF THIS WORKS</div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
