import React, { useState } from 'react';
import { Flame, Trophy, ArrowUpDown } from 'lucide-react';
import FilterBar from '../../Components/FilterBar/FilterBar';
import { useLoaderData } from 'react-router';
import ProductCard from '../../Components/ProductCard/ProductCard';

const TopSelling = () => {
  const data = useLoaderData();

  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [size, setSize] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredData = (data || [])
    .filter(item => item.is_best_seller)
    .filter(item => {
      const name = item.name || '';
      const cat = item.category || '';
      const itemSizes = item.size || [];

      const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'all' || cat.toLowerCase() === category.toLowerCase();
      const matchesSize = size === 'all' || (itemSizes.includes && itemSizes.includes(size));

      return matchesSearch && matchesCategory && matchesSize;
    })
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const clearFilters = () => {
    setSearchQuery('');
    setCategory('all');
    setSize('all');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <section className="bg-orange-50/50 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center px-4">

          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
            <Flame size={14} className="animate-pulse" />
            <span>Trending Now</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Best Selling Collection
          </h1>

          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-linear-to-r from-orange-400 to-red-500"></div>

          <p className="mt-6 text-lg text-gray-500">
            Our most popular styles, as chosen by you. Grab them before they're gone.
          </p>
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">

        <FilterBar
          searchQuery={searchQuery}
          category={category}
          size={size}
          sortBy={sortBy}
          resultCount={filteredData.length}
          onSearchChange={setSearchQuery}
          onCategoryChange={setCategory}
          onSizeChange={setSize}
          onSortChange={setSortBy}
          onClearFilters={clearFilters}
          themeColor="orange"
        />
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredData.map((item) => (
              <div key={item.id} className="transition-opacity duration-300 ease-in-out hover:opacity-100">
                <ProductCard items={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl bg-gray-50 p-8 text-center border-2 border-dashed border-gray-200">
            <div className="mb-4 rounded-full bg-orange-100 p-4">
              <Trophy className="text-orange-500" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No products found</h3>
            <p className="text-gray-500">Try changing your filters or check back later.</p>
            <button onClick={clearFilters} className="mt-4 text-sm font-bold text-orange-600 hover:underline">
              Clear all filters
            </button>
          </div>
        )}
        {filteredData.length > 0 && (
          <div className="mt-16 flex justify-center">
            <button className="rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/25">
              Load More Products
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default TopSelling;