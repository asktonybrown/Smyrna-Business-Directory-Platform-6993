import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiMapPin, FiClock, FiUsers, FiExternalLink, FiTrendingUp } = FiIcons;

const EventsNews = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Smyrna Business Networking Night',
      date: '2024-02-15',
      time: '6:00 PM - 9:00 PM',
      location: 'Smyrna Community Center',
      address: '123 Community Way, Smyrna, GA',
      organizer: 'Smyrna Chamber of Commerce',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Join local business owners for networking, refreshments, and community building.',
      attendees: 45,
      category: 'Networking'
    },
    {
      id: 2,
      title: 'Local Farmers Market',
      date: '2024-02-17',
      time: '8:00 AM - 2:00 PM',
      location: 'Smyrna Market Square',
      address: '456 Market St, Smyrna, GA',
      organizer: 'Smyrna Farmers Association',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Fresh produce, local crafts, and community vendors every Saturday.',
      attendees: 200,
      category: 'Community'
    },
    {
      id: 3,
      title: 'Small Business Workshop',
      date: '2024-02-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Smyrna Public Library',
      address: '789 Library Lane, Smyrna, GA',
      organizer: 'Small Business Development Center',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Learn digital marketing strategies and business growth techniques.',
      attendees: 30,
      category: 'Education'
    }
  ];

  const communityNews = [
    {
      id: 1,
      title: 'New Restaurant Opens on Main Street',
      date: '2024-02-10',
      excerpt: 'Bella Vista Italian Restaurant brings authentic Italian cuisine to downtown Smyrna.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Business News'
    },
    {
      id: 2,
      title: 'Smyrna Guide Reaches 500 Business Listings',
      date: '2024-02-08',
      excerpt: 'Our local directory continues to grow, connecting more businesses with the community.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Platform News'
    },
    {
      id: 3,
      title: 'Local Business Wins State Award',
      date: '2024-02-05',
      excerpt: 'Tech Solutions Plus recognized for outstanding customer service and community impact.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Awards'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Networking': return 'bg-blue-100 text-blue-800';
      case 'Community': return 'bg-green-100 text-green-800';
      case 'Education': return 'bg-purple-100 text-purple-800';
      case 'Business News': return 'bg-orange-100 text-orange-800';
      case 'Platform News': return 'bg-primary-100 text-primary-800';
      case 'Awards': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
            Events & News
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Stay connected with what's happening in the Smyrna business community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-2 mb-6">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl font-display font-bold text-neutral-800">
                  Upcoming Events
                </h2>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                            {event.category}
                          </span>
                          <div className="flex items-center space-x-1 text-sm text-neutral-500">
                            <SafeIcon icon={FiUsers} className="w-4 h-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                          {event.title}
                        </h3>
                        
                        <p className="text-neutral-600 text-sm mb-4">
                          {event.description}
                        </p>
                        
                        <div className="space-y-2 text-sm text-neutral-600">
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiClock} className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-sm text-neutral-500">
                            By {event.organizer}
                          </span>
                          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all text-sm font-medium">
                            Learn More
                            <SafeIcon icon={FiExternalLink} className="ml-1 w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Community News Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-secondary-500" />
                <h2 className="text-2xl font-display font-bold text-neutral-800">
                  Community News
                </h2>
              </div>

              <div className="space-y-6">
                {communityNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                      <h3 className="text-lg font-semibold text-neutral-800 mt-2 mb-2">
                        {news.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-3">
                        {news.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-neutral-500">
                          {new Date(news.date).toLocaleDateString()}
                        </span>
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                          Read More
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-display font-bold mb-4">
            Have an Event to Share?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Let the Smyrna community know about your upcoming business events, workshops, or community gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors font-semibold">
              Submit Event
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-semibold">
              Newsletter Signup
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventsNews;