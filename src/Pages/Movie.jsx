import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import axios from "axios";

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setMovie(result.data);
    };

    fetchData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(to right,rgb(0, 0, 0,.9) 10%,transparent),linear-gradient(to left bottom,rgb(0, 0, 0,.4) 20%,transparent),url(
            https://image.tmdb.org/t/p/original${movie.backdrop_path}
          )`,
        }}
        className="w-full  -mt-44 md:-mt-52 lg:-mt-24 flex justify-center items-center h-70v lg:h-80v bg-cover  bg-center  bg-no-repeat"
      >
        <MovieCard movie={movie} />
      </header>
    </>
  );
};

export default Movie;
