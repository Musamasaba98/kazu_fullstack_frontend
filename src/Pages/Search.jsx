import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import MoviePoster from "../Components/MoviePoster";
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const { content, q } = useLoaderData();

  return (
    <>
      {content.results.length ? (
        <div
          className="container h-full md:pt-10 mx-auto grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-col-3"
          style={{ minHeight: "90vh" }}
        >
          {content.results
            .filter((movie) => movie.poster_path !== null)
            .map((movie) => {
              return <MoviePoster key={movie.id} movie={movie} />;
            })}
        </div>
      ) : (
        <div className="container mx-auto" style={{ height: "71vh" }}>
          <div className="flex justify-center align-center">
            <h3 className="text-white font-bold pt-10 text-2xl ">
              Search for Movies
            </h3>
          </div>
        </div>
      )}
    </>
  );
};
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const q = await searchParams.get("q");
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}`,
    {
      params: {
        api_key: apiKey,
      },
    }
  );
  const content = await response.data;
  console.log(content);
  return { content, q };
};
export default Search;
