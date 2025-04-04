"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
        <nav className="z-10 sticky top-0 left-0 right-0 w-full max-w-7xl mx-auto px-5 py-2.5 lg:py-4 fixed flex items-center justify-between">
          <div className="flex items-center">
            <button>
              <div className="flex items-center space-x-2">
                <h2 className="text-black dark:text-white font-bold text-2xl">
                  Zero.com
                </h2>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="focus:outline-none text-slate-200 dark:text-white"
              onClick={toggleMenu}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="/">Home</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="/pages/service">Our services</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">About</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 right-0 w-1/2 bg-white dark:bg-gray-900 shadow-lg py-5">
              <ul className="flex flex-col items-center space-y-4 text-base font-bold text-black/60 dark:text-white">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">Our services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden lg:flex items-center lg:justify-end gap-x-2">
            <button className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
              Sign up
            </button>
            <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
              Login
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
