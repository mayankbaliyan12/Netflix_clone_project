import React from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RESPONSIVE_CAROUSEL_MAPPING } from "../../utils/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const RecommendationContainer = ({
  tvdata,
  similarTv,
  similarMovie,
  title,
}) => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-zinc-800 w-screen mt-20 padding-top-13vh">
      <div className="mt-0 md:-mt-40 pl-4 md:pl-12 relative z-20 bg-zinc-800">
        <h1 className="text-white text-4xl mt-10 mb-2 pt-7">
          Similar Recommendations
        </h1>
        <div className="flex flex-row  no-scrollbar">
          {tvdata?.name === title ? (
            <div className="flex carosel-container">
              {similarTv?.results?.length > 0 && (
                <Carousel
                  responsive={RESPONSIVE_CAROUSEL_MAPPING}
                  showDots={true}
                  autoPlaySpeed={1000}
                  dotListClass="custom-dot-list-style"
                >
                  {similarTv?.results.map(
                    (item) =>
                      item.backdrop_path && (
                        <div
                          key={item.id}
                          className="w-80 p-1 mr-4 rounded-lg hover:scale-105 relative"
                        >
                          {item.backdrop_path && (
                            <>
                              <Link
                                to={`/browse/${
                                  item.id
                                }?title=
                                  ${item.title}`}
                              >
                                <img
                                  className="rounded-lg object-cover"
                                  alt={item.name}
                                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                                />
                              </Link>
                              <h1 className="text-white mt-2 text-lg">
                                {item.name}
                              </h1>
                            </>
                          )}
                        </div>
                      )
                  )}
                </Carousel>
              )}
            </div>
          ) : (
            <div className="flex carosel-container">
              {similarMovie?.results?.length > 0 && (
                <Carousel
                  responsive={RESPONSIVE_CAROUSEL_MAPPING}
                  showDots={true}
                  autoPlaySpeed={1000}
                  dotListClass="custom-dot-list-style"
                >
                  {similarMovie?.results.map(
                    (item) =>
                      item.backdrop_path && (
                        <div
                          key={item.id}
                          className="w-80 p-1 mr-4 rounded-lg hover:scale-105 relative"
                        >
                          {item.backdrop_path && (
                            <>
                              <Link
                                to={`/browse/${
                                  item.id
                                }?title=${
                                  item.title
                                }`}
                              >
                                <img
                                  className="rounded-lg object-cover"
                                  alt={item.name}
                                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                                />
                              </Link>
                              <h1 className="text-white mt-2 text-lg">
                                {item.title}
                              </h1>
                            </>
                          )}
                        </div>
                      )
                  )}
                </Carousel>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="ml-10 mt-5">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Airing Today in TV"} movies={movies.airingToday} />
      </div>
    </div>
  );
};

export default RecommendationContainer;
