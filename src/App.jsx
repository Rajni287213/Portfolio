import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/SKills";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import BlissfullHome from "./Pages/BlissfullHome.jsx";
import BeanBliss from "./Pages/Beanbliss.jsx"
import RoseGarden from "./Pages/RoseGarden.jsx"
import BookStore from "./Pages/Bookstore.jsx"
import HomeDecor from "./Pages/HomeDecor.jsx";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};
const App = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BlissfullHome" element={<BlissfullHome />} />
         <Route path="/Beanbliss" element={<BeanBliss />} />
         <Route path="/RoseGarden" element={<RoseGarden />} />
         <Route path="/Bookstore" element={<BookStore />} />
         <Route path="/HomeDecor" element={<HomeDecor/>}/>
      </Routes>
    );
  };
export default App;
