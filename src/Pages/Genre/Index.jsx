import { useFormik } from "formik";
import React from "react";

const Index = () => {
  const formik = useFormik({
    initialValues: {
      genre: "",
      onSubmit: async (values) => {
        await addGenre(values);
      },
    },
  });
  return (
    <div className=" w-full flex justify-center ">
      <div className="px-8 py-6  my-4 text-left bg-white opacity-80 md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl text-black font-bold text-center">Add Movie</h3>
        <form onSubmit={formik.handleSubmit} method="post">
          <div>
            <Input
              label="genre"
              type="text"
              name="genre"
              value={formik.values.genre}
              placeholder="e.g horror"
              onChange={formik.handleChange}
              required
            />
            {formik.touched.genre ? (
              <span style={{ color: "red" }}>{formik.errors.genre}</span>
            ) : null}
          </div>
          <div className="flex">
            <button
              type="submit"
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Create Genre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
