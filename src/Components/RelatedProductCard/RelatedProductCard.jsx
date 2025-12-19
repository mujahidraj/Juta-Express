import React from 'react';
import { Link } from 'react-router';


const RelatedProductCard = ({ item }) => {
  if (!item) return null;

  return (
    <Link 
      to={`/products/${item.product_id || item.id}`} 
      className="group block rounded-xl border border-transparent p-2 transition-all hover:border-gray-100 hover:shadow-sm"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={item.product_images?.[0] || ""}
          alt={item.product_name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          {item.brand_name}
        </p>
        
        <h3 className="truncate text-sm font-bold text-gray-900 group-hover:text-amber-600">
          {item.product_name}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-sm font-bold text-gray-900">
            ${item.price?.discounted?.toFixed(2)}
          </span>
          {item.price?.regular > item.price?.discounted && (
            <span className="text-xs text-gray-400 line-through">
              ${item.price.regular.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RelatedProductCard;