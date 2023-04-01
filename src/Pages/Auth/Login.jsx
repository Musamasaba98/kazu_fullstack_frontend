import React, { useEffect } from "react";
import { Link, useActionData, useNavigate, useSubmit } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import background from "../../assets/images/background.jpg";
import { useFormik } from "formik";
import { loginValidate } from "../../Validations/UserValidation";
import { useLoginUserMutation } from "../../Store/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Store/features/userSlice";
import Spinner from "../../Components/Spinner";

const Login = () => {
  // const loading = false;
  const [loginUser, { isLoading: loading }] = useLoginUserMutation();
  const submit = useSubmit();
  const navigate = useNavigate();
  const data = useActionData();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: (values) => {
      submit(values, { method: "post" });
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        try {
          const { accessToken } = await loginUser(data).unwrap();
          dispatch(setCredentials({ accessToken, data }));
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [data]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-4 text-black">
                <div className="mt-4">
                  <label className="block" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formik.values.email}
                    type="email"
                    onChange={formik.handleChange}
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
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>

                <div className="flex">
                  <button
                    type="submit"
                    className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  >
                    Log in
                  </button>
                </div>
                <div className="mt-6 text-grey-dark">
                  Already have an account?
                  <Link
                    className="text-red-600 hover:underline"
                    to="registration"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    return data;
  } catch (error) {
    return { error: "There was an error creating your account." };
  }
}
export default Login;
