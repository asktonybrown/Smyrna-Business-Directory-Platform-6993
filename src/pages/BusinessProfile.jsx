import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMapPin, FiPhone, FiClock, FiGlobe, FiMail, FiShare2, FiHeart, FiCamera, FiMessageSquare, FiThumbsUp } = FiIcons;

const BusinessProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock business data - in real app, this would come from API
  const business = {
    id: 1,
    name: "Smyrna Diner",
    category: "Restaurant",
    rating: 4.8,
    reviews: 124,
    address: "123 Main St, Smyrna, GA 30080",
    phone: "(770) 555-0123",
    website: "www.smyrnadiner.com",
    email: "info@smyrnadiner.com",
    hours: {
      monday: "6:00 AM - 9:00 PM",
      tuesday: "6:00 AM - 9:00 PM",
      wednesday: "6:00 AM - 9:00 PM",
      thursday: "6:00 AM - 9:00 PM",
      friday: "6:00 AM - 10:00 PM",
      saturday: "7:00 AM - 10:00 PM",
      sunday: "7:00 AM - 9:00 PM"
    },
    description: "Family-owned diner serving classic American comfort food since 1985. Known for our homestyle cooking, friendly service, and welcoming atmosphere that makes everyone feel at home.",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    specialties: ["Breakfast All Day", "Homemade Pie", "Local Favorite", "Family Friendly"],
    priceRange: "$$",
    sponsored: true
  };

  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2024-02-10",
      text: "Amazing breakfast and friendly service! The pancakes are the best in town. Highly recommend this place to anyone looking for authentic comfort food.",
      helpful: 12
    },
    {
      id: 2,
      author: "Mike R.",
      rating: 4,
      date: "2024-02-08",
      text: "Great local spot with consistent quality. The staff always remembers our order and makes us feel welcome. Perfect for family dining.",
      helpful: 8
    },
    {
      id: 3,
      author: "Jennifer L.",
      rating: 5,
      date: "2024-02-05",
      text: "This diner has been our go-to place for years. The atmosphere is cozy and the food is always fresh. Love supporting this local business!",
      helpful: 15
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'photos', label: 'Photos' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-8 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="relative h-64 md:h-80">
            <img
              src={business.images[0]}
              alt={business.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            {business.sponsored && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Sponsored
              </div>
            )}
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{business.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400" />
                  <span className="text-lg font-medium">{business.rating}</span>
                  <span className="text-white/80">({business.reviews} reviews)</span>
                </div>
                <span className="text-primary-200 font-medium">{business.category}</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                <SafeIcon icon={FiShare2} className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                <SafeIcon icon={FiHeart} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg mb-6"
            >
              <div className="flex border-b border-neutral-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:text-neutral-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-neutral-800 mb-3">About</h2>
                      <p className="text-neutral-600 leading-relaxed">{business.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-3">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {business.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-3">Price Range</h3>
                      <span className="text-neutral-600">{business.priceRange} - Moderate</span>
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-neutral-800">Customer Reviews</h2>
                      <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                        Write Review
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-neutral-200 pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-neutral-800">{review.author}</span>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <SafeIcon
                                    key={i}
                                    icon={FiStar}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? 'text-yellow-400' : 'text-neutral-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-neutral-500">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-neutral-600 mb-2">{review.text}</p>
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-sm text-neutral-500 hover:text-neutral-700">
                              <SafeIcon icon={FiThumbsUp} className="w-4 h-4" />
                              <span>Helpful ({review.helpful})</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Photos Tab */}
                {activeTab === 'photos' && (
                  <div>
                    <h2 className="text-xl font-semibold text-neutral-800 mb-4">Photo Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {business.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image}
                            alt={`${business.name} photo ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <SafeIcon icon={FiCamera} className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Tab */}
                {activeTab === 'contact' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-neutral-800">Contact Information</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <SafeIcon icon={FiMapPin} className="w-5 h-5 text-neutral-400" />
                        <div>
                          <p className="font-medium text-neutral-800">Address</p>
                          <p className="text-neutral-600">{business.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <SafeIcon icon={FiPhone} className="w-5 h-5 text-neutral-400" />
                        <div>
                          <p className="font-medium text-neutral-800">Phone</p>
                          <a href={`tel:${business.phone}`} className="text-primary-600 hover:text-primary-700">
                            {business.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <SafeIcon icon={FiGlobe} className="w-5 h-5 text-neutral-400" />
                        <div>
                          <p className="font-medium text-neutral-800">Website</p>
                          <a href={`https://${business.website}`} className="text-primary-600 hover:text-primary-700">
                            {business.website}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <SafeIcon icon={FiMail} className="w-5 h-5 text-neutral-400" />
                        <div>
                          <p className="font-medium text-neutral-800">Email</p>
                          <a href={`mailto:${business.email}`} className="text-primary-600 hover:text-primary-700">
                            {business.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-neutral-200">
                      <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all font-medium">
                        <SafeIcon icon={FiMessageSquare} className="w-5 h-5" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-6"
            >
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiClock} className="w-5 h-5 text-neutral-400" />
                  <div>
                    <p className="font-medium text-neutral-800">Hours Today</p>
                    <p className="text-sm text-accent-600">Open until 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 text-neutral-400" />
                  <div>
                    <p className="font-medium text-neutral-800">Call Now</p>
                    <a href={`tel:${business.phone}`} className="text-sm text-primary-600 hover:text-primary-700">
                      {business.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Hours</h3>
              <div className="space-y-2">
                {Object.entries(business.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-neutral-600 capitalize">{day}</span>
                    <span className="text-sm text-neutral-800">{hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessProfile;