import React from 'react';
import { Link } from 'react-router';


const CategoriesCard = ({ name, image }) => {
  return (
    // Link points to /category/Name (e.g., /category/Running)
    <Link to={`/category/${name}`} className="group relative h-48 w-full cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md block">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-xl font-bold uppercase tracking-wider text-white drop-shadow-md">
          {name}
        </h3>
      </div>
      
    </Link>
  );
};

export default CategoriesCard;