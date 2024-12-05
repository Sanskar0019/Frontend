import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams(); // Retrieve the course ID from the URL
  const navigate = useNavigate(); // Correctly place useNavigate within the component

  // Updated course data
  const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      description:
        'Kickstart your web development journey with React! Learn to build dynamic, modern web applications using React’s powerful components, hooks, and state management techniques.',
      content: 'Topics: Introduction to React, JSX, Components, Props, State, and Hooks.',
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description:
        'Uncover the secrets of JavaScript’s advanced features! Master closures, asynchronous programming, the event loop, and ES6+ features to become a JavaScript pro.',
      content: 'Topics: Closures, Event Loop, Promises, Async/Await, ES6 Modules, and Classes.',
    },
    {
      id: 3,
      title: 'Python Programming',
      description:
        'Master the fundamentals of Python programming. Dive into syntax, object-oriented programming, and libraries to unlock the potential of this versatile language.',
      content: 'Topics: Basics, Data Types, Functions, OOP, File Handling, and Libraries like NumPy.',
    },
    {
      id: 4,
      title: 'Data Science with Python',
      description:
        'Transform raw data into actionable insights with Python. Learn data manipulation, visualisation, and predictive modelling using Pandas, NumPy, and Matplotlib.',
      content: 'Topics: Pandas, NumPy, Matplotlib, Data Cleaning, and Intro to Machine Learning.',
    },
    {
      id: 5,
      title: 'Machine Learning 101',
      description:
        'Step into the world of Artificial Intelligence with Machine Learning basics! Understand algorithms, build models, and explore real-world applications of ML.',
      content: 'Topics: Supervised Learning, Unsupervised Learning, Regression, and Classification.',
    },
    {
      id: 6,
      title: 'Web Development Bootcamp',
      description:
        'Become a full-stack web developer. Learn front-end and back-end technologies including HTML, CSS, JavaScript, React, Node.js, and more.',
      content: 'Topics: Front-end Development, Back-end Development, Databases, and APIs.',
    },
    {
      id: 7,
      title: 'UI/UX Design',
      description:
        'Design intuitive, visually stunning user interfaces! Learn the principles of user-centred design, wireframing, prototyping, and creating engaging user experiences.',
      content: 'Topics: Wireframing, Prototyping, Design Tools, User Research, and Usability Testing.',
    },
    {
      id: 8,
      title: 'Digital Marketing',
      description:
        'Master the art of online marketing. From SEO and social media strategies to Google Ads and analytics, learn how to drive traffic and convert leads effectively.',
      content: 'Topics: SEO, Social Media Marketing, Google Ads, Content Marketing, and Analytics.',
    },
  ];

  // Find the course by ID
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div className="text-white text-center mt-10">Course not found!</div>;
  }

  const handlePurchaseRedirect = () => {
    navigate(`/purchase`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">{course.title}</h2>
      <p className="text-lg mb-4">{course.description}</p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-indigo-400">Course Content:</h3>
        <p className="text-gray-400 mt-2">{course.content}</p>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="bg-indigo-600 hover:bg-indigo-500 px-8 py-2 rounded text-white text-lg shadow-lg"
          onClick={handlePurchaseRedirect}
        >
          Purchase Course
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
