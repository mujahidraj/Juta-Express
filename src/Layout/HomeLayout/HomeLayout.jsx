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
import cart from '../../assets/cart.png';
import { Heart } from 'lucide-react';
import heart from '../../assets/heart.png'


const HomeLayout = () => {

  

  


  return (
    <div>
      <header className='sticky top-0 z-1000 left-0 right-0 '>
        <section className=''>
          <Navbar></Navbar>
        </section>
      </header>
      <main className='relative'>
        
        <Outlet></Outlet>
        <div className='p-3 flex flex-col items-center gap-6 bg-linear-to-r from-amber-200 to-indigo-200 fixed bottom-25 right-6 z-100 rounded-full'>
          <img className=' h-5' src={cart} alt="Cart" />
        </div>

        <div className='p-3 flex flex-col items-center gap-6 bg-linear-to-r from-amber-200 to-indigo-200 fixed bottom-10 right-6 z-100 rounded-full'>
          <img src={heart} className='h-5' alt="" />
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;