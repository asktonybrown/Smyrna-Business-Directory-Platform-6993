import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiUsers, FiTrendingUp, FiHeart, FiAward, FiTarget } = FiIcons;

const AboutSmyrna = () => {
  const stats = [
    { icon: FiUsers, value: '56,000+', label: 'Residents' },
    { icon: FiTrendingUp, value: '500+', label: 'Local Businesses' },
    { icon: FiHeart, value: '95%', label: 'Community Satisfaction' },
    { icon: FiAward, value: '15+', label: 'Awards & Recognition' }
  ];

  const founders = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9a2e5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Long-time Smyrna resident passionate about supporting local businesses and community growth.'
    },
    {
      name: 'Michael Chen',
      role: 'Co-Founder & CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Technology enthusiast dedicated to creating digital solutions that strengthen local communities.'
    }
  ];

  const partnerships = [
    {
      name: 'Smyrna Chamber of Commerce',
      description: 'Official partnership promoting local business growth and community development.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'City of Smyrna',
      description: 'Supporting municipal initiatives and connecting residents with local services.',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Smyrna Business Association',
      description: 'Collaborative efforts to strengthen the local business ecosystem.',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-8 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-4">
            About Smyrna, Georgia
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover the heart of our community and the mission behind Smyrna Guide
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 md:p-12 text-white mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">
                Welcome to Smyrna
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Located in the heart of Cobb County, Smyrna is a vibrant community that perfectly balances 
                small-town charm with modern amenities. Our city is home to thriving businesses, beautiful 
                parks, and residents who truly care about their neighbors.
              </p>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="w-5 h-5" />
                <span>Just 10 miles northwest of Atlanta</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Smyrna Georgia"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mb-4">
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-1">{stat.value}</h3>
              <p className="text-neutral-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiTarget} className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold text-neutral-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Smyrna Guide exists to strengthen our local community by connecting residents with the 
              businesses that make our city special. We believe that supporting local businesses creates 
              jobs, builds relationships, and keeps our community thriving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Connect Community</h3>
              <p className="text-neutral-600 text-sm">
                Bridge the gap between local businesses and residents through our comprehensive directory.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Support Growth</h3>
              <p className="text-neutral-600 text-sm">
                Help local businesses grow by providing them with digital tools and increased visibility.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Build Relationships</h3>
              <p className="text-neutral-600 text-sm">
                Foster lasting connections between businesses and customers through authentic interactions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-neutral-800 mb-8 text-center">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-neutral-800 mb-1">{founder.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{founder.role}</p>
                <p className="text-neutral-600 text-sm">{founder.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnerships Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-neutral-800 mb-8 text-center">
            Community Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{partner.name}</h3>
                <p className="text-neutral-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-display font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Whether you're a business owner looking to connect with customers or a resident 
            wanting to support local businesses, we're here to help strengthen our community together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors font-semibold">
              List Your Business
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-semibold">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSmyrna;