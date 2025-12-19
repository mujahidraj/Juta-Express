import React from 'react';

import { ArrowRight, Sparkles } from 'lucide-react'; 
import NewestArrivalCard from '../../Components/NewestArrivalCard/NewestArrivalCard';
import { Link, useLoaderData } from 'react-router';

const NewArrival = () => {
  const data = useLoaderData();

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="relative">
            <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-600">
              <Sparkles size={16} />
              <span>Just Dropped</span>
            </div>
            <h2 className="text-3xl font-black leading-tight text-gray-900 md:text-4xl">
              Newest Arrivals
            </h2>
            <p className="mt-3 text-gray-500 max-w-md">
                Our most popular styles, as chosen by you. Grab them before they are gone.
            </p>
            
          </div>
          <Link 
            to="/all-products" 
            className="group flex items-center gap-2 text-sm font-bold text-gray-600 transition-colors hover:text-amber-600"
          >
            View Full Collection
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 mx-auto gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data && data.length > 0 ? (
            data.map((items) => (
              items.is_new_arrival && <NewestArrivalCard key={items.id} items={items} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No new arrivals found at the moment.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default NewArrival;