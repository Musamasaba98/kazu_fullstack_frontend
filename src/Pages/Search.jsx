import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import MoviePoster from "../Components/MoviePoster";
import { myFetch } from "../Store/api/apiSlice";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Search = () => {
  const { results, q } = useLoaderData();
  useEffect(() => {}, [q]);

  return (
    <>
      {results.length ? (
        <div
          className="container h-full md:pt-10 mx-auto grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-col-3"
          style={{ minHeight: "90vh" }}
        >
          {results
            .filter((movie) => movie.movieUrl !== null)
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
  const q = searchParams.get("q");
  const response = await myFetch(`${BASE_URL}/movies/search?q=${q}`).then(
    (results) => results.json()
  );
  const { results } = response;
  return { results, q };
};
export default Search;
