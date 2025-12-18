import React from 'react';

const SingleBest = ({ data }) => {

  if (!data) return null;


  const featuredReview = data.customer_reviews?.[0];

  return (
    <section className="bg-gray-900 py-16 rounded-xl my-10 text-white">
      <div className="container mx-auto px-4">

        <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:justify-between">


          <div className="w-full space-y-6 lg:w-1/2 lg:pl-10">


            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                #1 Best Seller
              </span>
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              {data.product_name}
            </h2>
            {featuredReview && (
              <div className="border-l-4 border-yellow-400 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mb-3 text-lg italic text-gray-300">
                  "{featuredReview.text}"
                </p>
                <p className="text-sm font-bold text-gray-400">
                  — {featuredReview.user}
                </p>
              </div>
            )}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-bold">{data.customer_ratings}</p>
                <p className="text-xs uppercase text-gray-500">Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{data.quantity_available}+</p>
                <p className="text-xs uppercase text-gray-500">Sold</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{data.weight}</p>
                <p className="text-xs uppercase text-gray-500">Lightweight</p>
              </div>
            </div>
            <div className="pt-4">
              <button className="rounded-full bg-white px-8 py-4 text-base font-bold uppercase tracking-wide text-black transition-transform hover:scale-105 hover:bg-yellow-400">
                Get yours for ${data.price.discounted}
              </button>
            </div>
          </div>
          <div className="relative mt-10 w-full max-w-lg lg:mt-0 lg:w-1/2">
            <div className="absolute left-1/2 top-1/2 -z-10 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[100px]" />
            <div className="absolute  -right-4 -top-4 hidden lg:block animate-spin-slow">
              <svg className="h-24 w-24 text-gray-500" viewBox="0 0 100 100">
                <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text fontSize="13">
                  <textPath href="#curve" fill="currentColor">
                    ★ APPROVED BY ATHLETES ★
                  </textPath>
                </text>
              </svg>
            </div>

            <img
              src={data.product_images[0]}
              alt={data.product_name}
              className="relative z-10 w-full rounded-2xl drop-shadow-2xl transition-transform duration-500 hover:-rotate-6 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SingleBest;