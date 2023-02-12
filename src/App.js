import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PictureApp from './components/PictureApp';
import WordApp from './components/WordApp';
import Nav from './components/Nav';

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<PictureApp />} /> 
        <Route path="/words" element={<WordApp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
