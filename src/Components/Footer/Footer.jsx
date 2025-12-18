import React from 'react';
import logo from '../../assets/logo.png'
import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone, FiSend, FiTwitter, FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-16 pb-8 text-white border-t-4 border-amber-500">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center justify-between gap-10 lg:flex-row border-b border-gray-800 pb-10">
          
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-2xl font-black uppercase text-white">
              Join the <span className="text-amber-500">Club</span>
            </h2>
            <p className="mt-2 text-gray-400">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full rounded-full border border-gray-700 bg-gray-900 px-5 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3 font-bold text-black transition-transform hover:scale-105 hover:bg-white">
              <span>Subscribe</span>
              <FiSend />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 grayscale brightness-200" />
              <span className="text-xl font-black uppercase tracking-tighter">Juta Express</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Bangladesh's #1 destination for premium footwear. We bridge the gap between performance and street style.
            </p>
            <div className="flex gap-4 pt-2">
              {[<FiFacebook></FiFacebook>, <FiInstagram></FiInstagram>, <FiTwitter></FiTwitter>, <FiYoutube></FiYoutube>].map((icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-amber-500 hover:text-black">
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-500">Shop</h3>
            <ul className="space-y-3 text-gray-400">
              {['New Arrivals', 'Best Sellers', 'Men Shoes', 'Women Shoes', 'Sale'].map((item) => (
                <li key={item}>
                  <Link to="#" className="transition-colors hover:text-amber-500 hover:pl-2 duration-300 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-500">Support</h3>
            <ul className="space-y-3 text-gray-400">
              {['Track Order', 'Returns & Exchanges', 'Shipping Info', 'Size Guide', 'Help Center'].map((item) => (
                <li key={item}>
                  <Link to="#" className="transition-colors hover:text-amber-500 hover:pl-2 duration-300 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-500">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 h-5 w-5 text-amber-500" />
                <span>Aziz Villa, AIUB Road, Kuril,<br/>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="h-5 w-5 text-amber-500" />
                <span>+880 1796-059406</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="h-5 w-5 text-amber-500" />
                <span>jutaexpress@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row">
          
          <p>&copy; {new Date().getFullYear()} Juta Express. All rights reserved.</p>
          
          <div className="flex gap-4">
             <div className="h-8 w-12 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold text-gray-300">VISA</div>
             <div className="h-8 w-12 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold text-gray-300">MC</div>
             <div className="h-8 w-12 rounded bg-pink-600/20 flex items-center justify-center text-[10px] font-bold text-pink-500 border border-pink-500/30">Bkash</div>
          </div>
          
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;