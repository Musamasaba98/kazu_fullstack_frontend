import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="flex justify-center mx-auto">
      <div className="w-full max-w-screen-xl  flex flex-col lg:flex-row lg:gap-6">
        <div className="bg-gray-800 w-full lg:w-1/3 flex flex-col items-center p-6 rounded-lg mb-6 lg:mb-0">
          <img
            className="w-32 h-32 rounded-full mb-4"
            src={user.imageUrl || "/default-avatar.png"}
            alt="Avatar"
          />
          <h1 className="text-white text-2xl font-medium mb-2">
            {user.fullname || user.username}
          </h1>
          <span className="text-gray-400 mb-4">@{user.username}</span>
          <div className="flex flex-row items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-5 3a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-400">Age:{user.age}</span>
          </div>
          <div className="flex flex-row items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16 5H4v10h12V5zm-1 1v8H5V6h10zm-5 9a4 4 0 100-8 4 4 0 000 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-400">{user.email}</span>
          </div>
          {user.gender && (
            <div className="flex flex-row items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {user.gender === "MALE" ? (
                  <path
                    fillRule="evenodd"
                    d="M10 4a4 4 0 100 8 4 4 0 000-8zM2 10a8 8 0 1116 0A8 8 0 012 10z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M5 2a8 8 0 0110 0v3.5a1.5 1.5 0 01-3 0V4a5 5 0 00-6 0v1.5a1.5 1.5 0 013 0V4a8 8 0 011 0v3.5a1.5 1.5 0 003 0V4a5 5 0 00-4-4 5 5 0 00-4 4v1.5a1.5 1.5 0 003 0V4z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
              <span className="text-gray-400">
                {user.Gender === "MALE" ? "Male" : "Female"}
              </span>
            </div>
          )}
          <span className="text-gray-400 mb-4">ROLE: {user.role}</span>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
        <div className="bg-gray-800 w-full lg:w-2/3 p-6 rounded-lg">
          <h2 className="text-white text-xl font-medium mb-6">About</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            erat vel felis laoreet, eu tristique lacus dapibus. Nullam nec
            maximus quam. Sed sollicitudin, sapien sed rhoncus laoreet, urna
            velit placerat velit, vitae ultricies arcu dolor in felis.
            Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Duis ultrices dolor non
            nisl iaculis viverra. Donec vel ex ac augue malesuada vestibulum ut
            eget mauris. Sed eu ipsum vitae erat blandit sagittis sed non elit.
            Morbi vulputate risus id purus congue, et tristique felis ultricies.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </p>
          <h2 className="text-white text-xl font-medium mb-6">Watchlist</h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.thedailybeast.com%2Fimage%2Fupload%2Fc_crop%2Cd_placeholder_euli9k%2Ch_1688%2Cw_3000%2Cx_0%2Cy_0%2Fdpr_1.5%2Fc_limit%2Cw_1044%2Ffl_lossy%2Cq_auto%2Fv1639463187%2F211213-spiderman-no-way-tease-01_wif0dv&tbnid=SwUNVU1N35XViM&vet=12ahUKEwj2m8bFkJD-AhVDkScCHRM8B3QQMygEegUIARDoAQ..i&imgrefurl=https%3A%2F%2Fwww.thedailybeast.com%2Fspider-man-no-way-home-is-the-mcus-best-spidey-movie-by-a-mile&docid=_u_W3Sggq8aq1M&w=1566&h=881&q=spider%20man%20no%20way%20home&ved=2ahUKEwj2m8bFkJD-AhVDkScCHRM8B3QQMygEegUIARDoAQ"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">
                Spider-Man: No Way Home
              </h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/2QbVS6PD7oEtcnikTTsLsB0wLz.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">
                Matrix Resurrections
              </h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/rlNnwObbMu5WuWkdHwJ6lM3Ioqg.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">Dune</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/gCvGD9aM5w5gAJejVeR0Mv8ZneC.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">
                The Batman
              </h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/huZgMxlBiTx0GgOUHdG9d3gB6D0.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">
                Don't Look Up
              </h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/xguL1Zz9Wvy8XvL9Sh3a5u6PXF.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">Avatar 2</h3>
            </div>
          </div>
          <h2 className="text-white text-xl font-medium mb-6 mt-12">
            Favourite Movies
          </h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/tgbLMA1y1YGEEjIxWzZwIpdciRu.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">
                Jurassic Park
              </h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/hSpm2mR1xuwIIs38pz7RlHDLbzx.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">Inception</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">
                Avengers: Endgame
              </h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">Joker</h3>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="relative pb-150">
                <img
                  className="absolute h-full w-full object-cover rounded-lg shadow-md"
                  src="https://image.tmdb.org/t/p/w500/s9I2LmNf7rMlM6cPbWG4JU6YkkX.jpg"
                  alt="Movie Poster"
                />
              </div>
              <h3 className="text-white text-lg font-medium mt-2">
                The Matrix
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
