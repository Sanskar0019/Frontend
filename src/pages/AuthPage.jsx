import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Use useNavigate instead of useHistory

const AuthPage = ({ isSignin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();  // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");  // Reset error
    setSuccess("");  // Reset success message
  
    try {
      // Set the API endpoint based on whether it's sign-in or sign-up
      const endpoint = isSignin ? "/api/auth/signin" : "/api/auth/signup";
      
      // Prepare the payload (sign-in vs sign-up)
      const payload = isSignin
        ? { email: formData.email, password: formData.password }
        : formData;
  
      // Send the request to your local server (localhost:5000)
      const response = await axios.post(`http://localhost:5000${endpoint}`, payload);
      
      setSuccess(response.data.message || "Success!");  // Set success message
      
      if (isSignin) {
        // Save JWT token in localStorage upon successful sign-in
        localStorage.setItem("token", response.data.token);
        
        // Redirect to the dashboard after successful login
        navigate("/dashboard");  // Use navigate instead of history.push
      }
    } catch (err) {
      // Display error message from the response, or fallback to a generic error
      setError(err.response?.data?.error || "An error occurred.");
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
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
              <a href="/signup" className="text-indigo-400 hover:underline">
                Sign Up
              </a>
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/signin" className="text-indigo-400 hover:underline">
                Sign In
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
