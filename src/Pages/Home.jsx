import React from "react";
import { useLoaderData } from "react-router-dom";
import MoviePoster from "../Components/MoviePoster";
import MoviesContainer from "../Components/MoviesContainer";
import MoviesRow from "../Components/MoviesRow";
import MoviesTitle from "../Components/MoviesTitle";
import { myFetch } from "../Store/api/apiSlice";
import { useGetMoviesQuery } from "../Store/api/movieApi";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const Home = () => {
  // const { data, isLoading, isSuccess } = useGetMoviesQuery();
  // isSuccess && console.log(data);
  const loader = useLoaderData() || [{}];

  return (
    <div className="flex flex-col w-4/5 mx-auto">
      {loader.map((category) => {
        return (
          <MoviesContainer key={category.title}>
            <MoviesTitle>{category.title}</MoviesTitle>
            <MoviesRow key={crypto.randomUUID()}>
              {category.data.map((data) => {
                return <MoviePoster key={data.id} movie={data} />;
              })}
            </MoviesRow>
          </MoviesContainer>
        );
      })}
    </div>
  );
};
export const loader = async () => {
  try {
    const response = await myFetch(`${BASE_URL}/movies`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
    const { data } = response;
    return [
      {
        title: "CineSphere Originals",
        data: data,
      },
    ];
  } catch (error) {
    console.error(error);
    return {};
  }
};
export default Home;
