import Navbar from '../../Components/Header/Navbar';
import { Link, Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import cart from '../../assets/cart.png';
import heart from '../../assets/heart.png'
import { useCart } from '../../Contexts/CartProvider/CartProvider';
import { useWishlist } from '../../Contexts/WishListProvider/WishListProvider';


const HomeLayout = () => {


  const { getCartCount } = useCart();
  const { wishlistItems } = useWishlist();

  const cartCount = getCartCount();


  const wishlistCount = wishlistItems.length;


  return (
    <div>
      <header className='sticky top-0 z-1000 left-0 right-0 '>
        <section className=''>
          <Navbar></Navbar>
        </section>
      </header>
      <main className='relative'>

        <Outlet></Outlet>
        <div className='flex flex-row'>
          <div>
            <Link to="/cart">
              <div className='p-2 flex flex-col items-center gap-6 bg-linear-to-r from-amber-100 to-red-100 fixed active:scale-90 bottom-25 right-2 z-100 rounded-full'>
                <img className=' h-8' src={cart} alt="Cart" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg ">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>

          <div>
            <Link to="/wishlist">
              <div className='p-2 flex flex-col items-center gap-6 bg-linear-to-r from-amber-100 to-red-100 fixed active:scale-90 bottom-10 right-2 z-100 rounded-full'>
                <img src={heart} className='h-8' alt="" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;