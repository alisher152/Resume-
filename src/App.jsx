import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Description from "./components/Description.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Header />
      <Description />
      <Footer />
    </div>
  );
};

export default App;
