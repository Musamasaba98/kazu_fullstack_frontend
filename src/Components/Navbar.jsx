import React, { useEffect, useState } from "react";
import { Form, Link, useParams, useSubmit } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiBell } from "react-icons/hi";

const Navbar = () => {
  const { movieId } = useParams();
  const submit = useSubmit();
  const q = "";
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const [user, setUser] = useState({});
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      submit(e.currentTarget.form);
    }
  };
  return (
    <>
      <nav
        className={`sticky top-0  flex flex-wrap items-center justify-between px-2 py-3 z-10  mb-3 ${
          movieId ? "" : "bg-gray-900"
        }`}
      >
        <div className="container w-full px-4 flex md:mx-auto xs:ml-5 min-w-fit gap-1  items-center justify-between">
          <div className="text-white font lg:hidden">
            <HiOutlineMenuAlt2 size={25} />
          </div>
          <div className="relative flex justify-between md:gap-0 item-center">
            <Link
              className="text-sm font-bold leading-relaxed inline-block lg:mr-4  py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              <img src={Logo} alt="chatbot" className="w-36" />
            </Link>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
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
                    to="/"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="xl:ml-2 md:text-base sm:text-medium">
                      My List
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-between items-center">
              <li className="nav-item">
                <Link
                  className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/search"
                >
                  <div className="relative">
                    <button
                      className="text-gray-500 hover:text-gray-600"
                      onClick={toggleSearch}
                    >
                      <svg
                        className="h-6 w-6 text-white"
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
                    {showSearch && (
                      <div className="absolute top-0 right-0 bg-white shadow-md rounded-lg w-64">
                        <div className="relative">
                          <Form action={`/search?${q}`} role="search">
                            <input
                              name="q"
                              id="q"
                              defaultValue={q}
                              className="w-full px-4 flex-grow text-black py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500"
                              type="text"
                              placeholder="Search"
                              onKeyDown={handleSearch}
                              onChange={(event) => {
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form, {
                                  replace: !isFirstSearch,
                                });
                                if (event.key === "Enter") {
                                }
                              }}
                            />
                            <button
                              className="absolute top-0 right-0 mt-2 mr-2"
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
                    )}
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-1 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="pablo"
                >
                  <span className="ml-2 md:text-base sm:text-medium">KIDS</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="pablo"
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
            {user ? (
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
            ) : (
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Bordered avatar"
              ></img>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
