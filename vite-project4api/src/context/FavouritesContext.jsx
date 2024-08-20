import React, { createContext, useState, useContext } from 'react';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (university) => {
    setFavourites([...favourites, university]);
  };

  const removeFavourite = (university) => {
    setFavourites(favourites.filter(fav => fav.name !== university.name));
  };


  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
