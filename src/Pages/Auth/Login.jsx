import React, { useEffect } from "react";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import background from "../../assets/images/background.jpg";
import { authActions } from "../../Store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { loginUser } = authActions;
  const user = useSelector((state) => {
    state.user;
  });
  const navigate = useNavigate();
  const data = useActionData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(loginUser(data));
      navigate("/");
    }
  }, [data]);

  return (
    <div
      className="flex items-center bg-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white opacity-80 md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
          <img src={Logo} alt="logo" className="w-1/2" />
        </div>
        <h3 className="text-2xl text-black font-bold text-center">
          4k Cinema Experiences
        </h3>
        <Form method="post">
          <div className="mt-4 text-black">
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
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Log in
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?
              <Link className="text-red-600 hover:underline" to="registration">
                Register
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  return data;
}
export default Login;
