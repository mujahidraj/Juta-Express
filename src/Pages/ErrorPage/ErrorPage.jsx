import React from 'react';

import { FiHome, FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="absolute top-8">
        <img src={logo} alt="Juta Express" className="h-10 opacity-50 grayscale" />
      </div>

      <div className="relative z-10 max-w-lg">
        <h1 className="select-none text-[150px] font-black leading-none text-gray-200 md:text-[200px]">
          404
        </h1>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 transform">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
            alt="Lost Shoe"
            className="w-64 drop-shadow-2xl grayscale transition-all duration-500 hover:rotate-0 hover:grayscale-0 md:w-80"
          />
        </div>
        <div className="relative z-20 mt-8 md:mt-16">
          <h2 className="mb-4 text-3xl font-black uppercase text-gray-900 md:text-4xl">
            Looks like you took a <span className="text-amber-600">Wrong Step</span>
          </h2>
          <p className="mx-auto mb-8 max-w-md text-gray-500">
            The page you are looking for might have been sold out, removed, or never existed. Don't worry, let's get you back on track.
          </p>

          {/* 5. Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/"
              className="group flex items-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-amber-600 hover:shadow-lg"
            >
              <FiHome className="h-4 w-4" />
              <span>Back Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-full border border-gray-300 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-gray-600 transition-all hover:border-black hover:text-black"
            >
              <FiArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </button>

          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[100px]"></div>

    </div>
  );
};

export default ErrorPage;