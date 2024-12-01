import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200",
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and React to build amazing websites.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200",
    title: "Data Science Essentials",
    description: "Dive into Python, Pandas, and machine learning with this course.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200",
    title: "Digital Marketing Mastery",
    description: "Master SEO, social media marketing, and email campaigns.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200",
    title: "Graphic Design Fundamentals",
    description: "Learn Adobe Photoshop, Illustrator, and design principles.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x200",
    title: "Cybersecurity Basics",
    description: "Understand cybersecurity principles and ethical hacking.",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/300x200",
    title: "AI and Machine Learning",
    description: "Explore neural networks, deep learning, and AI applications.",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/300x200",
    title: "Business Analytics",
    description: "Gain insights into data analysis for business decision-making.",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/300x200",
    title: "Creative Writing Workshop",
    description: "Hone your skills in storytelling, poetry, and creative writing.",
  },
];

const CoursesPreview = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center text-indigo-500 py-8">
        Explore Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-8">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPreview;
