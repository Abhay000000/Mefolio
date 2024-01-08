import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import HomeTwo from "./components/SectionTwo/Main";
import HomeThree from "./components/SectionThree/Main";
import HomeFour from "./components/SectionFour/Main";
import About from "./components/About.js/About";
import Protfolio from "./components/Protfolio/Main";
import Slider from "./components/Slider/Main";
import "aos/dist/aos.css";
import News from "./components/News/Main";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Main";
import Delivering from "./components/Delivering/Main";
import Testimonial from "./components/Testimonial/Main";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeTwo" element={<HomeTwo />} />
        <Route path="/HomeThree" element={<HomeThree />} />
        <Route path="/HomeFour" element={<HomeFour />} />
      </Routes>
      <About />
      <Protfolio />
      <Skills />
      <Delivering />
      <Slider />
      <Testimonial />
      <News />
      <Contact />
    </Router>
  );
}

export default App;
