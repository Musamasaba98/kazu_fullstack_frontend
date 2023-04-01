import React, { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { myFetch } from "../../Store/api/apiSlice";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { usePostMoviesMutation } from "../../Store/api/movieApi";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const MovieForm = () => {
  const loader = useLoaderData();
  const { genreData, languageData } = loader;
  const [postMovies, { data, isLoading: loading, isError, error, isSuccess }] =
    usePostMoviesMutation();

  const navigate = useNavigate();

  //yup
  const formik = useFormik({
    initialValues: {
      title: "",
      language: "",
      price: "",
      genre: "",
      description: "",
    },
    validationSchema: userValidate,
    onSubmit: (values) => {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      postMovies(formData);
    },
  });
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      //   navigate(`/movies/${data}`);
    }
  }, [isSuccess, data]);
  if (loading) return <Spinner />;
  return (
    <div className=" w-full flex justify-center ">
      <div className="px-8 py-6  my-4 text-left bg-white opacity-80 md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl text-black font-bold text-center">Add Movie</h3>
        <form>
          <div>
            <Input
              label="Title"
              type="text"
              name="title"
              value={formik.values.title}
              placeholder="e.g Wakanda"
              onChange={formik.handleChange}
              required
            />
            {formik.touched.title ? (
              <span style={{ color: "red" }}>{formik.errors.title}</span>
            ) : null}
          </div>
          <div className="relative">
            <Input
              label="Genre"
              name="genre"
              value={language}
              onChange={handleLanguageChange}
            >
              <select
                label="Genre"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>--select--</option>
                {genreData.map((genre) => {
                  return <option key={genre.id}>{genre.name}</option>;
                })}
              </select>
            </Input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-8 px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
            {formik.touched.genre ? (
              <span style={{ color: "red" }}>{formik.errors.genre}</span>
            ) : null}
          </div>
          <div className="mb-2">
            <Input
              label="Price"
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              placeholder="Shs.10000"
              required
            />
            {formik.touched.price ? (
              <span style={{ color: "red" }}>{formik.errors.price}</span>
            ) : null}
          </div>
          <div className="relative">
            <Input
              label="Language"
              name="language"
              value={formik.values.language}
              onChange={formik.handleChange}
            >
              <select
                label="language"
                name="language"
                value={formik.values.language}
                onChange={formik.handleChange}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>--select--</option>
                {languageData.map((language) => {
                  return <option key={language.id}>{language.name}</option>;
                })}
              </select>
            </Input>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-8 px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
            {formik.touched.language ? (
              <span style={{ color: "red" }}>{formik.errors.language}</span>
            ) : null}
          </div>
          <Input
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          >
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="Enter a description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.description ? (
              <span style={{ color: "red" }}>{formik.errors.description}</span>
            ) : null}
          </Input>
          <div className="flex">
            <button
              type="submit"
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Create Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export const loader = async () => {
  try {
    const [genreResponse, languageResponse] = await Promise.all([
      myFetch(`${BASE_URL}/genre`, {
        method: "GET",
      }).then((response) => response.json()),
      myFetch(`${BASE_URL}/language`, {
        method: "GET",
      }).then((response) => response.json()),
    ]);

    const genreData = genreResponse.data;
    console.log(genreData);
    const languageData = languageResponse.data;
    console.log(languageData);
    // Do something with the genreData and languageData here
    return { genreData, languageData };
  } catch (error) {
    console.error(error);
    return {};
  }
};
export default MovieForm;
