import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Phone, Mail, ArrowRight, ShoppingBag } from 'lucide-react';
import heroImage from '../../assets/Untitled design.png'; // Ensure path is correct
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-900">
      
      {/* 1. Background Image & Overlay */}
      <div className="absolute inset-0 h-full w-full">
        <img 
          className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105" 
          src={heroImage} 
          alt="Hero Background" 
        />
        {/* Dark Gradient Overlay - Crucial for text readability on glass */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30"></div>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="relative z-10 px-4 py-8 md:px-8">
        
        {/* 3. The Premium Glass Card (Smaller Width: max-w-5xl) */}
        <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-8 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:flex-row md:gap-12 md:p-12 lg:p-16">
          
          {/* A. Text Content Section (Left) */}
          <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
            
            {/* Tagline */}
            <span className="mb-3 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 backdrop-blur-sm">
              Premium Collection
            </span>

            {/* Headline with Gradient */}
            <h1 className="mb-4 text-2xl font-black leading-tight text-white drop-shadow-lg md:text-3xl lg:text-4xl">
              Step up your style with <br className="hidden max-md:block" />
              <span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                Exclusive Footwear
              </span>
            </h1>

            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-200 md:text-base">
              Experience comfort and class. We deliver exclusive footwear all over Bangladesh directly to your doorstep.
            </p>
            
            {/* Contact Information Cards */}
            <div className="mb-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <div className="flex items-center gap-3 rounded-xl bg-black/30 px-4 py-3 border border-white/5 backdrop-blur-sm transition hover:bg-black/40">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Phone size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">WhatsApp</p>
                  <a href="tel:+8801796059406" className="text-sm font-bold text-white">+880 1796-059406</a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-black/30 px-4 py-3 border border-white/5 backdrop-blur-sm transition hover:bg-black/40">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <Mail size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Email Us</p>
                  <a href="mailto:jutaexpress@gmail.com" className="text-sm font-bold text-white">jutaexpress@gmail.com</a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/collections" className="group flex items-center gap-2 rounded-full bg-linear-to-r from-amber-500 to-orange-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-amber-500/20 transition-all hover:scale-105 hover:shadow-amber-500/40 active:scale-95">
              <ShoppingBag size={18} />
              Shop Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* B. Lottie Animation Section (Right) */}
          <div className="flex w-full justify-center md:w-1/2">
            <div className="relative">
                {/* Glow behind the sneaker */}
                <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-3xl filter"></div>
                <Player
                autoplay
                loop
                src="https://lottie.host/8808d876-22d6-4b3c-af56-ab903c0be43d/kaV1Tt5G42.json"
                className="relative z-10 h-64 w-64 drop-shadow-2xl md:h-87.5 md:w-87.5"
                />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;