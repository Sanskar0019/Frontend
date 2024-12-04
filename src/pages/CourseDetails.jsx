import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { courseId } = useParams();
  
  // Fetch or mock course data based on courseId
  const course = {
    id: courseId,
    title: `Course Title ${courseId}`,
    description: 'Detailed description of the course.',
    image: '/images/course-detail.jpg',
    price: '$99.99',
    content: 'Course content goes here...',
    instructor: 'Instructor Name'
  };

  return (
    <div className="container mx-auto p-5">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover mt-4 rounded-lg" />
        <p className="mt-4">{course.description}</p>
        <p className="mt-4 font-semibold">Price: {course.price}</p>
        <h3 className="mt-6 text-xl font-semibold">Course Content:</h3>
        <p>{course.content}</p>
        <h4 className="mt-4">Instructor: {course.instructor}</h4>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg mt-6 transition duration-300">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
