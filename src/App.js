
import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import { Route, Routes } from 'react-router-dom'

export default function App() { 
  return (
    <>
      <Navbar/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> 
      </div>
    </>
  );
};
