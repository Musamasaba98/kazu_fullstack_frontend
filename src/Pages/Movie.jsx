import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import axios from "axios";

const Movie = () => {
  const movie = useLoaderData();
  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(to right,rgb(0, 0, 0,.9) 10%,transparent),linear-gradient(to right top,transparent,rgb(0, 0, 0,.4) 1%),url(
            https://image.tmdb.org/t/p/original${
              movie.backdrop_path === null
                ? movie.poster_path
                : movie.backdrop_path
            }
          )`,
        }}
        className="w-full  -mt-44 md:-mt-52 lg:-mt-24 flex justify-center md:justify-start pl-0 xl:pl-inherit  items-center h-70v lg:h-80v bg-cover  bg-center  bg-no-repeat"
      >
        <MovieCard movie={movie} />
      </header>
    </>
  );
};
export const loader = async ({ params }) => {
  const movieId = params.movieId;
  try {
    const result = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    return { error: `${error.message}` };
  }
};
export default Movie;
