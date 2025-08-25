import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Languages from "./pages/languages";
import About from "./pages/about";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
};

export default App;



