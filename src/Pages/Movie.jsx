import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { useGetMovieQuery } from "../Store/api/movieApi";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import coverImage from "../assets/images/coverImage.svg";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { data: movieData, isLoading, isSuccess } = useGetMovieQuery(movieId);
  useEffect(() => {
    if (movieData) {
      const { data } = movieData;
      setMovie(data);
    }
  }, [movieData]);
  if (isLoading) return <Spinner />;

  return (
    <>
      {movie && (
        <header
          style={{
            backgroundImage: `linear-gradient(to right,rgb(0, 0, 0,.9) 10%,transparent),
          linear-gradient(to right top,transparent,rgb(0, 0, 0,.4) 1%),url(${
            movie.coverUrl === null ? coverImage : movie.imageUrl
          })`,
          }}
          className="w-full  -mt-44 md:-mt-52 lg:-mt-24 flex justify-center md:justify-start pl-0 xl:pl-inherit  items-center h-70v lg:h-80v bg-cover  bg-center  bg-no-repeat"
        >
          <MovieCard movie={movie} />
        </header>
      )}
    </>
  );
};

export default Movie;
