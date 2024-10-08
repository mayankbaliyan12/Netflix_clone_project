import React from "react";
import { Link } from "react-router-dom";
import { BACKDROP_PATH_URL } from "../utils/constants";
const MovieCard = ({ title, posterPath, id, original_name, backdropPath }) => {
  debugger;
  if (!posterPath) return null;
 

  // Generate a random number
  const randomNum = Math.random();

  // Check if the red line should be shown (e.g., 30% chance)
  const showRedLine = randomNum < 0.3;

  // Generate a random width for the red line
  const randomWidth = Math.floor(Math.random() * 100); // Adjust the maximum width as needed

  return (
    <div className="w-screen md:w-80 p-1 rounded-lg hover:scale-105 relative width-md">
      <Link to={`/browse/${id}?title=${title}`}>
        <img
          className="rounded-lg object-cover slider-image"
          alt={title != null ? title : original_name}
          src={`https://image.tmdb.org/t/p/original/${
            backdropPath == null ? BACKDROP_PATH_URL : backdropPath
          }`}
        />
      </Link>
      <div
        className="relative mt-2"
        style={{ visibility: showRedLine ? "visible" : "hidden" }}
      >
        <>
          <div className="bg-zinc-400 h-1 w-full"></div>
          <div
            className="bg-red-500 h-1 w-full"
            style={{ width: `${randomWidth}%`, position: "absolute", top: 0 }}
          ></div>
        </>
      </div>
      <h1 className="text-white mt-2 text-lg">{title}</h1>
    </div>
  );
};

export default MovieCard;
