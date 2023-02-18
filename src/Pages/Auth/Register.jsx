import React, { useEffect } from "react";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import background from "../../assets/images/background.jpg";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/authSlice";
import { userSchema } from "../../Validations/UserValidation";

const Register = () => {
  const { registerUser } = authActions;
  const navigate = useNavigate();
  let data = useActionData();
  //yup
 userSchema
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
        <Form method="post">
          <div className="mt-4 text-black">
            <div>
              <label className="block" htmlFor="Name">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <span className="text-xs text-red-400">Password must be same!</span>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
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
        </Form>
      </div>
    </div>
  );
};
export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  return data;
}
export default Register;
