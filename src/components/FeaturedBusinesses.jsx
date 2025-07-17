import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMapPin, FiClock, FiPhone, FiExternalLink } = FiIcons;

const FeaturedBusinesses = () => {
  const featuredBusinesses = [
    {
      id: 1,
      name: "Smyrna Diner",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviews: 124,
      address: "123 Main St, Smyrna, GA",
      phone: "(770) 555-0123",
      hours: "Open until 9 PM",
      description: "Classic American diner with homestyle cooking and friendly service.",
      badge: "Editor's Choice"
    },
    {
      id: 2,
      name: "Smyrna Auto Repair",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviews: 89,
      address: "456 Oak Ave, Smyrna, GA",
      phone: "(770) 555-0456",
      hours: "Open until 6 PM",
      description: "Trusted automotive repair with 20+ years of experience.",
      badge: "Customer Favorite"
    },
    {
      id: 3,
      name: "Bloom Flower Shop",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      reviews: 67,
      address: "789 Elm St, Smyrna, GA",
      phone: "(770) 555-0789",
      hours: "Open until 7 PM",
      description: "Beautiful fresh flowers and custom arrangements for all occasions.",
      badge: "New & Notable"
    }
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Editor's Choice": return "bg-primary-500";
      case "Customer Favorite": return "bg-secondary-500";
      case "New & Notable": return "bg-accent-500";
      default: return "bg-neutral-500";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-4">
            Featured Businesses
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover exceptional local businesses that make Smyrna special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
            >
              <div className="relative">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 ${getBadgeColor(business.badge)} text-white text-sm font-medium rounded-full`}>
                  {business.badge}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">{business.rating}</span>
                    <span className="text-xs text-neutral-500">({business.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-neutral-800">{business.name}</h3>
                  <span className="text-sm text-primary-600 font-medium">{business.category}</span>
                </div>
                
                <p className="text-neutral-600 text-sm mb-4">{business.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                    <span>{business.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <SafeIcon icon={FiPhone} className="w-4 h-4" />
                    <span>{business.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-accent-600">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span>{business.hours}</span>
                  </div>
                </div>

                <Link
                  to={`/business/${business.id}`}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all font-medium group"
                >
                  View Details
                  <SafeIcon icon={FiExternalLink} className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/sponsors"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all font-semibold group"
          >
            View All Featured Businesses
            <SafeIcon icon={FiExternalLink} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;