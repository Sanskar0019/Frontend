import React from "react";

const AuthPage = ({ isSignin }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg shadow-indigo-500/50">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-400">
          {isSignin ? "Sign In" : "Sign Up"}
        </h2>

        <form className="space-y-6">
          {!isSignin && (
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          )}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          {!isSignin && (
            <div>
              <label className="block text-sm mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          )}
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
