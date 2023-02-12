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
          backgroundImage: `linear-gradient(to right,rgb(0, 0, 0,.9) 30%,transparent),linear-gradient(to bottom,rgb(0, 0, 0,.9321) 10%,transparent),url(
            https://image.tmdb.org/t/p/original${movie.poster_path}
          )`,
        }}
        className="w-full  -mt-24  h-60v bg-cover bg-center bg-no-repeat flex item-center justify-start"
      >
        <MovieCard movie={movie} />
      </header>
    </>
  );
};

export default Movie;
