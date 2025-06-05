import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (place) => {
    setFavorites((prev) => [...prev, place]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.cca3 !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.cca3 === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
