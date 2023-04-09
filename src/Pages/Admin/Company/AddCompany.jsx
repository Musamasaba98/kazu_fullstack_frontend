import { useFormik } from "formik";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAddCompanyMutation } from "../../../Store/api/companyApi";

const AddCompany = () => {
  const [addCompany, { isSuccess, isError }] = useAddCompanyMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      await addCompany(values);
    },
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success("🦄 Added Production Company!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      formik.values.name = "";
    }
  }, [isSuccess]);
  return (
    <div className=" flex flex-col items-center ml-[8rem] ">
      <h1 className="text-white text-4xl pb-[5px]">Production Company</h1>
      <form onSubmit={formik.handleSubmit}>
        <label className="block mb-2 font-bold text-white">Company Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="border rounded py-2 px-3 mb-4 w-full"
          placeholder="Enter Genre Name"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddCompany;
