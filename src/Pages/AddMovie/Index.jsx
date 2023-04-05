import React, { useEffect, useState } from "react";
import Input from "../../Components/Input";
import { myFetch } from "../../Store/api/apiSlice";
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { useFormik } from "formik";
import { usePostMoviesMutation } from "../../Store/api/movieApi";
import { movieValidate } from "../../Validations/MovieValidation";
import Spinner from "../../Components/Spinner";
import { ToastContainer, toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const MovieForm = () => {
  const submit = useSubmit();
  const loader = useLoaderData();
  const movieDetails = useActionData();
  const { genreData, languageData } = loader;
  const [
    postMovies,
    { data: movieData, isLoading: loading, isError, error, isSuccess },
  ] = usePostMoviesMutation();

  const navigate = useNavigate();
  //yup
  const formik = useFormik({
    initialValues: {
      title: "",
      Language: "",
      price: "",
      Genre: "",
      description: "",
    },
    validationSchema: movieValidate,
    onSubmit: (values) => {
      submit(values, { method: "post" });
    },
  });
  useEffect(() => {
    if (movieDetails) {
      postMovies(movieDetails);
    }
  }, [movieDetails]);
  useEffect(() => {
    if (movieData) {
      const { results } = movieData;
      if (results) {
        toast.success("🦄 Movie has been created !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(`/movies/${results.id}`);
      }
    }
  }, [movieData, isSuccess]);
  if (loading) return <Spinner />;

  return (
    <div className=" w-full flex justify-center ">
      <div className="px-8 py-6  my-4 text-left bg-white opacity-80 md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl text-black font-bold text-center">Add Movie</h3>
        <form onSubmit={formik.handleSubmit} method="post">
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
              name="Genre"
              value={formik.values.Genre}
              onChange={formik.handleChange}
            >
              <select
                label="Genre"
                name="Genre"
                value={formik.values.Genre}
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
            {formik.touched.Genre ? (
              <span style={{ color: "red" }}>{formik.errors.Genre}</span>
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
              name="Language"
              value={formik.values.Language}
              onChange={formik.handleChange}
            >
              <select
                label="Language"
                name="Language"
                value={formik.values.Language}
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
            {formik.touched.Language ? (
              <span style={{ color: "red" }}>{formik.errors.Language}</span>
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
      <ToastContainer />
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
    const languageData = languageResponse.data;
    // Do something with the genreData and languageData here
    return { genreData, languageData };
  } catch (error) {
    console.error(error);
    return {};
  }
};
export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    return data;
  } catch (error) {
    return { error: "There was an error creating your account." };
  }
}
export default MovieForm;
