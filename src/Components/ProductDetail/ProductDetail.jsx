import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ProductDetail = () => {

  const product = useLoaderData()

  const {product_id} = useParams()

  console.log(product_id , "and " , product);
  


  return (
    <div>
      i am product details
    </div>
  );
};

export default ProductDetail;