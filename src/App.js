import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Services from './components/Services'
import Portfolios from './pages/Portfolios'
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import FAQ from "./components/FAQ";
import Contact from "./pages/Contact";
import NoPage from "./components/NoPage";

import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import "../src/sass/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolios />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/faq" element={ <FAQ /> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
