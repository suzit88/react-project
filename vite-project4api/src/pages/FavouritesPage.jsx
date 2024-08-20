import React from 'react';
import { useFavourites } from '../context/FavouritesContext';
import UniversityList from '../components/UniversityList';

const FavouritesPage = () => {
  const { favourites } = useFavourites();

  return (
    <div>
      <h1 className='text-4xl'>Favourite Universities</h1>
      <UniversityList universities={favourites} />
    </div>
  );
};

export default FavouritesPage;
