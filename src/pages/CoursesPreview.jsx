import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const CoursesPreview = () => {
  const courses = [
    { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.', imageUrl: 'https://via.placeholder.com/300x200/4CAF50/ffffff?text=React' },
    { id: 2, title: 'Advanced JavaScript', description: 'Dive deep into JavaScript.', imageUrl: 'https://via.placeholder.com/300x200/2196F3/ffffff?text=JS' },
    { id: 3, title: 'Python Programming', description: 'Master Python programming.', imageUrl: 'https://via.placeholder.com/300x200/FF5722/ffffff?text=Python' },
    { id: 4, title: 'Data Science with Python', description: 'Learn Data Science using Python.', imageUrl: 'https://via.placeholder.com/300x200/9C27B0/ffffff?text=Data+Science' },
    { id: 5, title: 'Machine Learning 101', description: 'Intro to machine learning concepts.', imageUrl: 'https://via.placeholder.com/300x200/673AB7/ffffff?text=Machine+Learning' },
    { id: 6, title: 'Web Development Bootcamp', description: 'Become a full-stack web developer.', imageUrl: 'https://via.placeholder.com/300x200/03A9F4/ffffff?text=Web+Dev' },
    { id: 7, title: 'UI/UX Design', description: 'Learn the basics of UI/UX design.', imageUrl: 'https://via.placeholder.com/300x200/E91E63/ffffff?text=UI+UX' },
    { id: 8, title: 'Digital Marketing', description: 'Understand the principles of digital marketing.', imageUrl: 'https://via.placeholder.com/300x200/FF9800/ffffff?text=Digital+Marketing' },
  ];

  return (  
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <CourseCard 
              title={course.title} 
              description={course.description} 
              imageUrl={course.imageUrl} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesPreview;
