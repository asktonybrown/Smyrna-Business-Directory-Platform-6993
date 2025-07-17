import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShoppingBag, FiTool, FiHeart, FiMonitor, FiScissors, FiHome, FiMusic, FiBook, FiCoffee, FiCar, FiCamera, FiGift } = FiIcons;

const Categories = () => {
  const categories = [
    {
      id: 'restaurant',
      name: 'Restaurants & Dining',
      icon: FiCoffee,
      count: 45,
      color: 'from-orange-500 to-red-500',
      description: 'Local eateries, cafes, and fine dining establishments'
    },
    {
      id: 'retail',
      name: 'Shopping & Retail',
      icon: FiShoppingBag,
      count: 32,
      color: 'from-purple-500 to-pink-500',
      description: 'Boutiques, stores, and shopping destinations'
    },
    {
      id: 'automotive',
      name: 'Automotive Services',
      icon: FiCar,
      count: 18,
      color: 'from-blue-500 to-indigo-500',
      description: 'Car repair, maintenance, and automotive services'
    },
    {
      id: 'health',
      name: 'Health & Wellness',
      icon: FiHeart,
      count: 28,
      color: 'from-green-500 to-emerald-500',
      description: 'Healthcare providers, fitness centers, and wellness services'
    },
    {
      id: 'technology',
      name: 'Technology Services',
      icon: FiMonitor,
      count: 15,
      color: 'from-cyan-500 to-blue-500',
      description: 'IT services, computer repair, and tech solutions'
    },
    {
      id: 'beauty',
      name: 'Beauty & Personal Care',
      icon: FiScissors,
      count: 22,
      color: 'from-pink-500 to-rose-500',
      description: 'Salons, spas, and personal care services'
    },
    {
      id: 'home',
      name: 'Home & Garden',
      icon: FiHome,
      count: 19,
      color: 'from-yellow-500 to-orange-500',
      description: 'Home improvement, landscaping, and garden services'
    },
    {
      id: 'professional',
      name: 'Professional Services',
      icon: FiTool,
      count: 35,
      color: 'from-gray-500 to-gray-600',
      description: 'Legal, financial, consulting, and business services'
    },
    {
      id: 'entertainment',
      name: 'Entertainment & Events',
      icon: FiMusic,
      count: 12,
      color: 'from-violet-500 to-purple-500',
      description: 'Entertainment venues, event planning, and recreation'
    },
    {
      id: 'education',
      name: 'Education & Training',
      icon: FiBook,
      count: 16,
      color: 'from-teal-500 to-cyan-500',
      description: 'Schools, tutoring, and educational services'
    },
    {
      id: 'photography',
      name: 'Photography & Media',
      icon: FiCamera,
      count: 8,
      color: 'from-amber-500 to-yellow-500',
      description: 'Photography, videography, and media services'
    },
    {
      id: 'gifts',
      name: 'Gifts & Specialty',
      icon: FiGift,
      count: 14,
      color: 'from-red-500 to-pink-500',
      description: 'Gift shops, specialty items, and unique finds'
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
            Business Categories
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore local businesses organized by category to find exactly what you're looking for
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <Link
                to={`/directory?category=${category.id}`}
                className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 hover:border-primary-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform`}>
                      <SafeIcon icon={category.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-neutral-800">{category.count}</span>
                      <p className="text-xs text-neutral-500">businesses</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-neutral-600">
                    {category.description}
                  </p>
                </div>
                
                <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Popular Categories */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-display font-bold text-neutral-800 mb-8 text-center">
            Popular Categories This Week
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category, index) => (
              <Link
                key={category.id}
                to={`/directory?category=${category.id}`}
                className="group bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white hover:from-primary-600 hover:to-secondary-600 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={category.icon} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count} businesses</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-neutral-50 to-primary-50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-display font-bold text-neutral-800 mb-4">
            Can't Find Your Business Category?
          </h2>
          <p className="text-neutral-600 mb-6">
            We're always adding new categories. Let us know what you're looking for!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all font-medium"
            >
              Suggest a Category
            </Link>
            <Link
              to="/directory"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border border-primary-200 rounded-lg hover:bg-primary-50 transition-all font-medium"
            >
              Browse All Businesses
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Categories;