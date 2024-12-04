import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AuthPage = ({ isSignin = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, password } = formData;

    // Basic form validation
    if (!email || !password || (!isSignin && !name)) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const endpoint = isSignin ? "/api/signin" : "/api/signup";
      const response = await axios.post(
        `http://localhost:5000${endpoint}`,
        isSignin ? { email, password } : { name, email, password }
      );

      setSuccess(response.data.message || "Success!");

      if (isSignin) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        setTimeout(() => {
          navigate("/signin");
        }, 1500); // Redirect to Sign In after successful sign-up
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg shadow-indigo-500/50">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-400">
          {isSignin ? "Sign In" : "Sign Up"}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {!isSignin && (
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg font-semibold"
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          {isSignin ? (
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-indigo-400 hover:underline">
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/signin" className="text-indigo-400 hover:underline">
                Sign In
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
