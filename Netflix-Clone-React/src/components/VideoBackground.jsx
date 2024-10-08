import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { SVG_PATH_SLIDER } from "../utils/constants";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen flex">
       
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={SVG_PATH_SLIDER}
            fill="currentColor"
            stroke="none"
            fill-rule="evenodd"
          ></path>
        </svg>
    
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=0&loop=1&playlist=" +
          trailerVideo?.key +
          "&controls=0&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
       <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={SVG_PATH_SLIDER}
            fill="currentColor"
            stroke="none"
            fill-rule="evenodd"
          ></path>
        </svg>
    </div>
  );
};
export default VideoBackground;
