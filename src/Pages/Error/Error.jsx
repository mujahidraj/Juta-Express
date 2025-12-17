import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MoveLeft, Home } from 'lucide-react';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Visual Element: Large background text */}
        <div className="relative">
          <h1 className="text-[150px] font-black text-gray-200 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100">
                <span className="text-4xl">🤔</span>
             </div>
          </div>
        </div>

        {/* Main Text */}
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page not found
        </h2>
        <p className="mt-2 text-base text-gray-500">
          Sorry, we couldn’t find the page you’re looking for. It might have been removed or renamed.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          >
            <MoveLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            <Home className="w-4 h-4 mr-2" />
            Take me home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;