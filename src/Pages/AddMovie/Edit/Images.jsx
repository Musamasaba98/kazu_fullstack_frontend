import { useFormik } from "formik";
import React from "react";
import { useUpdateMovieImageMutation } from "../../../Store/api/movieApi";
import { editMovieImageValidate } from "../../../Validations/EditMovieValidation";
import Spinner from "../../../Components/Spinner";
import { useParams } from "react-router-dom";
import { myFetch } from "../../../Store/api/apiSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const Images = () => {
  const { movieId } = useParams();
  const [updateMovieImage, { isLoading: loading, isError, error, isSuccess }] =
    useUpdateMovieImageMutation();

  //yup
  const formik = useFormik({
    initialValues: {
      imageUrl: "",
      coverUrl: "",
    },
    validationSchema: editMovieImageValidate,
    onSubmit: async (values) => {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      await updateMovieImage({ movieId, formData }).unwrap();
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
    <div className="h-full">
      <h1 className="text-white font-bold">Add Images </h1>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div className="mt-2">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="imageUrl"
          >
            Movie Poster Image
          </label>
          <input
            name="imageUrl"
            id="imageUrl"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) =>
              formik.setFieldValue("imageUrl", e.currentTarget.files[0])
            }
            className="w-full px-4 py-2 mt-2 text-white border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          {formik.touched.imageUrl ? (
            <span style={{ color: "red" }}>{formik.errors.imageUrl}</span>
          ) : null}
        </div>
        <div className="mt-2">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="coverUrl"
          >
            Movie Cover Image
          </label>
          <input
            name="coverUrl"
            id="coverUrl"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) =>
              formik.setFieldValue("coverUrl", e.currentTarget.files[0])
            }
            className="w-full px-4 text-white py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          {formik.touched.coverUrl ? (
            <span style={{ color: "red" }}>{formik.errors.coverUrl}</span>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
        >
          Save
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Images;
