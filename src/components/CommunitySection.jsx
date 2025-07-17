import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiHeart, FiTrendingUp, FiCalendar, FiAward, FiMessageCircle } = FiIcons;

const CommunitySection = () => {
  const communityHighlights = [
    {
      icon: FiUsers,
      title: "Local Business Owners",
      description: "Meet the passionate entrepreneurs behind Smyrna's thriving business community",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: FiHeart,
      title: "Community Champions",
      description: "Businesses supporting local causes and making a difference in Smyrna",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: FiTrendingUp,
      title: "Success Stories",
      description: "Inspiring stories of local businesses growing and thriving in our community",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const recentActivity = [
    {
      type: "review",
      business: "Smyrna Diner",
      text: "Amazing breakfast and friendly service! Highly recommend the pancakes.",
      author: "Sarah M.",
      time: "2 hours ago"
    },
    {
      type: "new",
      business: "Tech Solutions Plus",
      text: "New computer repair shop just opened on Main Street!",
      author: "Business Owner",
      time: "1 day ago"
    },
    {
      type: "event",
      business: "Smyrna Community Center",
      text: "Local Business Networking Event - This Friday 6 PM",
      author: "Event Organizer",
      time: "2 days ago"
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
            Community Spotlight
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Celebrating the people and businesses that make Smyrna a special place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {communityHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg">
                    <SafeIcon icon={highlight.icon} className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{highlight.title}</h3>
                <p className="text-neutral-600 text-sm">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-primary-500" />
              <h3 className="text-xl font-semibold text-neutral-800">Recent Activity</h3>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex space-x-3 pb-4 border-b border-neutral-100 last:border-b-0">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <SafeIcon 
                        icon={activity.type === 'review' ? FiMessageCircle : activity.type === 'new' ? FiTrendingUp : FiCalendar} 
                        className="w-4 h-4 text-white" 
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-800 mb-1">{activity.text}</p>
                    <div className="flex items-center space-x-2 text-xs text-neutral-500">
                      <span>{activity.author}</span>
                      <span>•</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl shadow-lg p-6 text-white"
          >
            <div className="flex items-center space-x-2 mb-6">
              <SafeIcon icon={FiAward} className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Community Impact</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">This Month</p>
                  <p className="text-2xl font-bold">47</p>
                  <p className="text-white/80 text-sm">New Reviews</p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm">Local Events</p>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-white/80 text-sm">Upcoming</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Business Growth</p>
                  <p className="text-2xl font-bold">23%</p>
                  <p className="text-white/80 text-sm">This Quarter</p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm">Community</p>
                  <p className="text-2xl font-bold">89%</p>
                  <p className="text-white/80 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all font-semibold group"
          >
            Learn More About Our Community
            <SafeIcon icon={FiUsers} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;