import React, { useMemo } from 'react';
import { Search, ChevronDown, Filter, X } from 'lucide-react';

const FilterBar = ({ 
  // New Prop: The full list of products to generate options from
  data = [], 

  searchQuery, 
  category, 
  size, 
  sortBy, 
  resultCount,
  
  onSearchChange,
  onCategoryChange,
  onSizeChange,
  onSortChange,
  onClearFilters,

  themeColor = 'amber' 
}) => {

  const hasActiveFilters = searchQuery !== '' || category !== 'all' || size !== 'all';

  const focusColorClass = themeColor === 'orange' 
    ? 'focus:border-orange-500 focus:ring-orange-500 hover:border-orange-500' 
    : 'focus:border-amber-500 focus:ring-amber-500 hover:border-amber-500';

  // --- DYNAMIC DATA EXTRACTION ---

  // 1. Get Unique Categories from data
  const uniqueCategories = useMemo(() => {
    const allCats = new Set();
    data.forEach(product => {
      // Handle if category is an Array ["Men", "Running"] or String "Running"
      if (Array.isArray(product.category)) {
        product.category.forEach(c => allCats.add(c));
      } else if (product.category) {
        allCats.add(product.category);
      }
    });
    return Array.from(allCats).sort();
  }, [data]);

  // 2. Get Unique Sizes from data
  const uniqueSizes = useMemo(() => {
    const allSizes = new Set();
    data.forEach(product => {
      if (product.available_sizes && Array.isArray(product.available_sizes)) {
        product.available_sizes.forEach(s => allSizes.add(s));
      }
    });
    // Sort sizes naturally (Numeric sort usually better for sizes)
    return Array.from(allSizes).sort((a, b) => {
        // Try to sort numbers (38, 39) correctly, fallback to string sort (US 7, US 8)
        const numA = parseFloat(a.replace(/^\D+/g, '')); // Remove non-digits
        const numB = parseFloat(b.replace(/^\D+/g, ''));
        return numA - numB || a.localeCompare(b);
    });
  }, [data]);

  return (
    <div className="sticky top-0 z-30 mb-10 bg-white/95 py-4 backdrop-blur-md border-b border-gray-100">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Search Input */}
        <div className="relative w-full lg:w-96">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </div>
          <input 
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`block w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm font-medium text-gray-900 outline-none transition-all focus:bg-white focus:ring-1 ${focusColorClass}`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          
          {/* Dynamic Category Filter */}
          <div className="relative flex-1 lg:flex-none">
            <select 
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className={`w-full appearance-none rounded-xl border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm font-bold text-gray-700 transition-all focus:outline-none focus:ring-1 lg:w-40 ${focusColorClass}`}
            >
              <option value="all">All Categories</option>
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Dynamic Size Filter */}
          <div className="relative flex-1 lg:flex-none">
            <select 
              value={size}
              onChange={(e) => onSizeChange(e.target.value)}
              className={`w-full appearance-none rounded-xl border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm font-bold text-gray-700 transition-all focus:outline-none focus:ring-1 lg:w-32 ${focusColorClass}`}
            >
              <option value="all">All Sizes</option>
              {uniqueSizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Sort By (Static is usually fine here) */}
          <div className="relative flex-1 lg:flex-none">
            <select 
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className={`w-full appearance-none rounded-xl border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm font-bold text-gray-700 transition-all focus:outline-none focus:ring-1 lg:w-48 ${focusColorClass}`}
            >
              <option value="newest">Sort: Newest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        
          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button 
              onClick={onClearFilters}
              className="flex items-center justify-center rounded-xl border border-red-200 bg-red-50 p-2.5 text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors"
              title="Clear Filters"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
          <Filter size={12} />
          <span>Showing {resultCount} Results</span>
      </div>
    </div>
  );
};

export default FilterBar;