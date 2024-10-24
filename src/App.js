import React from "react";
import "./styles/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import Filtered from "./components/filtered";

function App() {
  return (
    <BrowserRouter basename="/ecommerce">
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Filtered />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
