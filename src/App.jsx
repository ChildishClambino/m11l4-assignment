import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetail from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import './App.css'


const App = () => {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-characters" element={<BrowseCharacters />} />
        <Route path="/character-details/:id" element={<CharacterDetail />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
  );
};

export default App;