import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-indigo-500 mb-4">About Wisdom Nest</h3>
          <p>
            Wisdom Nest is your gateway to a world of knowledge. We empower learners through high-quality courses delivered by industry experts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-indigo-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-indigo-400 transition duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-indigo-500 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-400 transition duration-300 text-2xl"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-400 transition duration-300 text-2xl"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-400 transition duration-300 text-2xl"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-400 transition duration-300 text-2xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-indigo-500 mb-4">Stay Updated</h3>
          <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p>&copy; {new Date().getFullYear()} Wisdom Nest. All rights reserved.</p>
      </div>
    </footer>
  );
};
    
export default Footer;
