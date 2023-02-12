import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 bottom-0 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-medium">CineSphere</h3>
            <p className="mt-4 text-gray-400">
              A platform for streaming movies and TV shows.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150 mt-2"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150 mt-2"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-medium">Support</h3>
            <ul className="mt-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150 mt-2"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150 mt-2"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
