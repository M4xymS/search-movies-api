import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cards from "./Cards";

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [SearchTerm, setSearchTerm] = useState([]);
  const movie = {
    Title: "Shrek",
    Year: "2001",
    imdbID: "tt0126029",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  };
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=245ae77d";

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  return (
    <div>
      <h1 className="container__title">Films Web</h1>
      <div className="container__box">
        <div className="container__box__form">
          <input
            className="search"
            placeholder="Search..."
            value={SearchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></input>
          <button
            className="btn"
            onClick={() => {
              searchMovie(SearchTerm);
            }}
          >
            {searchIcon}
          </button>
          <div>{movie.Title}</div>
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <Cards movie={movie} />
            ))}
            <Cards movie={movie} />
          </div>
        ) : (
          <div className="empty">
            <h2>No movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
