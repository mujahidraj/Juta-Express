import Navbar from '../../Components/Header/Navbar';
import Hero from '../../Components/Header/Hero';
import BestSelling from '../../Components/BestSelling/BestSelling';
import { Children, createContext } from 'react';
import { useLoaderData } from 'react-router';
import NewestArrival from '../../Components/NewestArrival/NewestArrival';

const DataContext = createContext()

const HomeLayout = () => {

  const data = useLoaderData()

  


  return (
    <div>
      <header className='sticky top-0 z-1000 left-0 right-0 '>
        <section className=''>
          <Navbar></Navbar>
        </section>
      </header>
      <main>
        <section className='hero mx-auto'>
          <Hero></Hero>
        </section>
          <section className='w-11/12 mx-auto my-10'>
            <BestSelling data={data}></BestSelling>
            <NewestArrival data={data}></NewestArrival>
          </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;