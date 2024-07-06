import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Personal from './components/Personal';
import Main from './components/Main';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Personal/>
      <Main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Education"  element={<Education/>}/>
          <Route path="/Skills"  element={<Skills/>}/>
          <Route path="/Project"  element={<Project/>}/>
          <Route path="/Contact"  element={<Contact/>}/>
        </Routes>
      </Main>
    </Router>
  );
}


export default App;
