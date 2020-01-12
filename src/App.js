import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Common/Navbar";
import Index from "./Components/Index";
import Showcase from "./Components/sub/Showcase";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
