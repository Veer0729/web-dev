import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Work from "./pages/work";
import Agency from "./pages/agency";
import FullScreenNav from "./components/Navigation/FullScreenNav";

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </div>
  )
}


export default App;
