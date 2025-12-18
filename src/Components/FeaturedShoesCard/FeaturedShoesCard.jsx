import React from 'react';

const FeaturedShoesCard = ({ item }) => {
  if (!item) return null;

  const {
    product_name,
    brand_name,
    product_images,
    price,
    customer_ratings,
    is_best_seller,
    is_new_arrival,
    stock_status,
  } = item;

  // Calculate discount for the badge
  const discountPercentage = Math.round(
    ((price.regular - price.discounted) / price.regular) * 100
  );

  return (
    <div className="group relative h-112.5 w-full max-w-sm overflow-hidden rounded-3xl bg-gray-900 shadow-lg transition-all hover:shadow-2xl">
      
      {/* 1. Full Background Image with Zoom Effect */}
      <img
        src={product_images[0]}
        alt={product_name}
        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
      />

      {/* 2. Dark Gradient Overlay (for text readability) */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

      {/* 3. Top Badges (Absolute Position) */}
      <div className="absolute left-4 top-4 flex flex-col gap-2">
        {is_new_arrival && (
          <span className="w-fit rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
            New Arrival
          </span>
        )}
        {is_best_seller && (
          <span className="w-fit rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm backdrop-blur-md">
            Best Seller
          </span>
        )}
        {discountPercentage > 0 && (
          <span className="w-fit rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
            -{discountPercentage}%
          </span>
        )}
      </div>

      {/* 4. Top Right: Rating Pill */}
      <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
        <span className="text-yellow-400">★</span>
        <span>{customer_ratings}</span>
      </div>

      {/* 5. Bottom Content Area */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
        
        {/* Brand */}
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-300 opacity-80">
          {brand_name}
        </p>
        
        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold leading-tight text-white">
          {product_name}
        </h3>

        {/* Price & Action Row */}
        <div className="flex items-end justify-between">
          
          {/* Prices */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 line-through">
              ${price.regular.toFixed(2)}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">
                ${price.discounted.toFixed(2)}
              </span>
              {stock_status !== 'In Stock' && (
                <span className="text-xs text-red-400">({stock_status})</span>
              )}
            </div>
          </div>

          {/* Add to Cart Button (Expands on Hover) */}
          <button className="group/btn flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-300 hover:w-32 hover:bg-yellow-400">
            <div className="flex items-center gap-2 px-4">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {/* Text (Hidden by default, shown on hover) */}
              <span className="whitespace-nowrap text-sm font-bold opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100">
                Buy Now
              </span>
            </div>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedShoesCard;