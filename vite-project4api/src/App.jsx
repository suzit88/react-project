import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import UniversityItem from './components/UniversityItem';
import UniversityList from './components/UniversityList';
import DetailsPage from './pages/Detailspage';
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage'
import { FavouritesProvider } from './context/FavouritesContext';
function App() {
  const [count, setCount] = useState(0)

  return (
   <FavouritesProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details/:country" element={<DetailsPage/>} />
        <Route path="/favourites" element={<FavouritesPage/>} />

      </Routes>
    </Router>
   </FavouritesProvider>
  );
}

export default App
