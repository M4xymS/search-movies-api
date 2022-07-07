import React from "react";

const Cards = ({ movie }) => {
  return (
    <div className="container__cards movie">
      <div className="container__cards-card">
        <div className="container__cards-card-image">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="container__cards-card-content">
            <h2 className="container__cards-card-content-title">
              <a href="www.google.com">{movie.Title}</a>
            </h2>
            <p className="container__cards-card-content-description">
              {movie.Year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
