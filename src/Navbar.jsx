import React, { useState } from "react";
import { Link } from "react-router-dom";
import movieLogo from "./assets/movieLogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-0 md:py-4 ">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div className="flex">
            <img src={movieLogo} className="h-9" alt="logo" />
            <span className="self-center text-[27px] pl-2 text-[#F0BB78] font-semibold whitespace-nowrap">
              MovieVerse
            </span>
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/tamil"
                className="block py-2 px-3 rounded-sm md:bg-transparent hover:underline md:p-0 text-[#FFF0DC]  hover:text-[#F0BB78]"
              >
                Tamil
              </Link>
            </li>
            <li>
              <Link
                to="/indian"
                className="block py-2 px-3 rounded-sm hover:underline  md:border-0 md:p-0 text-[#FFF0DC]  hover:text-[#F0BB78]"
              >
                Indian
              </Link>
            </li>
            <li>
              <Link
                to="/trending"
                className="block py-2 px-3 rounded-sm hover:underline  md:border-0 md:p-0 text-[#FFF0DC]  hover:text-[#F0BB78]"
              >
                Trending
              </Link>
            </li>
            <li>
              <Link
                to="/latest"
                className="block py-2 px-3 rounded-sm hover:underline  md:border-0 md:p-0 text-[#FFF0DC]  hover:text-[#F0BB78]"
              >
                Latest
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
