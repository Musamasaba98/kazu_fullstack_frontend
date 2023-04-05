import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useUpdateMovieMutation } from "../../../Store/api/movieApi";
import { editMovieValidate } from "../../../Validations/EditMovieValidation";
import Spinner from "../../../Components/Spinner";
import { myFetch } from "../../../Store/api/apiSlice";
import Multiselect from "multiselect-react-dropdown";
import { ToastContainer, toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Primary = () => {
  const loader = useLoaderData();
  const { data } = loader;
  const [updateMovie, { isLoading: loading, isError, error, isSuccess }] =
    useUpdateMovieMutation();

  const { movieId } = useParams();

  //yup
  const formik = useFormik({
    initialValues: {
      productionCompanies: [],
      revenue: "",
      release_date: "",
      budget: "",
      releaseStatus: false,
    },
    validationSchema: editMovieValidate,
    onSubmit: async (values) => {
      await updateMovie({ movieId, values });
    },
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success("🦄 Updated Movie!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [isSuccess]);

  if (loading) return <Spinner />;
  return (
    <div>
      <h3 className="text-white font-bold ">Edit Movie</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-4 text-black">
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="budget"
            >
              Budget
            </label>
            <input
              name="budget"
              id="budget"
              type="number"
              value={formik.values.budget}
              onChange={formik.handleChange}
              placeholder="Budget must be positive number"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {formik.touched.budget ? (
              <span style={{ color: "red" }}>{formik.errors.budget}</span>
            ) : null}
          </div>
          <div className="mt-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="revenue"
            >
              Revenue
            </label>
            <input
              name="revenue"
              id="revenue"
              type="number"
              value={formik.values.revenue}
              onChange={formik.handleChange}
              placeholder="Revenue must be a number"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {formik.touched.revenue ? (
              <span style={{ color: "red" }}>{formik.errors.revenue}</span>
            ) : null}
          </div>
          <div className="mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="productionCompanies"
            >
              Production Companies
            </label>
            <div className="relative">
              <Multiselect
                id="productionCompanies"
                name="productionCompanies"
                displayValue="name"
                onKeyPressFn={function noRefCheck() {}}
                onRemove={function noRefCheck() {}}
                onSearch={function noRefCheck() {}}
                onSelect={(selected) => {
                  console.log(selected);
                  return formik.setFieldValue("productionCompanies", selected);
                }}
                options={data}
              />

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {formik.touched.productionCompanies ? (
              <span style={{ color: "red" }}>
                {formik.errors.productionCompanies}
              </span>
            ) : null}
          </div>
          <div className="mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="role"
            >
              Release Status
            </label>
            <div className="relative">
              <select
                name="releaseStatus"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="releaseStatus"
                onChange={formik.handleChange}
              >
                <option value={false}>Not Released</option>
                <option value={true}>Released</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="age"
            >
              RELEASE DATE
            </label>
            <input
              name="release_date"
              id="release_date"
              type="date"
              value={formik.values.release_date}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {formik.touched.release_date ? (
              <span style={{ color: "red" }}>{formik.errors.release_date}</span>
            ) : null}
          </div>
          <div className="flex">
            <button
              type="submit"
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export const loader = async () => {
  try {
    const response = myFetch(`${BASE_URL}/company`, {
      method: "GET",
    }).then((response) => response.json());
    // Do something with the genreData and languageData here
    return response;
  } catch (error) {
    console.error(error);
    return {};
  }
};
export default Primary;
