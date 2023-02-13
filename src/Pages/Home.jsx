import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import MoviePoster from "../Components/MoviePoster";
import MoviesContainer from "../Components/MoviesContainer";
import MoviesRow from "../Components/MoviesRow";
import MoviesTitle from "../Components/MoviesTitle";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const loader = useLoaderData();
  return (
    <div className="flex flex-col w-4/5 mx-auto">
      {loader.map((category) => {
        return (
          <>
            <MoviesContainer key={crypto.randomUUID()}>
              <MoviesTitle>{category.title}</MoviesTitle>
              <MoviesRow key={crypto.randomUUID()}>
                {category.data.map((data) => {
                  return <MoviePoster movie={data} />;
                })}
              </MoviesRow>
            </MoviesContainer>
          </>
        );
      })}
    </div>
  );
};
export const loader = async () => {
  try {
    const [originals, trending, nowPlaying, popular, topRated, upcoming] =
      await Promise.all([
        axios.get(`${baseURL}discover/tv`, {
          params: {
            api_key: apiKey,
          },
        }),
        axios.get(`${baseURL}trending/all/week`, {
          params: {
            api_key: apiKey,
          },
        }),
        axios.get(`${baseURL}movie/now_playing`, {
          params: {
            api_key: apiKey,
          },
        }),
        axios.get(`${baseURL}movie/popular`, {
          params: {
            api_key: apiKey,
          },
        }),
        axios.get(`${baseURL}movie/top_rated`, {
          params: {
            api_key: apiKey,
          },
        }),
        axios.get(`${baseURL}movie/upcoming`, {
          params: {
            api_key: apiKey,
          },
        }),
      ]);

    return [
      {
        title: "CineSphere Originals",
        data: originals.data.results,
      },
      { title: "Trending", data: trending.data.results },
      { title: "Now Playing", data: nowPlaying.data.results },
      { title: "Popular", data: popular.data.results },
      { title: "Top Rated", data: topRated.data.results },
      { title: "Upcoming", data: upcoming.data.results },
    ];
  } catch (error) {
    console.error(error);
    return {};
  }
};
export default Home;
