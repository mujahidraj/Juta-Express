import React, { useMemo } from 'react';
import CategoriesCard from '../CategoriesCard/CategoriesCard';


const Categories = ({ data }) => {
  const uniqueCategories = useMemo(() => {
    const categoriesMap = new Map();

    data.forEach((product) => {
      product.category.forEach((catName) => {
        if (!categoriesMap.has(catName)) {
          categoriesMap.set(catName, {
            id: catName,
            name: catName,
            image: product.product_images[0]
          });
        }
      });
    });
    return Array.from(categoriesMap.values());
  }, [data]);


  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-600">
            Find Your Fit
          </span>

          <h2 className="mb-4 text-4xl font-black uppercase text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 md:text-5xl">
            Shop By Category
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            From the track to the streets. Dive into our specialized collections and find exactly what moves you today.
          </p>
        </div>
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