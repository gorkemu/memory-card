import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PictureApp from './components/PictureApp';
import WordApp from './components/WordApp';
import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<PictureApp />} /> 
        <Route path="/words" element={<WordApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
