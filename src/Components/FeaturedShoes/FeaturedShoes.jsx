import React from 'react';
import FeaturedShoesCard from '../FeaturedShoesCard/FeaturedShoesCard';
import { Link } from 'react-router';

const FeaturedShoes = ({ data }) => {



  return (
    <div className='flex flex-col'>
      <div className='my-10'>

        <h2 className='text-3xl text-center font-bold mb-3'>Our Featured Product</h2>
        <p className='mb-10 text-center'>Grab our feature product before the stock out</p>
      </div>


      <div className='grid grid-cols-3 gap-10'>
        {
          data.slice(0, 20).map(item => item.is_featured && <FeaturedShoesCard key={item.product_id} item={item}></FeaturedShoesCard>)
        }
      </div>
      <div className='my-15 flex flex-row items-center gap-5 p-3 border rounded-sm  justify-center'>
        <h2 className='text-xl font-semibold '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum, necessitatibus architecto nulla nostrum, sit ducimus, vel impedit labore corporis 
        </h2>
        <Link className='btn w-2/11 bg-amber-500 text-white text-base '>
        Explore more shoes
      </Link>
      </div>
    </div>
  );
};

export default FeaturedShoes;