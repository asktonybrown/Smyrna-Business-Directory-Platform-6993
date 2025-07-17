import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiHeart, FiArrowRight, FiHome } = FiIcons;

const BusinessLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto redirect after 10 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="mx-auto h-16 w-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-6">
            <SafeIcon icon={FiCheck} className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-display font-bold text-neutral-800 mb-4">
            Successfully Logged Out
          </h2>
          
          <p className="text-neutral-600 mb-6">
            Thank you for supporting local Smyrna businesses! Your contribution helps strengthen our community.
          </p>
          
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <SafeIcon icon={FiHeart} className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-sm font-medium text-neutral-800">
                Supporting Local Community
              </span>
            </div>
            <p className="text-xs text-neutral-600">
              Every business listing helps connect our community and supports local economic growth.
            </p>
          </div>
          
          <div className="space-y-3">
            <Link
              to="/"
              className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all font-medium group"
            >
              <SafeIcon icon={FiHome} className="mr-2 h-4 w-4" />
              Return to Home
              <SafeIcon icon={FiArrowRight} className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/business-login"
              className="w-full flex items-center justify-center py-3 px-4 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors font-medium"
            >
              Login Again
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-neutral-500">
            Need help? Contact us at{' '}
            <a href="mailto:support@smyrnaguide.com" className="text-primary-600 hover:text-primary-500">
              support@smyrnaguide.com
            </a>
          </p>
          <p className="text-xs text-neutral-400 mt-2">
            Redirecting to home in 10 seconds...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BusinessLogout;