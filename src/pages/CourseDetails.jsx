import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams(); // Retrieve the course ID from the URL

  // Example course data (you would typically fetch this from an API or database)
  const courses = [
    { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.', content: 'Course Content: Introduction to React, JSX, Components, etc.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Dive deep into JavaScript.', content: 'Course Content: Asynchronous JS, Closures, Event Loop, etc.' },
    { id: 3, title: 'Python Programming', description: 'Master Python programming.', content: 'Course Content: Basics, OOP, Libraries, etc.' },
    { id: 4, title: 'Data Science with Python', description: 'Learn Data Science using Python.', content: 'Course Content: Pandas, NumPy, Data Visualization, etc.' },
    // Add other courses as needed
  ];

  // Find the course by ID
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found!</div>; // Show error if the course does not exist
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">{course.title}</h2>
      <p className="text-lg mb-4">{course.description}</p>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-indigo-400">Course Content:</h3>
        <p className="text-gray-400">{course.content}</p>
      </div>
      <div className="mt-6">
        <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded text-white">Purchase Course</button>
      </div>
    </div>
  );
};

export default CourseDetails;
