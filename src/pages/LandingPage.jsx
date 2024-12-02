import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-indigo-500 mb-6">Welcome to Wisdom Nest</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Empowering lifelong learners with world-class courses taught by the best experts. 
          Start your learning journey today!
        </p>
        <a
          href="/courses"
          className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded text-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
        >
          Browse Courses
        </a>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-10">About Us</h2>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center">
          At Wisdom Nest, we believe education is the cornerstone of progress. 
          Our mission is to provide high-quality, accessible learning resources to everyone.
        </p>
      </section>

      {/* Faculties Section */}
      <section id="faculties" className="py-16 px-6 bg-gray-800">
  <h2 className="text-4xl font-bold text-center text-indigo-500 mb-10">Meet Our Experts</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        name: "Dr. John Doe",
        speciality: "AI and Machine Learning",
        img: "/Teacher 1.jpg",
      },
      {
        name: "Prof. Jane Smith",
        speciality: "UI/UX Design",
        img: "/Teacher 2.jpg",
      },
      {
        name: "Dr. Alan Brown",
        speciality: "Digital Marketing",
        img: "/Teacher 3.jpg",
      },
      {
        name: "Prof. Emily White",
        speciality: "Leadership and Strategy",
        img: "/Teacher 4.jpg",
      },
    ].map((faculty, index) => (
      <div
        key={index}
        className="bg-black bg-opacity-60 p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
      >
        <img
          src={faculty.img}
          alt={faculty.name}
          className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold text-indigo-400">{faculty.name}</h3>
        <p className="text-gray-300">{faculty.speciality}</p>
      </div>
    ))}
  </div>
</section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-10">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Life-changing courses with practical insights.",
            "The faculty is truly world-class.",
            "The learning platform is seamless and user-friendly.",
          ].map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
            >
              <p className="text-gray-300 italic">"{review}"</p>
              <h4 className="text-indigo-400 mt-4">- Student {index + 1}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links Section */}
      <section id="social" className="py-16 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-10">Follow Us</h2>
        <div className="flex justify-center gap-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 text-4xl transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 text-4xl transition-all duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 text-4xl transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 text-4xl transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
