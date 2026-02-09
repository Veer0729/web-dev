import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/work";
import Agency from "./pages/agency";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/agency" element={<Agency />} />
      </Routes>
  );
};

export default App;
