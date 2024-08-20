import React from 'react';
import { useFavourites } from '../context/FavouritesContext';

const UniversityItem = ({ university }) => {
  const { addFavourite, removeFavourite, favourites } = useFavourites();
  const { name, country, state_province, web_pages } = university;

  const isFavourite = favourites.some(fav => fav.name === university.name);

  const handleToggleFavourite = () => {
    isFavourite ? removeFavourite(university) : addFavourite(university);
  };

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p>{country} - {state_province}</p>
      </div>
      <div>
        <a href={web_pages[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600">Visit</a>
        <button 
          onClick={handleToggleFavourite} 
          className={`ml-4 ${isFavourite ? 'text-red-600' : 'text-green-600'}`}
        >
          {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
        </button>
      </div>
    </div>
  );
};

export default UniversityItem;
