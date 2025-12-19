import React from 'react';
import FeaturedShoesCard from '../FeaturedShoesCard/FeaturedShoesCard';
import { Link } from 'react-router';
import { FiArrowRight } from 'react-icons/fi';

const FeaturedShoes = ({ data }) => {
  return (
    <div className='flex md:mt-20 flex-col'>
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-600">
          Editor's Pick
        </span>
        <h2 className="mb-4 text-4xl font-black uppercase text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 md:text-5xl">
          Featured Product
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-500">
          Hand-picked for the season. Discover the standout silhouette that perfectly bridges the gap between performance and street style.
        </p>
      </div>


      
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-10'>
        {
          data.slice(0, 20).map(item => item.is_featured && <FeaturedShoesCard key={item.product_id} item={item}></FeaturedShoesCard>)
        }
      </div>
     
      <div className="my-16 px-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-gray-900 px-8 py-12 shadow-2xl md:flex-row md:px-16">
        
        {/* Left: Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="mb-3 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
            Still haven't found <span className="text-amber-500">your style?</span>
          </h2>
          <p className="text-lg text-gray-400">
            Don't settle for ordinary. Browse our full catalog of 500+ exclusive sneakers and find the pair that speaks to you.
          </p>
        </div>

        {/* Right: Button */}
        <Link 
          to="/collections" 
          className="group flex shrink-0 items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-bold uppercase text-black transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          Explore More Shoes
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
        
      </div>
    </div>
    </div>
  );
};

export default FeaturedShoes;