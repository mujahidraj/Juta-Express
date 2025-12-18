import React, { useMemo } from 'react';
import CategoriesCard from '../CategoriesCard/CategoriesCard';


const Categories = ({ data }) => {
  
  // LOGIC: Extract unique categories and assign 1 image to each
  const uniqueCategories = useMemo(() => {
    const categoriesMap = new Map();

    data.forEach((product) => {
      // Loop through every category in this product (e.g., "Men", "Sports", "Running")
      product.category.forEach((catName) => {
        // If we haven't seen this category yet, add it to our map
        if (!categoriesMap.has(catName)) {
          categoriesMap.set(catName, {
            id: catName, // Unique ID
            name: catName,
            // Use this product's image as the category cover
            image: product.product_images[0] 
          });
        }
      });
    });

    // Convert map values to an array: [{name: "Men", image: "..."}, {name: "Running", ...}]
    return Array.from(categoriesMap.values());
  }, [data]);


  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {uniqueCategories.map((category) => (
            <CategoriesCard key={category.id} 
              name={category.name} 
              image={category.image} ></CategoriesCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;