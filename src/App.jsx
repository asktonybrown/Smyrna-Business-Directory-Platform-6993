import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessDirectory from './pages/BusinessDirectory';
import Categories from './pages/Categories';
import FeaturedSponsors from './pages/FeaturedSponsors';
import EventsNews from './pages/EventsNews';
import AboutSmyrna from './pages/AboutSmyrna';
import BusinessLogin from './pages/BusinessLogin';
import BusinessLogout from './pages/BusinessLogout';
import BusinessProfile from './pages/BusinessProfile';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<BusinessDirectory />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/sponsors" element={<FeaturedSponsors />} />
            <Route path="/events" element={<EventsNews />} />
            <Route path="/about" element={<AboutSmyrna />} />
            <Route path="/business-login" element={<BusinessLogin />} />
            <Route path="/business-logout" element={<BusinessLogout />} />
            <Route path="/business/:id" element={<BusinessProfile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;