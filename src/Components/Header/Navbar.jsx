import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'
import userIcon from '../../assets/userIcon.png'
import cart from '../../assets/cart.png'
import { FiLogIn } from "react-icons/fi";
import { NavLink } from 'react-router';


const Navbar = () => {

  const userName = "Moizuddin Mohammad Mujahid Rashid"
  return (
    <div className="navbar py-2 items-start bg-amber-500/50 backdrop-blur-3xl shadow-sm">
      <div className=" flex justify-start items-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link>Home</Link></li>
            <li><Link>Best selling</Link></li>
            <li><Link>New Arrival</Link></li>
            <li><Link>Trending</Link></li>


          </ul>
        </div>
        <div className='flex  flex-row items-center'>
          <img className='sm:w-4/12 w-4/12' src={logo} alt="" />
          <h2 className='sm:text-base text-sm font-bold text-center'>Juta Express</h2>

        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
          <li className='text-base font-semibold'><NavLink>Home</NavLink></li>
          <li className='text-base font-semibold'><NavLink>New Arrivals</NavLink></li>
          <li className='text-base font-semibold'><NavLink>Best Selling</NavLink></li>
          <li className='text-base font-semibold'><NavLink>Category</NavLink></li>

        </ul>
      </div>
      <div className="navbar-end flex  justify-end gap-5">
        <img className='sm:w-1/13 w-1/6' src={cart} alt="" />

          <img className='sm:w-1/10 w-2/9' src={userIcon} alt="" />
          <div className='w-2/8 hidden lg:flex font-semibold text-sm'>
            {
              userName.length > 18 ? <p>{userName.slice(0, 18)}</p> : <p>{userName}</p>
            }
        </div>
        <button className='btn btn-secondary'><FiLogIn size={20} />
        </button>

      </div>
    </div>
  );
};

export default Navbar;