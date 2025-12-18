import React from 'react';

const CategoriesCard = ({ name, image }) => {
  return (
    <div className="group relative h-48 w-full cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md">
      
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

      {/* Category Name Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-white drop-shadow-md">
          {name}
        </h3>
      </div>
      
    </div>
  );
};

export default CategoriesCard;