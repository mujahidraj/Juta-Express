import React from 'react';
import { FiTruck, FiShield, FiHeadphones, FiRefreshCcw } from "react-icons/fi";

const Service = () => {
  const services = [
    {
      id: "01",
      title: "Super Fast Delivery",
      desc: "Get your kicks delivered within 24-48 hours anywhere in the city.",
      icon: <FiTruck size={28} />,
      color: "bg-blue-50 text-blue-600",
      borderColor: "hover:border-blue-500",
      shadow: "hover:shadow-blue-500/20"
    },
    {
      id: "02",
      title: "Secure Payment",
      desc: "100% certified secure checkout with bKash, Nagad, or Cards.",
      icon: <FiShield size={28} />,
      color: "bg-emerald-50 text-emerald-600",
      borderColor: "hover:border-emerald-500",
      shadow: "hover:shadow-emerald-500/20"
    },
    {
      id: "03",
      title: "Dedicated Support",
      desc: "Have a sizing question? Our experts are here to help 24/7.",
      icon: <FiHeadphones size={28} />,
      color: "bg-purple-50 text-purple-600",
      borderColor: "hover:border-purple-500",
      shadow: "hover:shadow-purple-500/20"
    },
    {
      id: "04",
      title: "7-Day Returns",
      desc: "Not the right fit? Exchange it easily within 7 days. No hassle.",
      icon: <FiRefreshCcw size={28} />,
      color: "bg-amber-50 text-amber-600",
      borderColor: "hover:border-amber-500",
      shadow: "hover:shadow-amber-500/20"
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- Header Style Matches "Newest Arrival" --- */}
        <div className="mb-16 text-center">
          {/* Small Badge */}
          <span className="mb-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-600">
            Our Promise
          </span>
          
          {/* Gradient Title (Blue/Indigo for Trust) */}
          <h2 className="mb-4 text-4xl font-black uppercase text-transparent bg-clip-text bg-linear-to-r from-red-600 to-indigo-600 md:text-5xl">
            Why Shop With Us?
          </h2>
          
          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            We don't just sell shoes; we deliver an experience. Here is why thousands of customers trust us with their style.
          </p>
        </div>
        {/* --------------------------------------------- */}


        {/* The Box-by-Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-3xl bg-white p-8 border-2 border-transparent transition-all duration-300 hover:-translate-y-2 ${item.borderColor} ${item.shadow} hover:shadow-2xl`}
            >
              {/* Giant Background Number */}
              <span className="absolute -right-4 -top-4 text-9xl font-black text-gray-100 opacity-50 select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-gray-50">
                {item.id}
              </span>

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} transition-transform duration-300 group-hover:rotate-6`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;