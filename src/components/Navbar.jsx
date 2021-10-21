import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <nav className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b  items-center dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl  font-bold  py-1 px-2 rounded-full dark:bg-gray-900 dark:text-gray-100">
            Guggle 🔎
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-l dark:bg-gray-50 dark:text-gray-900  border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? 'light💡' : 'dark🌙'}
        </button>
      </div>
      <Search />
    </nav>
  );
};

export default Navbar;
