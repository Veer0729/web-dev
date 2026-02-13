import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Work from "./pages/work";
import Agency from "./pages/agency";
import FullScreenNav from "./components/Navigation/FullScreenNav";

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <FullScreenNav/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/agency" element={<Agency />} />
      </Routes> */}
    </div>
  );
};

export default App;
