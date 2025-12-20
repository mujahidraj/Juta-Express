import React from 'react';
import { Construction, ArrowLeft, Home, CreditCard } from 'lucide-react';
import { Link } from 'react-router';

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-gray-900">
      
      {/* --- MAIN CARD --- */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 p-8 sm:p-12 text-center transition-all duration-300 hover:shadow-3xl">
        
        {/* Animated Icon */}
        <div className="relative mx-auto h-24 w-24 mb-6">
            <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-20"></div>
            <div className="relative h-full w-full bg-amber-100 rounded-full flex items-center justify-center">
                <Construction className="h-10 w-10 text-amber-600" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-sm">
                <CreditCard className="h-5 w-5 text-gray-400" />
            </div>
        </div>

        {/* Headings */}
        <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-3">
          Payment Gateway
        </h1>
        <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            Under Development
        </div>

        {/* Message */}
        <p className="text-gray-500 mb-8 leading-relaxed">
          We are currently integrating secure payment providers (Stripe/SSLCommerz) to ensure your transactions are safe. 
          <br /><br />
          <span className="font-bold text-gray-800">This feature is coming soon!</span>
        </p>

        {/* Progress Bar Visual */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-8 overflow-hidden">
            <div className="bg-amber-500 h-2 rounded-full w-[70%]" style={{boxShadow: '0 0 10px #f59e0b'}}></div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
            <Link
                to="/" 
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3.5 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition-all hover:bg-black hover:scale-[1.02] active:scale-95"
            >
                <Home size={18} />
                Return to Home
            </Link>

            <Link 
                to="/checkout" 
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-100 bg-white py-3.5 text-sm font-bold text-gray-600 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900"
            >
                <ArrowLeft size={18} />
                Back to Checkout
            </Link>
        </div>

      </div>

      {/* Footer Tech Info */}
      <p className="mt-8 text-xs font-mono text-gray-400 uppercase tracking-widest">
        JutaExpress Dev Build v1.0.4
      </p>

    </div>
  );
};

export default Payment;