import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGrid, FiTrendingUp, FiMapPin, FiPlus, FiGift, FiCalendar } = FiIcons;

const QuickActionGrid = () => {
  const quickActions = [
    {
      icon: FiGrid,
      title: 'Browse All Businesses',
      description: 'Complete directory of local businesses',
      link: '/directory',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: FiTrendingUp,
      title: 'Popular This Week',
      description: 'Trending local spots',
      link: '/directory?filter=popular',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: FiMapPin,
      title: 'Nearby Now',
      description: 'Location-based recommendations',
      link: '/directory?filter=nearby',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: FiPlus,
      title: 'New Businesses',
      description: 'Recent additions to the directory',
      link: '/directory?filter=new',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FiGift,
      title: 'Special Offers',
      description: 'Current promotions and deals',
      link: '/directory?filter=offers',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FiCalendar,
      title: 'Community Events',
      description: 'Local happenings and business events',
      link: '/events',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-4">
            Quick Actions
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Fast access to what you're looking for in Smyrna
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                to={action.link}
                className="group block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary-200"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <SafeIcon icon={action.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {action.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActionGrid;