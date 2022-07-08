import React from "react";

// const fullHeart = <FontAwesomeIcon icon={faHeart} />;
const Cards = ({ movie }) => {
  const googleSearch = `https://www.google.com/search?q=${movie.Title} ${movie.Year}`;

  return (
    <div className="container__cards movie">
      <div className="container__cards-card">
        <div className="container__cards-card-image">
          <div className="container__cards-favorite">
            <i className="fa-regular fa-heart"></i>
          </div>
          <img
            src={
              movie.Poster === "N/A"
                ? "https://via.placeholder.com/300x450"
                : movie.Poster
            }
            alt={movie.Title}
          />

          <div className="container__cards-card-content">
            <h2 className="container__cards-card-content-title">
              <a href={googleSearch} target="_blank">
                {movie.Title}
              </a>
            </h2>
            <p className="container__cards-card-content-description">
              {movie.Type}, {movie.Year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
