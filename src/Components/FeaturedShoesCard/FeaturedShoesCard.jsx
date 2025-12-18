import React from 'react';

const FeaturedShoesCard = ({ item }) => {
  // 1. Safety check: prevent crashing if data is missing
  if (!item) return null;

  // 2. Destructure the necessary data from the prop
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

  // 3. Helper: Calculate discount percentage
  const discountPercentage = Math.round(
    ((price.regular - price.discounted) / price.regular) * 100
  );

  return (
    <div className="group relative max-w-sm rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* --- Image Section --- */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gray-100">
        <img
          src={product_images[0]}
          alt={product_name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges (Positioned Absolute) */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {is_best_seller && (
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black shadow-sm">
              Best Seller
            </span>
          )}
          {is_new_arrival && (
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
              New
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Wishlist Button (Optional UI element) */}
        <button className="absolute right-3 top-3 rounded-full bg-white p-2 text-gray-500 shadow-sm transition-colors hover:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* --- Content Section --- */}
      <div className="p-5">
        
        {/* Brand & Rating Row */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase text-gray-400">
            {brand_name}
          </span>
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-bold text-gray-700">{customer_ratings}</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="mb-1 text-lg font-bold leading-tight text-gray-900 line-clamp-1">
          {product_name}
        </h3>

        {/* Stock Status (Subtle) */}
        <p className={`text-xs mb-4 ${stock_status === 'In Stock' ? 'text-green-600' : 'text-red-500'}`}>
          {stock_status}
        </p>

        {/* Price & Action Row */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 line-through">
              ${price.regular.toFixed(2)}
            </span>
            <span className="text-2xl font-bold text-gray-900">
              ${price.discounted.toFixed(2)}
            </span>
          </div>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedShoesCard;