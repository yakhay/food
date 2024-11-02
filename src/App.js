import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';

 
export default function App() {
  // const data = useSelector((state) => state.recipes.recipes);
  
 
  return (
    <Router>
    <Navbar />
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipes/:id" element={<Recipes  />} />

        </Routes>   
    
    <Footer />
    </Router>
  );
}
