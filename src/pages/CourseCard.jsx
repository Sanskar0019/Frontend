// CourseCard.jsx

import React from "react";

const CourseCard = ({ title, description, image }) => {
  // Add a fallback image in case `image` is undefined
  const defaultImage = "https://via.placeholder.com/200"; // Placeholder image

  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition">
      <img 
        src={image || defaultImage} // Fallback to a default image if no image prop is passed
        alt={title} 
        className="w-full h-48 object-cover rounded-t-lg mb-4" 
      />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default CourseCard;
