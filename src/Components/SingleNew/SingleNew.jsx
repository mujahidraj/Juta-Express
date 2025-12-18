import React from 'react';

const SingleNew = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white shadow-xl md:flex md:h-125">
        <div className="relative h-64 w-full md:h-full md:w-1/2">
          <img
            src={data.product_images[0]}
            alt={data.product_name}
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />          <span className="absolute top-4 left-4 bg-black px-3 py-1 text-xs font-bold uppercase tracking-wider text-white md:hidden">
            New Drop
          </span>
        </div>
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:p-16">
          <div className="mb-4 flex items-center gap-2">
            <span className="hidden h-px w-8 bg-red-600 md:block"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Just Arrived
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-black uppercase leading-none text-gray-900 md:text-5xl lg:text-6xl">
            {data.product_name}
          </h2>
          <p className="mb-8 max-w-md text-base text-gray-500 md:text-lg">
            Experience ultimate comfort and style with the latest from {data.brand_name}.
            Engineered for performance, designed for the streets.
          </p>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-gray-400">Price</p>
              <p className="text-3xl font-bold text-gray-900">
                ${data.price.discounted || data.price.regular}
              </p>
            </div>

            <button className="group relative overflow-hidden rounded-full bg-black px-8 py-4 text-white transition-all hover:bg-gray-800">
              <span className="relative z-10 font-bold uppercase tracking-wide">
                Shop Now
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SingleNew;