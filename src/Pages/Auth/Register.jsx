import React, { useEffect } from "react";
import { Link, useActionData, useNavigate, useSubmit } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import background from "../../assets/images/background.jpg";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/authSlice";
import { userValidate } from "../../Validations/UserValidation";
import { useFormik } from "formik";

const Register = () => {
  const submit = useSubmit();
  const { registerUser } = authActions;
  const navigate = useNavigate();
  let data = useActionData();
  //yup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: userValidate,
    onSubmit: (values) => {
      submit(values, { method: "post" });
    },
  });
  //yup
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(registerUser(data));
      navigate("/account");
    }
  }, [data]);

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
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-4 text-black">
            <div>
              <label className="block" htmlFor="Name">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
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
              <label className="block">Confirm Password</label>
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
export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    return data;
  } catch (error) {
    return { error: "There was an error creating your account." };
  }
}
export default Register;
