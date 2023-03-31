import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import background from "../../assets/images/background.jpg";
import { userValidate } from "../../Validations/UserValidation";
import { useFormik } from "formik";
import { useRegisterUserMutation } from "../../Store/api/authApi";
import Spinner from "../../Components/Spinner";

const Register = () => {
  const [registerUser, { isLoading: loading, isError, error, isSuccess }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  //yup
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      age: "",
      username: "",
      image: "",
      password: "",
      emailUpdates: false,
      confirmPassword: "",
    },
    validationSchema: userValidate,
    onSubmit: (values) => {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      registerUser(formData);
    },
  });
  useEffect(() => {
    if (isSuccess) {
      navigate("/account");
    }
  }, [isSuccess]);
  if (loading) return <Spinner />;

  return (
    <div
      className="flex items-center bg-center justify-center min-h-screen "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white opacity-80 md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
          <img src={Logo} alt="logo" className="w-1/2" />
        </div>
        <h3 className="text-2xl text-black font-bold text-center">Join us</h3>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="mt-4 text-black">
            <div>
              <label
                className="bblock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="fullname"
              >
                Fullname
              </label>
              <input
                name="fullname"
                id="fullname"
                type="text"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                placeholder="Fullname"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.fullname ? (
                <span style={{ color: "red" }}>{formik.errors.fullname}</span>
              ) : null}
            </div>
            <div>
              <label
                className="bblock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                name="username"
                id="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.username ? (
                <span style={{ color: "red" }}>{formik.errors.username}</span>
              ) : null}
            </div>
            <div className="mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="text"
                placeholder="Email"
                autoComplete="off"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="mt-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <input
                name="age"
                id="age"
                type="number"
                value={formik.values.age}
                onChange={formik.handleChange}
                placeholder="Age must atleast 18..."
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.age ? (
                <span style={{ color: "red" }}>{formik.errors.age}</span>
              ) : null}
            </div>
            <div className="mt-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="image"
              >
                Profile Image
              </label>
              <input
                name="image"
                id="image"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) =>
                  formik.setFieldValue("image", e.currentTarget.files[0])
                }
                className="w-full px-4 py-2 mt-2 border rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.image ? (
                <span style={{ color: "red" }}>{formik.errors.image}</span>
              ) : null}
            </div>

            <div className="mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="role"
              >
                Role
              </label>
              <div className="relative">
                <select
                  name="role"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="role"
                >
                  <option>USER</option>
                  <option>CREATOR</option>
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
            <div className="mt-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={formik.values.password}
                type="password"
                onChange={formik.handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.password && formik.errors.password ? (
                <span style={{ color: "red" }}>{formik.errors.password}</span>
              ) : null}
            </div>
            <div className="mt-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <span style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </span>
              ) : null}
            </div>
            <div className="mt-2">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  name="emailUpdates"
                  onChange={formik.handleChange}
                  value={formik.values.emailUpdates}
                />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?
              <Link className="text-red-600 hover:underline" to="/account">
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
