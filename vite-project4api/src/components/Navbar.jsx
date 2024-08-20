import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-5 bg-black text-6xl text-white">
      <div className="container  flex justify-around">
        <Link to="/">UNIVERSITY FINDER</Link>
        <Link to="/favourites">FAVOURITES</Link>
      </div>
    </nav>
  );
};

export default Navbar;
