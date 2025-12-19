import React from 'react';
import { ShoppingBag, Star } from 'lucide-react'; 
import { useCart } from '../../Contexts/CartProvider/CartProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

// 1. Accept BOTH 'item' and 'items' to prevent errors
const FeaturedShoesCard = ({ item, items }) => {
  
  // 2. Merge them: Use whichever one exists
  const product = item || items;

  // 3. Safety Check: If no data found, render nothing (and log error for debugging)
  if (!product) {
      console.error("FeaturedShoesCard: No data provided! Check parent component.");
      return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addToCart } = useCart();

  const {
    product_id,
    product_name,
    brand_name,
    product_images,
    price,
    customer_ratings,
    is_best_seller,
    is_new_arrival,
    stock_status,
    available_sizes,
    available_colors
  } = product; // <--- Destructure from 'product'

  // Safety checks for price
  const regularPrice = price?.regular || 0;
  const discountedPrice = price?.discounted || 0;

  const discountPercentage = regularPrice > 0 
    ? Math.round(((regularPrice - discountedPrice) / regularPrice) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    // Quick Add Logic (First available option)
    const defaultSize = available_sizes?.[0] || 'Standard';
    const defaultColor = available_colors?.[0] || 'Standard';

    addToCart(product, defaultSize, defaultColor);
    Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product Added',
                text: `${product.product_name} added to cart.`,
                showConfirmButton: false,
                timer: 1500,
                toast: true ,
              }); 
        
  };

  return (
    <div className="group relative h-112.5 w-full max-w-sm overflow-hidden rounded-3xl bg-gray-900 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <Link to={`/products/${product_id}`} className="block h-full w-full">
        
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={product_images?.[0] || "https://via.placeholder.com/400"}
            alt={product_name}
            className="h-full w-full object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
        </div>

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {is_new_arrival && (
            <span className="w-fit rounded-full bg-blue-600/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
              New
            </span>
          )}
          {is_best_seller && (
            <span className="w-fit rounded-full bg-amber-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-md">
              Best Seller
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="w-fit rounded-full bg-red-600/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md border border-white/10">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span>{customer_ratings}</span>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 pb-8 transition-transform duration-300">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-400">
            {brand_name}
          </p>
          <h3 className="mb-2 max-w-[70%] text-2xl font-black leading-tight text-white">
            {product_name}
          </h3>
          
          <div className="flex flex-col">
            {discountPercentage > 0 && (
              <span className="text-sm font-medium text-gray-400 line-through">
                ${regularPrice.toFixed(2)}
              </span>
            )}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">
                ${discountedPrice.toFixed(2)}
              </span>
              {stock_status !== 'In Stock' && (
                <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-400">
                  {stock_status}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
      
      {/* Add to Cart Button */}
      <button 
        onClick={handleAddToCart}
        disabled={stock_status !== 'In Stock'}
        className="group/btn absolute bottom-6 right-6 z-20 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white text-black shadow-lg shadow-black/20 transition-all duration-300 hover:w-36 hover:bg-amber-400 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <div className="flex items-center justify-center gap-2 px-4">
          <ShoppingBag size={20} className="shrink-0" />
          <span className="whitespace-nowrap text-sm font-bold opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 hidden group-hover/btn:block">
            Add to Cart
          </span>
        </div>
      </button>

    </div>
  );
};

export default FeaturedShoesCard;