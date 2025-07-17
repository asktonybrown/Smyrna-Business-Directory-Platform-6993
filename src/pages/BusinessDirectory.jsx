import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import BusinessCard from '../components/BusinessCard';
import SearchFilters from '../components/SearchFilters';

const { FiSearch, FiFilter, FiMap, FiList, FiGrid } = FiIcons;

const BusinessDirectory = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    rating: '',
    hours: '',
    location: ''
  });

  // Mock business data
  const businesses = [
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
      sponsored: true
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
      sponsored: false
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
      sponsored: true
    },
    {
      id: 4,
      name: "Fitness First Gym",
      category: "Health & Fitness",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      reviews: 156,
      address: "321 Pine St, Smyrna, GA",
      phone: "(770) 555-0321",
      hours: "Open 24 hours",
      description: "State-of-the-art fitness facility with personal training available.",
      sponsored: false
    },
    {
      id: 5,
      name: "Smyrna Coffee House",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
      reviews: 93,
      address: "654 Maple Ave, Smyrna, GA",
      phone: "(770) 555-0654",
      hours: "Open until 8 PM",
      description: "Cozy coffee shop with artisan drinks and fresh pastries.",
      sponsored: false
    },
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
      sponsored: true
    }
  ];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         business.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !filters.category || business.category === filters.category;
    const matchesRating = !filters.rating || business.rating >= parseFloat(filters.rating);
    
    return matchesSearch && matchesCategory && matchesRating;
  });

  // Sort sponsored businesses first
  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    if (a.sponsored && !b.sponsored) return -1;
    if (!a.sponsored && b.sponsored) return 1;
    return 0;
  });

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
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-4">
            Business Directory
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover and connect with local businesses in Smyrna, Georgia
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search businesses, categories, or services..."
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors font-medium"
            >
              <SafeIcon icon={FiFilter} className="w-5 h-5 mr-2" />
              Filters
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-neutral-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-800'
                }`}
              >
                <SafeIcon icon={FiGrid} className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-800'
                }`}
              >
                <SafeIcon icon={FiList} className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <SearchFilters filters={filters} setFilters={setFilters} />
          )}
        </motion.div>

        {/* Results Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h2 className="text-xl font-semibold text-neutral-800">
              {sortedBusinesses.length} businesses found
            </h2>
            {searchQuery && (
              <p className="text-neutral-600">
                Results for "{searchQuery}"
              </p>
            )}
          </div>
          <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
            <SafeIcon icon={FiMap} className="w-5 h-5" />
            <span>Map View</span>
          </button>
        </motion.div>

        {/* Business Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {sortedBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <BusinessCard 
                business={business} 
                viewMode={viewMode}
              />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sortedBusinesses.length === 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiSearch} className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">No businesses found</h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilters({ category: '', rating: '', hours: '', location: '' });
              }}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BusinessDirectory;