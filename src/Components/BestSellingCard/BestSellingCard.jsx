import { Check, Heart, ShoppingCart, Star, Truck } from 'lucide-react';
import React, { useState } from 'react';

const BestSellingCard = ({ items }) => {
  

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(items.available_colors[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const getColorClass = (color) => {
    const map = {
      'Red': 'bg-red-500',
      'Black': 'bg-black',
      'White': 'bg-white border-gray-200',
      'Blue': 'bg-blue-500',
    };
    return map[color] || 'bg-gray-500';
  };
  const discountPercent = Math.round(
    ((items.price.regular - items.price.discounted) / items.price.regular) * 100
  );
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative  bg-gray-100 overflow-hidden">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {items.is_best_seller && (
            <span className="px-2 py-1 text-xs font-bold text-white bg-yellow-500 rounded-md shadow-sm">
              Best Seller
            </span>
          )}
          {items.is_trending && (
            <span className="px-2 py-1 text-xs font-bold text-white bg-purple-600 rounded-md shadow-sm">
              Trending
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-md shadow-sm">
              -{discountPercent}%
            </span>
          )}
        </div>
        <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-colors">
          <Heart size={18} />
        </button>
        <img
          src={items.product_images[currentImgIndex]}
          alt={items.product_name}
          className="w-full h-60 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onMouseEnter={() => items.product_images[1] && setCurrentImgIndex(1)}
          onMouseLeave={() => setCurrentImgIndex(0)}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-linear-to-t from-black/50 to-transparent">
          <div className="flex justify-center gap-2">
            {items.product_images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentImgIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            {items.brand_name}
          </span>
          <div className="flex items-center gap-1 text-amber-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-medium text-gray-600">
              {items.customer_ratings} ({items.customer_reviews.length})
            </span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 truncate">
          {items.product_name}
        </h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">
            {items.price.currency === 'USD' ? '$' : items.price.currency}
            {items.price.discounted.toFixed(2)}
          </span>
          {items.price.regular > items.price.discounted && (
            <span className="text-sm text-gray-400 line-through">
              ${items.price.regular.toFixed(2)}
            </span>
          )}
        </div>
        <div className='flex flex-row justify-between'>
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1.5">Color: <span className='text-gray-900 font-medium'>{selectedColor}</span></p>
            <div className="flex gap-2">
              {items.available_colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border-2 focus:outline-none transition-all ${selectedColor === color ? 'border-gray-900 scale-110' : 'border-transparent hover:scale-110'
                    }`}
                >
                  <div className={`w-full h-full rounded-full border border-black/10 ${getColorClass(color)}`}></div>
                </button>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-xs text-gray-500">Size ({items.size_system})</p>
              <span className="text-[10px] text-blue-600 cursor-pointer hover:underline">Size Guide</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.available_sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-1 text-xs border rounded transition-colors ${selectedSize === size
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'text-gray-600 border-gray-200 hover:border-gray-400'
                    }`}
                >
                  {size.replace('US ', '')}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-gray-500 mb-5 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1">
            <Truck size={12} />
            <span>{items.estimated_delivery_time}</span>
          </div>
          <div className="flex items-center gap-1 text-green-600 font-medium">
            <Check size={12} />
            <span>{items.stock_status}</span>
          </div>
        </div>
        <button
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-gray-900/20"
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>

      </div>
    </div>
  );
};

export default BestSellingCard;