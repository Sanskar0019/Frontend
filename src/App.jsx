import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import CoursesPreview from "./pages/CoursesPreview";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import DashboardPage from "./components/DashboardPage";
import CourseDetails from "./pages/CourseDetails";
import PurchasePage from "./pages/PurchasePage";

// Custom wrapper to handle header remounting
const HeaderWrapper = () => {
  const location = useLocation(); // Detect route changes
  const [headerKey, setHeaderKey] = useState(0);

  useEffect(() => {
    // Update key when the route or login status changes
    setHeaderKey((prev) => prev + 1);
  }, [location]);

  return <Header key={headerKey} />;
};

const App = () => {
  return (
    <Router>
      <div className="font-sora">
        <HeaderWrapper /> {/* Header remounts when the route changes */}
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<AuthPage isSignin={true} />} />
            <Route path="/signup" element={<AuthPage isSignin={false} />} />
            <Route path="/courses" element={<CoursesPreview />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
