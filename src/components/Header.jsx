import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; // Import hamburger icon
import { HiX } from "react-icons/hi"; // Import close icon

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // State for toggling the dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the mobile menu

  // Function to decode the JWT token
  const decodeJWT = (token) => {
    const base64Url = token.split(".")[1]; // Get the payload part
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Decode Base64 URL format
    const decodedData = atob(base64); // Decode Base64
    return JSON.parse(decodedData); // Convert the decoded JSON string to an object
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get token from localStorage

    if (token) {
      try {
        const decodedToken = decodeJWT(token); // Decode the JWT token manually
        setUserName(decodedToken.name); // Extract and set the user's name
        setIsLoggedIn(true); // Mark user as logged in
      } catch (error) {
        console.error("Token decoding failed:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update login state
    setShowDropdown(false); // Hide the dropdown
    window.location.href = "/signin"; // Redirect to login/signin page
  };

  return (
    <header className="flex justify-between items-center p-5 bg-black sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-indigo-500">
        Wisdom Nest
      </Link>

      {/* Hamburger menu icon (for mobile screens) */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
      </button>

      {/* Navigation - Mobile menu */}
      <nav
        className={`lg:flex gap-6 items-center ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
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

        {/* Conditionally render login/signup or user icon */}
        {isLoggedIn ? (
          <div className="relative flex items-center">
            <FaUserCircle
              className="text-white text-3xl cursor-pointer hover:text-indigo-400 transition duration-300"
              onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown on click
            />
            {showDropdown && (
              <div className="absolute top-10 right-0 bg-white text-gray-800 shadow-lg rounded-lg p-4 w-40">
                <p className="font-medium mb-2">Hello, {userName}</p>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:underline font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signin">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-indigo-500/50">
              Login/Signup
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

