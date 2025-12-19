/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import { Star, Heart, Share2, Truck, RefreshCw, ShieldCheck, Loader2 } from 'lucide-react';

import RelatedProductCard from '../../Components/RelatedProductCard/RelatedProductCard';
import { Link, useLoaderData, useParams } from 'react-router';

const ProductDetail = () => {
  const loaderData = useLoaderData();
  const [allProducts, setAllProducts] = useState(Array.isArray(loaderData) ? loaderData : []);
  const [loading, setLoading] = useState(!loaderData || loaderData.length === 0);
  
  useEffect(() => {
    if (!loaderData || loaderData.length === 0) {
      fetch('/shoes.json')
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((data) => {
          const productsArray = Array.isArray(data) ? data : (data.products || []);
          setAllProducts(productsArray);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [loaderData]);

  const params = useParams();
  const targetId = params.id || params.product_id;

  const product = allProducts.find(p => {
    return String(p.product_id) === String(targetId) || String(p.id) === String(targetId);
  });
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.available_colors?.[0]);
      setSelectedSize(null);
      setCurrentImgIndex(0);
      window.scrollTo(0, 0);
    }
  }, [product, targetId]);

  if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;
  
  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4 text-center">
         <h2 className="text-2xl font-black text-gray-900">Product Not Found</h2>
         <Link to="/all-products" className="rounded-full bg-gray-900 px-6 py-2 text-white">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(item => 
      item.category?.[0] === product.category?.[0] && 
      String(item.id || item.product_id) !== String(product.id || product.product_id)
    )
    .slice(0, 5);

  const discountPercent = Math.round(
    ((product.price.regular - product.price.discounted) / product.price.regular) * 100
  );

  const getColorClass = (color) => {
    const map = {
      'Red': 'bg-red-500', 'Black': 'bg-black', 'White': 'bg-white border-gray-200',
      'Blue': 'bg-blue-600', 'Green': 'bg-green-500', 'Yellow': 'bg-yellow-400',
      'Khaki': 'bg-[#F0E68C]', 'Royal Brown': 'bg-[#8B4513]', 'Navy': 'bg-blue-900'
    };
    return map[color] || 'bg-gray-200';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-xs text-gray-500 sm:px-6 lg:px-8">
          <Link to="/" className="hover:text-amber-600">Homepage</Link>
          <span>/</span>
          <Link to="/all-products" className="hover:text-amber-600">Shop</Link>
          <span>/</span>
          <span className="font-medium text-gray-900">{product.category?.[0]}</span>
          <span>/</span>
          <span className="truncate font-medium text-gray-900">{product.product_name}</span>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          
          <div className="flex flex-col gap-4">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-gray-100">
              <img 
                src={product.product_images?.[currentImgIndex] || ""} 
                alt={product.product_name} 
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute right-4 top-4 flex flex-col gap-3">
                 <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-all hover:text-red-500 hover:shadow-lg">
                    <Share2 size={18} />
                 </button>
                 <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-all hover:text-red-500 hover:shadow-lg">
                    <Heart size={18} />
                 </button>
              </div>
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {product.is_best_seller && <span className="w-fit rounded-md bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-sm">Best Seller</span>}
                {discountPercent > 0 && <span className="w-fit rounded-md bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">-{discountPercent}%</span>}
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {product.product_images?.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImgIndex(idx)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${currentImgIndex === idx ? 'border-gray-900 ring-1 ring-gray-900' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 px-0 sm:mt-16 lg:mt-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">
               {product.brand_name}
            </h2>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              {product.product_name}
            </h1>

            <div className="mt-4 flex items-end gap-4">
               <div className="flex items-baseline gap-2">
                 <p className="text-3xl font-black text-gray-900">
                   ${product.price.discounted.toFixed(2)}
                 </p>
                 {discountPercent > 0 && (
                   <p className="text-lg text-gray-400 line-through">
                     ${product.price.regular.toFixed(2)}
                   </p>
                 )}
               </div>
               
               <div className="mb-1 flex items-center gap-1 border-l border-gray-200 pl-4">
                  <div className="flex text-amber-400">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} size={16} fill={i < Math.floor(product.customer_ratings) ? "currentColor" : "none"} className={i < Math.floor(product.customer_ratings) ? "" : "text-gray-300"} />
                     ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-600 underline cursor-pointer hover:text-amber-600">
                    {product.customer_reviews?.length || 0} Reviews
                  </span>
               </div>
            </div>

            <div className="mt-6">
               <h3 className="text-sm font-bold text-gray-900">Description:</h3>
               <p className="mt-2 text-base leading-relaxed text-gray-500">
                 {product.description || "Experience premium comfort and style with this exclusive piece. Designed for modern living, it features high-quality materials and exceptional craftsmanship."}
               </p>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
               
               {product.available_colors && (
                 <div className="mb-6">
                   <h3 className="text-sm font-bold text-gray-900">Color: <span className="font-normal text-gray-500">{selectedColor}</span></h3>
                   <div className="mt-3 flex gap-3">
                      {product.available_colors.map(color => (
                         <button
                           key={color}
                           onClick={() => setSelectedColor(color)}
                           className={`group relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${selectedColor === color ? 'border-gray-900 scale-110' : 'border-transparent hover:scale-110'}`}
                         >
                            <div className={`h-8 w-8 rounded-full border border-black/10 shadow-sm ${getColorClass(color)}`}></div>
                         </button>
                      ))}
                   </div>
                 </div>
               )}

               {product.available_sizes && (
                 <div className="mb-8">
                    <div className="flex items-center justify-between">
                       <h3 className="text-sm font-bold text-gray-900">Size:</h3>
                       <button className="text-xs font-bold text-gray-500 underline hover:text-gray-900">View Size Chart</button>
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-6">
                       {product.available_sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`flex items-center justify-center rounded-lg border py-3 text-sm font-bold transition-all ${selectedSize === size ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white text-gray-900 hover:border-gray-900'}`}
                          >
                             {size.replace('US ', '')}
                          </button>
                       ))}
                    </div>
                 </div>
               )}

               <div className="flex flex-col gap-4 sm:flex-row">
                  <button className="flex-1 rounded-full bg-gray-900 py-4 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-black active:scale-95">
                     Add To Cart
                  </button>
                  <button className="flex-1 rounded-full border border-gray-300 bg-white py-4 text-base font-bold text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-50">
                     Checkout Now
                  </button>
               </div>

               <div className="mt-8 flex gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                     <Truck size={16} /> <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <RefreshCw size={16} /> <span>30 Days Return</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <ShieldCheck size={16} /> <span>Secure Payment</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* --- REVIEWS SECTION (UPDATED) --- */}
        <section className="mt-20 border-t border-gray-100 pt-16">
           <h2 className="text-2xl font-black text-gray-900 mb-8">Customer Reviews</h2>
           <div className="grid gap-10 lg:grid-cols-3">
              <div className="col-span-1 rounded-2xl bg-gray-50 p-8">
                 <div className="flex items-end gap-2 mb-6">
                    <span className="text-5xl font-black text-gray-900">{product.customer_ratings}</span>
                    <div className="mb-2">
                       <div className="flex text-amber-400">
                         {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                       </div>
                       <p className="text-xs text-gray-500 mt-1">Based on {product.customer_reviews?.length} Reviews</p>
                    </div>
                 </div>
                 <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((star) => (
                       <div key={star} className="flex items-center gap-3">
                          <span className="w-3 text-xs font-bold text-gray-600">{star}</span>
                          <Star size={10} className="text-gray-400" />
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                             <div className="h-full bg-amber-400" style={{ width: star === 5 ? '70%' : star === 4 ? '20%' : '5%' }}></div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Dynamic Customer Comments */}
              <div className="col-span-1 lg:col-span-2 space-y-6">
                 {product.customer_reviews?.slice(0, 3).map((review, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-6 last:border-0">
                       <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                             {/* Initials Avatar */}
                             <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-500">
                                {review.user ? review.user.charAt(0).toUpperCase() : 'U'}
                             </div>
                             {/* User Name */}
                             <span className="font-bold text-sm">{review.user}</span>
                          </div>
                          {/* Date */}
                          <span className="text-xs text-gray-400">{review.date}</span>
                       </div>
                       {/* Rating Stars */}
                       <div className="flex text-amber-400 mb-2">
                          {[...Array(review.rating || 0)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                       </div>
                       {/* Review Text */}
                       <p className="text-sm text-gray-600">{review.text}</p>
                    </div>
                 ))}
                 <button className="text-sm font-bold text-gray-900 underline">View All Reviews</button>
              </div>
           </div>
        </section>

        <section className="mt-24">
           <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">Related Products</h2>
              <Link to="/all-products" className="text-sm font-bold text-amber-600 hover:underline">View Collection</Link>
           </div>
           
           {relatedProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                 {relatedProducts.map(item => (
                    <div key={item.id || item.product_id}>
                       <RelatedProductCard item={item} />
                    </div>
                 ))}
              </div>
           ) : (
              <div className="rounded-xl bg-gray-50 p-10 text-center text-gray-500">
                 No related products found in the "{product.category?.[0]}" category.
              </div>
           )}
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;