import './App.css';
import Navbar from"./components/Navbar";
import { Home } from './pages/Home';
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import React from "react";
import {  BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Footer } from './components/Footer';
import DeleteBooks from './pages/DeleteBooks';
import Description from './pages/Description';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route  path="/books" element={<Books />} />
      <Route  path="/addBooks" element={<AddBooks />} />
      <Route  path="/deletebooks" element={<DeleteBooks />} />
      <Route path="/description" element={<Description />} />
      </Routes>
     <Footer />
    </Router>
    
  );
}

export default App;
