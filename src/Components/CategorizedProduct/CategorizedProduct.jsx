import React from 'react';
import { LayoutGrid, ArrowLeft } from 'lucide-react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Link, useLoaderData, useParams } from 'react-router';
'react-router-dom'

const CategorizedProduct = () => {
  const allData = useLoaderData();
  const { categoryName } = useParams();
  const filteredProducts = (allData || []).filter(product =>
    product.category && product.category.includes(categoryName)
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <section className="bg-gray-50/50 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center px-4">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
            <LayoutGrid size={14} />
            <span>Category</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            {categoryName}
          </h1>

          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-linear-to-r from-emerald-400 to-teal-500"></div>

          <p className="mt-6 text-lg text-gray-500">
            Explore our exclusive selection of <strong>{categoryName}</strong> products.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-emerald-600 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((item) => (
              <div key={item.product_id || item.id} className="transition-opacity duration-300 ease-in-out hover:opacity-100">
                <ProductCard items={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl bg-gray-50 p-8 text-center border-2 border-dashed border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">No products found</h3>
            <p className="text-gray-500">We couldn't find any products in the <strong>{categoryName}</strong> category.</p>
            <Link to="/collections" className="mt-4 text-sm font-bold text-emerald-600 hover:underline">
              View All Products
            </Link>
          </div>
        )}

      </main>
    </div>
  );
};

export default CategorizedProduct;