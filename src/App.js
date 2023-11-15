import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Aboutus from './components/Aboutus';
import Blogs from './components/Blog';
import Boardcare from './components/Boardcare';
import Footer from './components/Footer';
import Home from './components/Home';
import Homehealth from './components/Homehealth';
import HospiceCare from './components/HospiceCare';
import Navbar from './components/Navbar';
import Precheck from './components/Precheck';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pre-check" element={<Precheck />} />
        <Route path="/hospice-care" element={<HospiceCare />} />
        <Route path="/home-health" element={<Homehealth />} />
        <Route path="/board-care" element={<Boardcare />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
