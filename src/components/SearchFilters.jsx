import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX } = FiIcons;

const SearchFilters = ({ filters, setFilters }) => {
  const categories = [
    'All Categories',
    'Restaurant',
    'Retail',
    'Automotive',
    'Health & Fitness',
    'Technology',
    'Beauty & Wellness',
    'Professional Services',
    'Home & Garden',
    'Entertainment'
  ];

  const ratings = [
    { value: '', label: 'Any Rating' },
    { value: '4.5', label: '4.5+ Stars' },
    { value: '4.0', label: '4.0+ Stars' },
    { value: '3.5', label: '3.5+ Stars' },
    { value: '3.0', label: '3.0+ Stars' }
  ];

  const hours = [
    { value: '', label: 'Any Hours' },
    { value: 'open_now', label: 'Open Now' },
    { value: 'open_24h', label: 'Open 24 Hours' },
    { value: 'weekend', label: 'Open Weekends' }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value === 'All Categories' ? '' : value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      rating: '',
      hours: '',
      location: ''
    });
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="border-t border-neutral-200 pt-6 mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Category
          </label>
          <select
            value={filters.category || 'All Categories'}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Rating
          </label>
          <select
            value={filters.rating}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {ratings.map(rating => (
              <option key={rating.value} value={rating.value}>
                {rating.label}
              </option>
            ))}
          </select>
        </div>

        {/* Hours Filter */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Hours
          </label>
          <select
            value={filters.hours}
            onChange={(e) => handleFilterChange('hours', e.target.value)}
            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {hours.map(hour => (
              <option key={hour.value} value={hour.value}>
                {hour.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            placeholder="Enter area or zip code"
            className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Clear Filters */}
      <div className="flex justify-end mt-4">
        <button
          onClick={clearFilters}
          className="flex items-center space-x-2 px-4 py-2 text-neutral-600 hover:text-neutral-800 transition-colors"
        >
          <SafeIcon icon={FiX} className="w-4 h-4" />
          <span>Clear Filters</span>
        </button>
      </div>
    </motion.div>
  );
};

export default SearchFilters;