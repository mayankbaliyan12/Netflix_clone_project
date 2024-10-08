import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { SVG_PATH_SLIDER } from "../utils/constants";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const [index, setIndex] = useState(0);

  if (!movies) return;

  const mainMovie = movies[0];
  console.table(movies);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
