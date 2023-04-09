import React, { useEffect, useState } from "react";
import {
  Form,
  Link,
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import { HiOutlineMenuAlt2, HiOutlinePlusCircle } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/features/userSlice";
import { useLogoutUserMutation } from "../Store/api/authApi";
import { useLazyGetMeQuery } from "../Store/api/userApi";

const Navbar = () => {
  const { movieId } = useParams();
  const { q } = useRouteLoaderData("search") || { q: "" };
  const { user } = useSelector((state) => state.user);
  const submit = useSubmit();
  const navigate = useNavigate();
  const [getMe] = useLazyGetMeQuery();
  const dispatch = useDispatch();
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showAccount, setShowAccount] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const [logoutUser] = useLogoutUserMutation();
  useEffect(() => {
    const input = document.querySelector("input");
    if (input) {
      document.getElementById("q").value = q;
    }
  }, [q]);
  const handleAccount = () => {
    setShowSearch(true);
    setShowAccount(!showAccount);
  };
  const handleLogout = () => {
    logoutUser();
    dispatch(logout());
    getMe(undefined, { force: true });
    navigate("/account");
  };
  return (
    <>
      {user && (
        <nav
          className={`sticky top-0  flex flex-wrap items-center justify-between px-2 py-3 z-50  mb-3 ${
            movieId ? "" : "bg-gray-900"
          }`}
        >
          <div className="container w-full px-4 flex md:mx-auto xs:ml-5 min-w-fit gap-1  items-center justify-between">
            <div
              className="text-white font lg:hidden"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiOutlineMenuAlt2 size={25} />
            </div>
            {/* mobile menu */}
            <div
              className={`absolute top-20 w-full h-100v bg-transparent ${
                navbarOpen ? "hidden" : ""
              }`}
            >
              <div className="bg-white w-40">
                <ul className="flex flex-col py-5 px-auto  list-none ml-auto">
                  <li className="nav-item">
                    <Link
                      className="px-3  py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      to="/"
                    >
                      <span
                        className="xl:ml-2 md:text-base sm:text-medium"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                      >
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item" style={{ pointerEvents: "none" }}>
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      to="/"
                    >
                      <span
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="xl:ml-2 md:text-base sm:text-medium"
                      >
                        TV Shows
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      to="/"
                    >
                      <span
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="xl:ml-2 md:text-base sm:text-medium"
                      >
                        Movies
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      to="/"
                    >
                      <span
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="xl:ml-2 md:text-base sm:text-medium"
                      >
                        New & Popular
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      to="/"
                    >
                      <span
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="xl:ml-2 md:text-base sm:text-medium"
                      >
                        My List
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* mobile menu */}
            <div className="relative flex justify-between md:gap-0 item-center">
              <Link
                className="text-sm font-bold leading-relaxed inline-block lg:mr-4  py-2 whitespace-nowrap uppercase text-white"
                to="/"
              >
                <img src={Logo} alt="chatbot" className="w-36" />
              </Link>
              <div
                className={"lg:flex flex-grow items-center hidden md:visible"}
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link
                      className="px-3  py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/"
                    >
                      <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                      <span className="xl:ml-2 md:text-base sm:text-medium">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="xl:ml-2 md:text-base sm:text-medium">
                        TV Shows
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/"
                    >
                      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                      <span className="xl:ml-2 md:text-base sm:text-medium">
                        Movies
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/"
                    >
                      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                      <span className="xl:ml-2 md:text-base sm:text-medium">
                        New & Popular
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/mylist"
                    >
                      <span className="xl:ml-2 md:text-base sm:text-medium">
                        My List
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <div className="relative flex items-center gap-3">
                <button
                  className={`text-gray-500 hover:text-gray-600 pt-3 ${
                    showSearch ? "" : "hidden"
                  }`}
                  onClick={toggleSearch}
                >
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <div className="absolute top-14 -right-14 lg:right-0 ml-10  xl:top-0 bg-white shadow-md rounded-lg w-64">
                  <div className="relative ">
                    <Form action={`/search?${q}`} role="search">
                      <input
                        id="q"
                        name="q"
                        defaultValue={q}
                        className={`
                              w-full px-4 flex-grow text-black py-2
                               rounded-lg border-2 border-gray-300
                                focus:outline-none focus:border-gray-500 ${
                                  showSearch && "hidden"
                                }`}
                        type="text"
                        placeholder="Search"
                        onChange={(event) => {
                          const isFirstSearch = q == null;
                          submit(event.currentTarget.form, {
                            replace: !isFirstSearch,
                          });
                          if (event.key === "Enter") {
                            submit(event.currentTarget.form);
                          }
                        }}
                      />
                      <button
                        className={`absolute top-0 right-0 mt-2 mr-2 ${
                          showSearch ? "hidden" : ""
                        }`}
                        onClick={toggleSearch}
                      >
                        <svg
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </Form>
                  </div>
                </div>
                {user.role === "ADMIN" ||
                  (user.role === "CREATOR" && (
                    <span className="px-2 inline-block text-white pt-2 cursor-pointer">
                      <Link to="/movies/create">
                        <HiOutlinePlusCircle size={30} />
                      </Link>
                    </span>
                  ))}
              </div>
              <div
                className={"lg:flex  items-center hidden md:visible"}
                id="example-navbar-danger"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-between items-center">
                  <li className="nav-item">
                    <Link
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/"
                    >
                      <div className="p-0">
                        <strong className="relative inline-flex items-center  px-2.5 py-1.5 text-xs font-medium">
                          <span className="items absolute -top-1 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-700">
                            <span>20</span>
                          </span>
                          <HiBell size={20}></HiBell>
                        </strong>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={handleAccount}
                >
                  <div>
                    <div className="dropdown relative">
                      <span
                        className="dropdown-toggle px-1 py-1 text-white font-medium text-xs leading-tight uppercase rounded
                      flex items-center whitespace-nowrap"
                      >
                        {user.imageUrl ? (
                          <img
                            className="w-10 h-10 p-0 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                            src={user.imageUrl}
                            alt="Bordered avatar"
                          ></img>
                        ) : (
                          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg
                              className="absolute w-12 h-12 text-gray-400 -left-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        )}
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2 ml-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          ></path>
                        </svg>
                      </span>
                      <ul
                        className={`dropdown-menu max-w-fit absolute right-5
                           bg-white text-base z-50 float-left py-2 px-6 list-none text-left rounded-lg shadow-lg mt-1
                            m-0 bg-clip-padding border-none ${
                              showAccount ? "block" : "hidden"
                            }`}
                      >
                        {user.role === "ADMIN" ? (
                          <li>
                            <Link
                              className=" dropdown-item text-sm py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
                          "
                              to={`cin/${user.username}`}
                            >
                              Profile
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link
                              className=" dropdown-item text-sm py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100
                          "
                              to={`dashboard/admin/${user.username}`}
                            >
                              Dashboard
                            </Link>
                          </li>
                        )}

                        <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                        <li>
                          <span
                            className=" dropdown-item text-sm  py-2 px-4 font-bold block w-full whitespace-nowrap
                              bg-transparent text-gray-700 hover:bg-gray-100
                              "
                            onClick={handleLogout}
                          >
                            Logout
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
