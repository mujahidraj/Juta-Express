import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BestSellingCard from "../BestSellingCard/BestSellingCard";
import SingleBest from '../SingleBest/SingleBest';

const BestSelling = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const newData = data.filter(items => items.is_best_seller === true)


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {

      if (prevIndex >= newData.length - itemsToShow) return 0;
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {

      if (prevIndex === 0) return newData.length - itemsToShow;
      return prevIndex - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, itemsToShow, newData.length]);

  if (!newData || newData.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12 text-center">

  <span className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-600">
    #1 Customer Favorites
  </span>
  <h2 className="mb-4 text-4xl font-black uppercase text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600 md:text-5xl">
    Our Best Selling
  </h2>
  <p className="mx-auto max-w-2xl text-lg text-gray-500">
    Don't just take our word for it. Explore the top-rated gear that thousands of athletes trust for their daily grind.
  </p>
</div>
      {
        <SingleBest data={newData[0]}></SingleBest>
      }
      <div className="relative group">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {newData.map((item) => (
              <div key={item.product_id} className="shrink-0 px-2 box-border" style={{ width: `${100 / itemsToShow}%` }}
              > <BestSellingCard items={item} /> </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(newData.length - itemsToShow + 1) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-gray-800 w-6' : 'bg-gray-300 w-2'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;