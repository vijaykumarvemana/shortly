import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Input from "./components/Input";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
