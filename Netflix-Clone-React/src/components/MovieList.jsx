import React from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {RESPONSIVE_CAROUSEL_MAPPING} from "../utils/constants"
const MovieList = ({ title, movies }) => {

  return (
    <div className="px-0">
      <h1 className="text-lg md:text-3xl py-1 mx-2 text-white py-6 px-0">
        {title}
      </h1>
      <div className="flex good">
        <div className="flex carosel-container">
          {
            movies?.length >0 &&    <Carousel responsive={RESPONSIVE_CAROUSEL_MAPPING} showDots={true}
            autoPlaySpeed={1000}
            dotListClass="custom-dot-list-style"
            >
            {movies?.map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title != null ? movie.title : movie.original_name}
                posterPath={movie.poster_path}
                backdropPath={movie.backdrop_path}
                // name={movie.original_name}
              />
            ))}
          </Carousel>
          }
       
        </div>
      </div>
    </div>
  );
};

export default MovieList;
