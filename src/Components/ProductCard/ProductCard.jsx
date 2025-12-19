/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Check, Heart, ShoppingCart, Star, Truck, Share2 } from 'lucide-react'; 
import { useCart } from '../../Contexts/CartProvider/CartProvider';
import { useWishlist } from '../../Contexts/WishListProvider/WishListProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ProductCard = ({ items }) => {
  if (!items) return null;

  const { addToCart } = useCart(); 
  const { toggleWishlist, isInWishlist } = useWishlist(); 

  // Check if item is already saved
  const isWishlisted = isInWishlist(items.product_id);

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(items.available_colors?.[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const getColorClass = (color) => {
    const map = {
      'Red': 'bg-red-500', 'Black': 'bg-black', 'White': 'bg-white border-gray-200',
      'Blue': 'bg-blue-600', 'Green': 'bg-green-500', 'Yellow': 'bg-yellow-400', 'Grey': 'bg-gray-500',
    };
    return map[color] || 'bg-gray-400';
  };

  const discountPercent = Math.round(
    ((items.price.regular - items.price.discounted) / items.price.regular) * 100
  );

  // --- HANDLERS ---

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    // 1. Validation Check with SweetAlert
    if (!selectedSize) {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Size Required',
        text: 'Please select a size before adding to cart.',
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        background: '#fff',
        color: '#000'
      });
      return;
    }

    // 2. Add to Cart
    addToCart(items, selectedSize, selectedColor);
    
    // 3. Success SweetAlert
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Added to Cart',
      text: `${items.product_name} (${selectedSize}) added.`,
      showConfirmButton: false,
      timer: 2000,
      toast: true,
      background: '#fff',
      color: '#000'
    });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(items); 
    
    
     Swal.fire({
      position: 'top-end',
      icon: isWishlisted ? 'info' : 'success',
      title: isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist',
      showConfirmButton: false,
      timer: 1500,
      toast: true
    });
    
  };

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const productUrl = `${window.location.origin}/products/${items.product_id}`;
    
    navigator.clipboard.writeText(productUrl).then(() => {
        // Share Success SweetAlert
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Link Copied!',
          text: 'Product link copied to clipboard.',
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          background: '#fff',
          color: '#000'
        }); 
    });
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
    <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <Link to={`/products/${items.product_id}`} className="absolute inset-0 z-10" />

      <div className="relative h-72 w-full overflow-hidden bg-gray-100">
        
        {/* Badges */}
        <div className="absolute left-3 top-3 z-20 flex flex-col gap-2 pointer-events-none">
          {items.is_best_seller && <span className="w-fit rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold text-white shadow-sm">Best Seller</span>}
          {items.is_trending && <span className="w-fit rounded-full bg-purple-600 px-3 py-1 text-[10px] font-bold text-white shadow-sm">Trending</span>}
          {discountPercent > 0 && <span className="w-fit rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white shadow-sm">-{discountPercent}%</span>}
        </div>

        {/* Action Buttons */}
        <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
            
            <button 
              onClick={handleWishlist}
              className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors shadow-sm
                ${isWishlisted 
                    ? 'bg-red-50 text-red-500' 
                    : 'bg-white/80 text-gray-400 hover:bg-red-50 hover:text-red-500'
                }`}
              title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
            </button>

            <button 
              onClick={handleShare}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-400 shadow-sm backdrop-blur-sm transition-colors hover:bg-blue-50 hover:text-blue-500"
              title="Share Product"
            >
              <Share2 size={16} />
            </button>
        </div>

        <img
          src={items.product_images[currentImgIndex]}
          alt={items.product_name}
          className="h-full w-full object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-105"
          onMouseEnter={() => items.product_images[1] && setCurrentImgIndex(1)}
          onMouseLeave={() => setCurrentImgIndex(0)}
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/50 to-transparent translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex justify-center gap-2">
            {items.product_images.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${currentImgIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{items.brand_name}</span>
          <div className="flex items-center gap-1 text-amber-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-medium text-gray-600">{items.customer_ratings} ({items.customer_reviews.length})</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 truncate">{items.product_name}</h3>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">{items.price.currency === 'USD' ? '$' : items.price.currency}{items.price.discounted.toFixed(2)}</span>
          {items.price.regular > items.price.discounted && <span className="text-sm text-gray-400 line-through">${items.price.regular.toFixed(2)}</span>}
        </div>

        <div className="relative z-20 flex flex-col gap-5">
            
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-4">
                <div className="flex flex-col gap-2">
                    <p className="text-xs text-gray-500">Color: <span className='text-gray-900 font-medium'>{selectedColor}</span></p>
                    <div className="flex gap-2">
                        {items.available_colors.map((color) => (
                        <button key={color} onClick={(e) => handleColorSelect(e, color)} className={`w-6 h-6 rounded-full border-2 focus:outline-none transition-all ${selectedColor === color ? 'border-gray-900 scale-110' : 'border-transparent hover:scale-110'}`}>
                            <div className={`w-full h-full rounded-full border border-black/10 ${getColorClass(color)}`}></div>
                        </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">Size ({items.size_system})</p>
                        <button className="text-[10px] text-blue-600 hover:underline">Size Guide</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {items.available_sizes.slice(0, 5).map((size) => (
                        <button key={size} onClick={(e) => handleSizeSelect(e, size)} className={`px-2 py-1 text-xs border rounded transition-colors ${selectedSize === size ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50'}`}>
                            {size.replace('US ', '')}
                        </button>
                        ))}
                        {items.available_sizes.length > 5 && <span className="flex h-6 items-center text-[10px] text-gray-400">+</span>}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 text-[10px] text-gray-500">
                <div className="flex items-center gap-1"><Truck size={12} /><span>{items.estimated_delivery_time}</span></div>
                <div className="flex items-center gap-1 text-green-600 font-medium"><Check size={12} /><span>{items.stock_status}</span></div>
            </div>

            <button onClick={handleAddToCart} disabled={items.stock_status !== 'In Stock'} className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-gray-900/20 disabled:bg-gray-300 disabled:cursor-not-allowed">
                <ShoppingCart size={18} /><span>Add to Cart</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;