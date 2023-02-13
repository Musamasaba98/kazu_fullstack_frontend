import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const { content, q } = useLoaderData();
  console.log(content);
  return <div>Search</div>;
};
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const q = await searchParams.get("q");
  console.log(q);
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}`,
    {
      params: {
        api_key: apiKey,
      },
    }
  );
  const content = await response.data;
  return { content, q };
};
export default Search;
