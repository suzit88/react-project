import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './component/navbar';
import PropTypes from 'prop-types';
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/detail" Component={DetailPage} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
