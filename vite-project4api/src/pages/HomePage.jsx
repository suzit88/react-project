import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/details/${country}`);
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <form onSubmit={handleSubmit} className="space-x-4">
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country"
        />
        <button type="submit" >Search</button>
      </form>
    </div>
  );
};

export default HomePage;
