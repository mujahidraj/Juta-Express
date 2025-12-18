import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Hero from '../../Components/Header/Hero';
import BestSelling from '../../Components/BestSelling/BestSelling';
import { Children} from 'react';
import { Outlet } from 'react-router';
import NewestArrival from '../../Components/NewestArrival/NewestArrival';
import FeaturedShoes from '../../Components/FeaturedShoes/FeaturedShoes';
import Categories from '../../Components/Categories/Categories';
import Service from '../../Components/Service/Service';
import Footer from '../../Components/Footer/Footer';

const Home = () => {

  const data = useLoaderData()

  return (
    <div>
      <section className='hero mx-auto'>
          <Hero></Hero>
        </section>
          <section className='w-11/12 mx-auto my-10'>
          <Categories data={data}></Categories>
          <FeaturedShoes data={data}></FeaturedShoes>
            <BestSelling data={data}></BestSelling>
            <NewestArrival data={data}></NewestArrival>
            <Service></Service>
            
          </section>
    </div>
  );
};

export default Home;