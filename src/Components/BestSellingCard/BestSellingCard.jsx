/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import { Check, Heart, ShoppingCart, Star, Truck } from 'lucide-react';
import { Link } from 'react-router';

const BestSellingCard = ({ items }) => {
  if (!items) return null;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(items.available_colors?.[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const getColorClass = (color) => {
    const map = {
      'Red': 'bg-red-500',
      'Black': 'bg-black',
      'White': 'bg-white border-gray-200',
      'Blue': 'bg-blue-600',
      'Green': 'bg-green-500',
      'Yellow': 'bg-yellow-400',
    };
    return map[color] || 'bg-gray-500';
  };

  const discountPercent = Math.round(
    ((items.price.regular - items.price.discounted) / items.price.regular) * 100
  );
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!selectedSize) {
      alert('Please select a size first!');
      return;
    }
    console.log(`Added ${items.product_name} (Size: ${selectedSize}, Color: ${selectedColor}) to cart.`);
    alert('Added to cart!');
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Added to wishlist');
  };

  const handleColorSelect = (e, color) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColor(color);
  };

  const handleSizeSelect = (e, size) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSize(size);
  };

  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <Link
        to={`/products/${items.product_id}`} 
        className="absolute inset-0 z-0"
        aria-label={`View details for ${items.product_name}`}
      />
      <div className="relative h-72 w-full overflow-hidden bg-gray-100">
        
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
          {items.is_best_seller && (
            <span className="w-fit rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
              Best Seller
            </span>
          )}
          {items.is_trending && (
            <span className="w-fit rounded-full bg-purple-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
              Trending
            </span>
          )}
          {discountPercent > 0 && (
            <span className="w-fit rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
              -{discountPercent}%
            </span>
          )}
        </div>
        <button 
          onClick={handleWishlist}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-400 backdrop-blur-sm transition-colors hover:bg-red-50 hover:text-red-500"
        >
          <Heart size={16} />
        </button>
        <img
          src={items.product_images[currentImgIndex]}
          alt={items.product_name}
          className="h-full w-full object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-110"
          onMouseEnter={() => items.product_images[1] && setCurrentImgIndex(1)}
          onMouseLeave={() => setCurrentImgIndex(0)}
        />
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {items.product_images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${currentImgIndex === idx ? 'w-4 bg-gray-900' : 'w-1.5 bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            {items.brand_name}
          </span>
          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-amber-700">
              {items.customer_ratings}
            </span>
            <span className="text-[10px] text-amber-600/70">
              ({items.customer_reviews.length})
            </span>
          </div>
        </div>
        <h3 className="mb-3 truncate text-lg font-black leading-tight text-gray-900" title={items.product_name}>
          {items.product_name}
        </h3>
        <div className="mb-5 flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900">
            ${items.price.discounted.toFixed(2)}
          </span>
          {items.price.regular > items.price.discounted && (
            <span className="text-sm font-medium text-gray-400 line-through">
              ${items.price.regular.toFixed(2)}
            </span>
          )}
        </div>
        <div className="relative z-20 flex flex-col gap-4">
          
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
            
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Color: <span className="text-gray-900">{selectedColor}</span>
              </span>
              <div className="flex gap-1.5">
                {items.available_colors.map((color) => (
                  <button
                    key={color}
                    onClick={(e) => handleColorSelect(e, color)}
                    className={`group/color flex h-6 w-6 items-center justify-center rounded-full border transition-all ${selectedColor === color ? 'border-gray-900 scale-110' : 'border-transparent hover:scale-110'}`}
                  >
                    <div className={`h-4 w-4 rounded-full shadow-sm ring-1 ring-black/5 ${getColorClass(color)}`}></div>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Size</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {items.available_sizes.slice(0, 4).map((size) => (
                  <button
                    key={size}
                    onClick={(e) => handleSizeSelect(e, size)}
                    className={`flex h-6 min-w-6 items-center justify-center rounded px-1.5 text-[10px] font-bold transition-all ${selectedSize === size
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {size.replace('US ', '')}
                  </button>
                ))}
                {items.available_sizes.length > 4 && (
                    <span className="flex h-6 items-center text-[10px] text-gray-400">+</span>
                )}
              </div>
            </div>
          </div>

          {/* Footer Info & Add to Cart */}
          <div className="flex flex-col gap-3">
             {/* Delivery & Stock */}
            <div className="flex items-center justify-between text-[10px] font-medium text-gray-500">
              <div className="flex items-center gap-1.5">
                <Truck size={12} className="text-gray-400" />
                <span>{items.estimated_delivery_time}</span>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <Check size={12} />
                <span>{items.stock_status}</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={items.stock_status !== 'In Stock'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/10 transition-all hover:bg-orange-600 hover:shadow-orange-600/20 active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BestSellingCard;