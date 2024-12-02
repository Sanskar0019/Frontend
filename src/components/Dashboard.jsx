import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Use useNavigate instead of useHistory

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    // Check if the user is authenticated (if there's a token)
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to sign-in if no token is present
      navigate("/signin");  // Use navigate instead of history.push
    } else {
      // Fetch user data and purchased courses
      fetchUserData(token);
    }
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
      setCourses(response.data.purchasedCourses); // Assuming the server returns purchased courses
    } catch (err) {
      setError("Failed to load user data.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white">
      <div className="w-full max-w-4xl mx-auto p-8">
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {user && (
          <>
            <h2 className="text-3xl font-bold text-center mb-6 text-indigo-400">
              Welcome, {user.name}!
            </h2>

            <div className="mb-6">
              <h3 className="text-xl text-indigo-400">Your Purchased Courses:</h3>
              <ul className="list-disc pl-6">
                {courses.length > 0 ? (
                  courses.map((course) => (
                    <li key={course.id} className="text-gray-300">{course.name}</li>
                  ))
                ) : (
                  <li className="text-gray-400">You have not purchased any courses yet.</li>
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
