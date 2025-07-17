import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import BusinessCard from '../components/BusinessCard';

const { FiAward, FiStar, FiTrendingUp, FiCrown } = FiIcons;

const FeaturedSponsors = () => {
  const sponsorTiers = [
    {
      name: 'Premium Sponsors',
      icon: FiCrown,
      color: 'from-yellow-500 to-orange-500',
      businesses: [
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
          sponsored: true,
          tier: 'premium'
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
          sponsored: true,
          tier: 'premium'
        }
      ]
    },
    {
      name: 'Featured Sponsors',
      icon: FiStar,
      color: 'from-purple-500 to-pink-500',
      businesses: [
        {
          id: 6,
          name: "Tech Solutions Plus",
          category: "Technology",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          rating: 4.8,
          reviews: 42,
          address: "987 Tech Blvd, Smyrna, GA",
          phone: "(770) 555-0987",
          hours: "Open until 5 PM",
          description: "Computer repair and IT services for home and business.",
          sponsored: true,
          tier: 'featured'
        },
        {
          id: 7,
          name: "Smyrna Dental Care",
          category: "Healthcare",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          rating: 4.9,
          reviews: 87,
          address: "456 Health Way, Smyrna, GA",
          phone: "(770) 555-0456",
          hours: "Open until 6 PM",
          description: "Comprehensive dental care for the whole family.",
          sponsored: true,
          tier: 'featured'
        },
        {
          id: 8,
          name: "Elite Fitness Center",
          category: "Health & Fitness",
          image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          rating: 4.6,
          reviews: 134,
          address: "789 Fitness Blvd, Smyrna, GA",
          phone: "(770) 555-0789",
          hours: "Open 24 hours",
          description: "Premium fitness facility with expert trainers and modern equipment.",
          sponsored: true,
          tier: 'featured'
        }
      ]
    }
  ];

  const sponsorshipBenefits = [
    {
      icon: FiTrendingUp,
      title: 'Increased Visibility',
      description: 'Premium placement in search results and directory listings'
    },
    {
      icon: FiStar,
      title: 'Featured Badges',
      description: 'Special sponsor badges that highlight your business'
    },
    {
      icon: FiAward,
      title: 'Priority Support',
      description: 'Dedicated customer service and business support'
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
            Featured Sponsors
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover exceptional businesses that support our community and receive premium placement
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        {sponsorTiers.map((tier, tierIndex) => (
          <motion.div
            key={tier.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: tierIndex * 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <div className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${tier.color} rounded-full text-white`}>
                <SafeIcon icon={tier.icon} className="w-6 h-6" />
                <span className="text-lg font-semibold">{tier.name}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier.businesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: (tierIndex * 0.2) + (index * 0.1), duration: 0.6 }}
                >
                  <BusinessCard business={business} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Sponsorship Benefits */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-neutral-800 mb-8 text-center">
            Sponsorship Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorshipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mb-4">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-display font-bold mb-4">
            Ready to Become a Featured Sponsor?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join our featured sponsors and get premium visibility for your business. Reach more customers and grow your local presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-neutral-50 transition-colors font-semibold">
              View Pricing Plans
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-semibold">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedSponsors;