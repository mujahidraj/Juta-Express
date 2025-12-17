import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Ensure you have lucide-react or use standard icons
import BestSellingCard from "../BestSellingCard/BestSellingCard";

const BestSelling = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // 1. Handle Responsiveness (Update items to show based on screen width)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet
      } else {
        setItemsToShow(3); // Desktop (matches your original grid)
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Next Slide Logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If we are at the end, loop back to the start (0)
      if (prevIndex >= data.length - itemsToShow) return 0;
      return prevIndex + 1;
    });
  };

  // 3. Previous Slide Logic
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // If we are at the start, go to the very end
      if (prevIndex === 0) return data.length - itemsToShow;
      return prevIndex - 1;
    });
  };

  // 4. Auto-Play Logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Speed: 3000ms = 3 seconds

    // Cleanup interval on unmount or when user interacts
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, itemsToShow, data.length]);

  // Safety check if data is missing
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-3">Our Best Selling</h2>
      <h2 className="mb-10 text-xl text-center text-gray-600 max-w-2xl mx-auto">
        Grab our best selling product before sold out and get the opportunity to become our best customer award
      </h2>

      {/* --- Carousel Container --- */}
      <div className="relative group">
        
        {/* Left Arrow Button */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200"
        >
          <ChevronLeft size={24} />
        </button>

        {/* The Sliding Window (Overflow Hidden) */}
        <div className="overflow-hidden">
          {/* The Moving Track */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {data.map((item, index) => (
              <div 
                key={item.product_id || index} 
                className="shrink-0 px-2 box-border"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                {/* Pass the item to your existing card component */}
                <BestSellingCard items={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      {/* Optional: Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
         {/* Only show a dot for every possible 'page' or simple group */}
         {Array.from({ length: Math.ceil(data.length - itemsToShow + 1) }).map((_, idx) => (
           <button
             key={idx}
             onClick={() => setCurrentIndex(idx)}
             className={`h-2 rounded-full transition-all ${
               currentIndex === idx ? 'bg-gray-800 w-6' : 'bg-gray-300 w-2'
             }`}
           />
         ))}
      </div>
    </div>
  );
};

export default BestSelling;