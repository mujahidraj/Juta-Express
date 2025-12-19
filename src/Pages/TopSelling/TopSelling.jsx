import React from 'react';

import BestSellingCard from '../../Components/BestSellingCard/BestSellingCard';
import { Flame, ArrowRight, Trophy } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';

const TopSelling = () => {
  const data = useLoaderData();

  // Logic: Filter the data first to get only best sellers
  // This prevents empty gaps in your grid and allows accurate counting
  const bestSellers = data?.filter((item) => item.is_best_seller) || [];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      
      {/* Optional: Background decoration blob */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-end">
          <div className="relative">
            {/* Badge: Changed to Flame/Orange for "Hot" items */}
            <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-600">
              <Flame size={16} className="fill-orange-600 animate-pulse" />
              <span>Trending Now</span>
            </div>
            
            <h2 className="flex items-center gap-3 text-3xl font-black leading-tight text-gray-900 md:text-4xl">
              Best Selling Collection
              <Trophy size={32} className="hidden text-yellow-400 md:block" />
            </h2>
            
            <p className="mt-3 text-gray-500 max-w-md">
                Our most popular styles, as chosen by you. Grab them before they are gone.
            </p>
          </div>

          <Link 
            to="/best-sellers" 
            className="group flex items-center gap-2 rounded-full border border-gray-200 px-6 py-2 text-sm font-bold text-gray-600 transition-all hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
          >
            Shop All Best Sellers
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid Section */}
        {/* Note: Best Sellers usually look better in larger cards (3 cols) than standard items (4 cols) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.length > 0 ? (
            bestSellers.map((item) => (
              <div key={item.id} className="h-full">
                <BestSellingCard items={item} />
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="col-span-full flex flex-col items-center justify-center rounded-2xl bg-gray-50 py-20 text-center">
              <div className="mb-4 rounded-full bg-gray-200 p-4 text-gray-400">
                <Trophy size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">No Best Sellers Yet</h3>
              <p className="text-gray-500">Check back later for our top rated products.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default TopSelling;