import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to decode the JWT token
  const decodeJWT = (token) => {
    const base64Url = token.split('.')[1]; // Get the payload part
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Decode Base64 URL format
    const decodedData = atob(base64); // Decode Base64
    return JSON.parse(decodedData); // Convert the decoded JSON string to an object
  };

  useEffect(() => {
    const token = localStorage.getItem('token');  // Get token from localStorage
    
    if (token) {
      try {
        const decodedToken = decodeJWT(token);  // Decode the JWT token manually
        const userName = decodedToken.name;  // Extract user name from the decoded token
        setUserName(userName);  // Set user name to state
      } catch (error) {
        console.error("Token decoding failed:", error);
      } finally {
        setLoading(false);  // Stop loading once data is fetched
      }
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 md:p-10 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl mb-6">Welcome to your Dashboard!</h1>
      {loading ? (
        <p className="text-xl md:text-2xl">Loading...</p>  // Show loading message while fetching user data
      ) : (
        userName ? (
          <p className="text-xl md:text-2xl">Hello, {userName}!</p>  // Display the user's name from the token
        ) : (
          <p className="text-xl md:text-2xl">User data not available</p>  // If no user data in token
        )
      )}
    </div>
  );
};

export default Dashboard;
