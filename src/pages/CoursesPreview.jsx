import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const CoursesPreview = () => {
  const courses = [
    { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Dive deep into JavaScript.' },
    { id: 3, title: 'Python Programming', description: 'Master Python programming.' },
    { id: 4, title: 'Data Science with Python', description: 'Learn Data Science using Python.' },
    { id: 5, title: 'Machine Learning 101', description: 'Intro to machine learning concepts.' },
    { id: 6, title: 'Web Development Bootcamp', description: 'Become a full-stack web developer.' },
    { id: 7, title: 'UI/UX Design', description: 'Learn the basics of UI/UX design.' },
    { id: 8, title: 'Digital Marketing', description: 'Understand the principles of digital marketing.' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <CourseCard title={course.title} description={course.description} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesPreview;
