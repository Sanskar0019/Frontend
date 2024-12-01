import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-black sticky top-0 z-50 shadow-md">
      <Link to="/" className="text-3xl font-bold text-indigo-500">
        Wisdom Nest
      </Link>
      <nav className="flex gap-6 items-center">
        <Link
          to="/courses"
          className="text-white text-lg font-medium hover:text-indigo-400 transition duration-300"
        >
          Courses
        </Link>
        <Link
          to="/about"
          className="text-white text-lg font-medium hover:text-indigo-400 transition duration-300"
        >
          About Us
        </Link>
        <a
          href="/contact"
          className="text-white text-lg font-medium hover:text-indigo-400 transition duration-300"
        >
          Contact
        </a>
        <Link to="/signin">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-indigo-500/50">
            Login/Signup
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
