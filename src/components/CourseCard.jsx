import React from "react";

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm mb-4">{description}</p>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
