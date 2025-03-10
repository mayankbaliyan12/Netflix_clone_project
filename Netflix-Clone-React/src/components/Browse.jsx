import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRateMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useAiringToday from "../hooks/TV Hooks/useAiringToday";
import usePopularTV from "../hooks/TV Hooks/usePopularTV";
import useTopRatedTV from "../hooks/TV Hooks/useTopRatedTV";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { Footer } from "./Footer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRateMovies();
  useUpcomingMovies();
  useAiringToday();
  usePopularTV();
  useTopRatedTV();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <Footer />
    </div>
  );
};
export default Browse;
