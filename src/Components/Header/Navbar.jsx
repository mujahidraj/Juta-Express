import React from 'react';
import { Link, NavLink } from 'react-router'; 
import { FiLogIn, FiMenu, FiShoppingBag } from "react-icons/fi";
import logo from '../../assets/logo.png'
import userIcon from '../../assets/userIcon.png'
import cart from '../../assets/cart.png'

const Navbar = () => {
  const userName = "Moizuddin Mohammad Mujahid Rashid";
  
  const navLinkStyle = ({ isActive }) => 
    `text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-amber-600 ${
      isActive ? "text-amber-600" : "text-gray-700"
    }`;

  return (

    <div className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl shadow-sm">
      
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
  
        <div className="flex items-center gap-4">

          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/new-arrival">New Arrival</NavLink></li>
              <li><NavLink to="/best-selling">Best Selling</NavLink></li>
              <li><NavLink to="/category">Category</NavLink></li>
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 group">
            <img className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" src={logo} alt="Juta Express" />
            <div className="flex flex-col">
              <h2 className="text-lg font-black uppercase leading-none tracking-tight text-gray-900">
                Juta<span className="text-amber-600">Express</span>
              </h2>
              
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/new-arrival" className={navLinkStyle}>New Arrivals</NavLink>
          <NavLink to="/best-selling" className={navLinkStyle}>Best Selling</NavLink>
          <NavLink to="/category" className={navLinkStyle}>Category</NavLink>
        </div>

        <div className="flex items-center gap-4">
       
          <div className="indicator cursor-pointer transition-transform hover:scale-105">
            <span className="indicator-item badge badge-secondary badge-xs">3</span> 
            <img className="h-6 w-6 object-contain opacity-80 hover:opacity-100" src={cart} alt="Cart" />
          </div>

          <div className="hidden items-center gap-2 rounded-full bg-gray-100 py-1 pl-1 pr-4 lg:flex border border-gray-200">
            <img className="h-8 w-8 rounded-full border border-white bg-white object-cover shadow-sm" src={userIcon} alt="User" />
            <div className="flex flex-col text-xs">
              <span className="font-semibold text-gray-700">
                {userName.length > 15 ? `${userName.slice(0, 15)}...` : userName}
              </span>
              <span className="text-[10px] text-gray-400">Member</span>
            </div>
          </div>

         
          <button className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-bold text-white transition-all hover:bg-amber-600 hover:shadow-lg">
            <span className="hidden sm:inline">Login</span>
            <FiLogIn size={18} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;