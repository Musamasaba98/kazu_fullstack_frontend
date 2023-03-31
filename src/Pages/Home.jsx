import React from "react";
import { useLoaderData } from "react-router-dom";
import MoviePoster from "../Components/MoviePoster";
import MoviesContainer from "../Components/MoviesContainer";
import MoviesRow from "../Components/MoviesRow";
import MoviesTitle from "../Components/MoviesTitle";
import { myFetch } from "../Store/api/apiSlice";

const Home = () => {
  const loader = useLoaderData() || [{}];
  console.log(loader);
  // console.log(loader);
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
    const response = await myFetch("http://localhost:10000/api/v1/movies", {
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
