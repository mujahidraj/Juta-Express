import React from 'react';
import Navbar from '../../Components/Header/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <header className='w-11/12 mx-auto'>
        <Navbar></Navbar>
      </header>
      <main>I am Home Layout</main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;