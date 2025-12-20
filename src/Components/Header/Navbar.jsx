import React, { useContext, useState } from 'react';
import { FiLogIn, FiSearch } from "react-icons/fi";
import logo from '../../assets/logo.png';
import userIcon from '../../assets/userIcon.png';
import cart from '../../assets/cart.png';
import { useCart } from '../../Contexts/CartProvider/CartProvider';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvier';
import Swal from 'sweetalert2';

const Navbar = () => {

  const {user, logOutUser} = useContext(AuthContext)
  const userName = user?.displayName || "Guest";
  const userPhoto = user?.photoURL || userIcon;

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { getCartCount } = useCart();

  const cartCount = getCartCount();

  const navLinkStyle = ({ isActive }) =>
    `text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-amber-600 ${isActive ? "text-amber-600" : "text-gray-700"
    }`;

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/collections?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      const elem = document.activeElement;
      if (elem) elem.blur();
    }
  };

  const   handleLogedOut = () => { 
    logOutUser()
    .then(()=>{
      Swal.fire({
            icon: 'success',
            title: 'Logged Out!',
            text: `You have been successfully logged out.`,
            confirmButtonColor: '#d97706',
          });
      navigate('/login')
    })
    .catch((error)=>{
     const err = error.message;
     Swal.fire({
      icon: 'error',
      title: 'Logout Failed',
      text: err,
      confirmButtonColor: '#d97706',
    });
    })
  }
  
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content z-1 mt-3 w-64 rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5 gap-2">
              <li className="mb-2">
                <div className="relative flex items-center px-0 hover:bg-transparent">
                  <FiSearch className="absolute left-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-sm input-bordered w-full rounded-full pl-9 focus:border-amber-500 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearch}
                  />
                </div>
              </li>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/new-arrival">New Arrival</NavLink></li>
              <li><NavLink to="/best-selling">Best Selling</NavLink></li>
              <li><NavLink to="/collections">Collection</NavLink></li>
            </ul>
          </div>

          <Link to="/" className="flex flex-col items-center justify-center gap-0 group">
            <img className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-110" src={logo} alt="Juta Express" />
            <h2 className="text-[10px] font-black uppercase leading-none tracking-tight text-gray-900 mt-1">
              Juta<span className="text-amber-600">Express</span>
            </h2>
          </Link>

        </div>

        <div className="hidden xl:flex items-center gap-8">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/new-arrival" className={navLinkStyle}>New Arrivals</NavLink>
          <NavLink to="/best-selling" className={navLinkStyle}>Best Selling</NavLink>
          <NavLink to="/collections" className={navLinkStyle}>Collection</NavLink>
        </div>

        <div className="flex items-center gap-3 md:gap-5">

          <div className="hidden lg:block relative group">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="w-48 rounded-full bg-gray-100 py-1.5 pl-8 pr-4 text-xs font-medium focus:bg-white focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors border border-amber-400 focus:border-gray-200"
            />
            <FiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 h-3.5 w-3.5 group-focus-within:text-amber-600" />
          </div>
          <Link to="/cart" className="relative flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-bold text-gray-700 transition-all hover:bg-amber-500 hover:text-white">
            <img className="h-5 w-5 object-contain" src={cart} alt="Cart" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="hidden items-center gap-2 rounded-full bg-gray-100 py-1 pl-1 pr-4 lg:flex border border-gray-200">
            <img className="h-8 w-8 rounded-full border border-white bg-white object-cover shadow-sm" src={userPhoto} alt="User" />
            <div className="flex flex-col text-xs">
              <span className="font-semibold text-gray-700">
                {userName.length > 15 ? `${userName.slice(0, 15)}...` : userName}
              </span>
              <span className="text-[10px] text-gray-400">Member</span>
            </div>
          </div>

          {
            user ? (
              <button onClick={handleLogedOut} to="/login" className="btn btn-sm btn-ghost btn-circle">
                <FiLogIn className="h-5 w-5 text-gray-700" />
              </button>
            ) : (<Link to="/login" className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-bold text-white transition-all hover:bg-amber-600 hover:shadow-lg">
            <span className="hidden sm:inline">Login</span>
            <FiLogIn size={18} />
          </Link>)
          }

        </div>

      </div>
    </div>
  );
};

export default Navbar;