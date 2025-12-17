import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Hero from '../../Components/Header/Hero';

const HomeLayout = () => {
  return (
    <div>
      <header className='sticky top-0 left-0 right-0 '>
        <section className=''>
          <Navbar></Navbar>
        </section>
      </header>
      <main>
        <section className='hero mx-auto'>
          <Hero></Hero>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;