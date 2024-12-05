import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchasePage = () => {
  const navigate = useNavigate();

  // Simulate user authentication (replace with actual logic)
  const isLoggedIn = true; // Replace with real login state check
  const handlePurchase = () => {
    if (!isLoggedIn) {
      alert('Please log in to purchase the course!');
      navigate('/signin');
      return;
    }

    // Simulate purchase API call
    fetch('http://localhost:5000/api/purchase-course', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1, // Replace with actual user ID
        courseId: 1, // Replace with dynamic course ID
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Course purchased successfully!');
          navigate('/dashboard'); // Redirect to user's dashboard
        } else {
          alert('Purchase failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error purchasing course:', error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">Purchase Course</h2>
      <p className="text-lg mb-4">Confirm your purchase to access the course content.</p>
      <button
        className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded text-white text-lg"
        onClick={handlePurchase}
      >
        Confirm Purchase
      </button>
    </div>
  );
};

export default PurchasePage;
