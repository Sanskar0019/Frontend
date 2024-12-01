import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Sample data for faculties and reviews
const faculties = [
  {
    name: 'Dr. John Doe',
    title: 'Professor of Computer Science',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Dr. Jane Smith',
    title: 'Professor of Mathematics',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Dr. Emily Clark',
    title: 'Professor of Physics',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Dr. Michael Brown',
    title: 'Professor of Chemistry',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const reviews = [
  {
    name: 'Alice Johnson',
    review:
      'Wisdom Nest has been a game-changer for my career. The courses are well-structured and taught by experts.',
  },
  {
    name: 'Mark Robinson',
    review:
      'Fantastic platform for learning. I’ve gained so much knowledge and practical skills that I can apply directly to my job.',
  },
  {
    name: 'Sarah Lee',
    review:
      'The learning experience here is second to none. The instructors are knowledgeable, and the content is top-notch.',
  },
];

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center py-20 bg-black bg-opacity-70">
        <h1 className="text-5xl font-bold text-indigo-500 mb-4">Welcome to Wisdom Nest</h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Your gateway to knowledge, skill-building, and a brighter future. Explore our courses and join a community
          of learners.
        </p>
        <Link to="/courses">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-indigo-500/50">
            Browse Courses
          </button>
        </Link>
      </div>

      {/* Faculty Slider Section */}
      <div className="py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Meet Our Expert Faculty</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}          // Infinite loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay and continue after interaction
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {faculties.map((faculty, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{faculty.name}</h3>
                <p className="text-gray-300">{faculty.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Social Links Section */}
      <div className="py-16 bg-black">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-500">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-500">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-indigo-500">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">What Our Students Say</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}          // Infinite loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay and continue after interaction
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-700 p-6 rounded-lg text-center">
                <p className="text-lg text-gray-300 mb-4">"{review.review}"</p>
                <p className="text-indigo-500 font-semibold">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Additional Section: Our Vision */}
      <div className="py-16 px-8 bg-black">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Our Vision</h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          At Wisdom Nest, we strive to provide accessible, high-quality education to learners all over the world. Our
          vision is to empower individuals to reach their full potential through skill-building, expert guidance, and a
          thriving community of learners.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
