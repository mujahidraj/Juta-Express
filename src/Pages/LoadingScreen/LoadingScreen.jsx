import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState("Lacing up your kicks...");

  useEffect(() => {
    const texts = [
      "Lacing up your kicks...",
      "Checking inventory...",
      "Polishing the leather...",
      "Getting ready for the streets...",
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setLoadingText(texts[i]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white">

      <div className="relative mb-8">

        <div className="absolute inset-0 animate-ping rounded-full bg-amber-100 opacity-75"></div>
        <img
          src={logo}
          alt="Loading..."
          className="relative h-16 w-auto object-contain animate-bounce"
        />
      </div>
      <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-gray-900">
        Juta<span className="text-amber-600">Express</span>
      </h2>
      <div className="relative h-1.5 w-64 overflow-hidden rounded-full bg-gray-100">
        <div className="absolute left-0 top-0 h-full w-full origin-left animate-[progress_2s_ease-in-out_infinite] bg-amber-500 rounded-full"></div>
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-400">
        {loadingText}
      </p>
      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;