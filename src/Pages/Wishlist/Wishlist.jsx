import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight, PackageOpen, AlertCircle } from 'lucide-react';
import { useWishlist } from '../../Contexts/WishListProvider/WishListProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2'; // 1. Added Import

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  // 2. Added SweetAlert Handler
  const handleRemove = (id) => {
    Swal.fire({
      title: 'Remove from Wishlist?',
      text: "Are you sure you want to remove this item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromWishlist(id);
        Swal.fire({
          title: 'Removed!',
          text: 'Item has been removed.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  // --- EMPTY STATE ---
  if (wishlistItems.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center">
        <div className="relative mb-6">
           <div className="absolute -inset-4 rounded-full bg-red-100 opacity-50 blur-xl animate-pulse"></div>
           <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-red-50 shadow-inner">
              <Heart size={48} className="text-red-400" />
           </div>
        </div>
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Your Wishlist is Empty</h2>
        <p className="mt-3 max-w-md text-gray-500">
          Looks like you haven't saved any items yet. Start exploring and save your favorites for later!
        </p>
        <Link 
          to="/collections" 
          className="mt-8 flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-amber-600 hover:shadow-amber-500/25 hover:-translate-y-1"
        >
           Explore Collection
           <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  // --- MAIN CONTENT ---
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                    <Heart size={24} className="text-red-500 fill-red-500" />
                </div>
                <div>
                    <h1 className="text-3xl font-black text-gray-900">My Wishlist</h1>
                    <p className="text-sm text-gray-500 font-medium">{wishlistItems.length} Saved Items</p>
                </div>
            </div>
            
            <Link to="/collections" className="text-sm font-bold text-amber-600 hover:text-amber-700 hover:underline">
                Continue Shopping
            </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((item) => (
            <div 
                key={item.product_id} 
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1"
            >
                
                {/* Remove Button (Top Right) */}
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        // 3. Updated to use handleRemove
                        handleRemove(item.product_id);
                    }}
                    className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-400 shadow-sm backdrop-blur-md transition-colors hover:bg-red-50 hover:text-red-500"
                    title="Remove"
                >
                    <Trash2 size={16} />
                </button>

                {/* Image Section */}
                <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-100">
                    <img 
                        src={item.product_images?.[0]} 
                        alt={item.product_name} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Stock Badge */}
                    <div className="absolute bottom-3 left-3">
                        {item.stock_status === 'In Stock' ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
                                <PackageOpen size={12} /> In Stock
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
                                <AlertCircle size={12} /> {item.stock_status}
                            </span>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-400">
                        {item.brand_name}
                    </div>
                    
                    <Link to={`/products/${item.product_id}`} className="block">
                        <h3 className="line-clamp-1 text-lg font-black text-gray-900 transition-colors group-hover:text-amber-600">
                            {item.product_name}
                        </h3>
                    </Link>

                    {/* Price Row */}
                    <div className="mt-3 mb-6 flex items-baseline gap-2">
                        <span className="text-xl font-black text-gray-900">
                            ${item.price.discounted.toFixed(2)}
                        </span>
                        {item.price.regular > item.price.discounted && (
                            <span className="text-sm font-medium text-gray-400 line-through">
                                ${item.price.regular.toFixed(2)}
                            </span>
                        )}
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                        <Link 
                            to={`/products/${item.product_id}`}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3.5 text-sm font-bold text-white transition-all hover:bg-black hover:scale-[1.02] active:scale-95 shadow-md shadow-gray-900/10"
                        >
                            <ShoppingBag size={18} />
                            View Options
                        </Link>
                    </div>
                </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Wishlist;