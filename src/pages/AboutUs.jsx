import React from "react";
import { Link } from "react-router-dom";  // Make sure this import is here

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-indigo-500 text-center mb-8">
          About Us
        </h1>
        <div className="text-lg text-gray-300 space-y-6">
          <section>
            <h2 className="text-3xl font-semibold text-indigo-400">
              Our Mission
            </h2>
            <p>
              At Wisdom Nest, our mission is to provide high-quality, accessible
              courses for lifelong learning. We believe that education is the
              key to unlocking potential, and we aim to empower individuals
              with the knowledge and skills needed to succeed in their personal
              and professional lives.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-semibold text-indigo-400">
              Our Vision
            </h2>
            <p>
              Our vision is to become a leading global platform for learning
              that inspires growth and curiosity. We aspire to create a community
              where learners from all walks of life come together to share
              knowledge, challenge ideas, and build a brighter future.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-semibold text-indigo-400">
              Our Values
            </h2>
            <ul className="list-disc pl-6">
              <li>Empowerment through Knowledge</li>
              <li>Commitment to Excellence</li>
              <li>Accessibility for All</li>
              <li>Innovation and Creativity</li>
              <li>Integrity and Transparency</li>
            </ul>
          </section>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Together, we can change the way the world learns. Whether you're
            looking to develop new skills or expand your knowledge, Wisdom Nest
            is here to guide you every step of the way.
          </p>
          <Link
            to="/courses"
            className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-8 rounded text-lg"
          >
            Browse Our Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
