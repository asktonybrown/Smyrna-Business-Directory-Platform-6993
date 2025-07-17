import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HeroSection from '../components/HeroSection';
import QuickActionGrid from '../components/QuickActionGrid';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
import CommunitySection from '../components/CommunitySection';

const { FiArrowRight, FiMapPin, FiUsers, FiTrendingUp } = FiIcons;

const Home = () => {
  const stats = [
    { icon: FiMapPin, value: '500+', label: 'Local Businesses' },
    { icon: FiUsers, value: '10K+', label: 'Happy Customers' },
    { icon: FiTrendingUp, value: '95%', label: 'Satisfaction Rate' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-neutral-800 mb-2">{stat.value}</h3>
                <p className="text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuickActionGrid />
      <FeaturedBusinesses />
      <CommunitySection />
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Discover Smyrna?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of locals who trust Smyrna Guide to find the best businesses in town.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/directory"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-50 transition-colors group"
              >
                Browse Directory
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/business-login"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                List Your Business
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;