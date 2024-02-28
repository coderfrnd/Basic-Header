"use client";
useRouter;

import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const router = useRouter();

  const register = ()=>{
    router.push("/register")
  }

  const login = ()=>{
    router.push("/login")
  }

  return (
    <div className="w-full">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full flex">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ml-0">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mr-0">
          <div className="text-white">
            <button
              className="bg-blue-500 border-transparent rounded border-solid border-2 border-sky-500 mr-5"
              onClick={register}
            >
              Register
            </button>
            <button
              className="bg-blue-500 border-transparent rounded border-solid border-2 border-sky-500 ml-5"
              onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
