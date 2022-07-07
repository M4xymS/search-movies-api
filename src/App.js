import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Cards from "./Components/Cards";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=245ae77d";
const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [SearchTerm, setSearchTerm] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {}, []);
  return (
    <div className="app">
      <div className="container">
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
          </div>

          {movies?.length > 0 ? (
            <div className="container__cards">
              {movies.map((movies) => (
                <Cards movie={movies} />
              ))}
              <Cards movie={movies} />
            </div>
          ) : (
            <div className="empty">
              <h2>No movies Found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
