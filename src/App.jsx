import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import CoursesPreview from "./pages/CoursesPreview";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DashboardPage from "./components/DashboardPage";
import CourseDetails from "./pages/CourseDetails";  // Import CourseDetails page

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<AuthPage isSignin={true} />} />
            <Route path="/signup" element={<AuthPage isSignin={false} />} />
            <Route path="/courses" element={<CoursesPreview />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} /> {/* Add course detail route */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
