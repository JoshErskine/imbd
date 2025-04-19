import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");

    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Take all previous values, then add new movie to list
  const addToFavourites = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  // Generates new array that contains all movies not equal to the movieId being removed
  const removeFromFavourites = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // Checks all movie Id's in favourites, checks if one is equal to current movieId, returns true
  const isFavourite = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  // Creating a value object that can be accessed by children
  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
