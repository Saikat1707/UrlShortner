import React, { useEffect, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { logOutUser } from '../axios/authUser.jsx';
import { toast } from 'react-toastify';
import { useUserContext } from '../context/userContext.jsx';

const NavBar = () => {
  const {user} = useUserContext();
  const [isLogged, setIsLogged] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(user){
      setIsLogged(true)
    }
  }, []);

  const handleLogOut = async () => {
    try {
      await logOutUser();
      toast.success('User Logged out successfully');
      setIsLogged(false);
      setMenuOpen(false);
    } catch (err) {
      toast.error('Problem in logging out');
    }
  };

  return (
    <nav className="w-full bg-white shadow-md  top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#3B1E54] tracking-wide">
          short<span className="text-[#9B7EBD]">LY</span>
        </h1>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-3xl text-[#3B1E54] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-4 items-center">
          {!isLogged ? (
            <>
              <Link to="/login">
                <button className="bg-[#3B1E54] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2d1540] transition duration-300">
                  Log in
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-[#3B1E54] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2d1540] transition duration-300">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogOut}
              className="bg-[#3B1E54] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2d1540] transition duration-300"
            >
              Log out
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-white transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-60 py-4 px-4 border-t' : 'max-h-0'
        }`}
      >
        {!isLogged ? (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#3B1E54] text-white px-4 py-2 mb-3 rounded-xl font-medium">
                Log in
              </button>
            </Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#3B1E54] text-white px-4 py-2 rounded-xl font-medium">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogOut}
            className="w-full bg-[#3B1E54] text-white px-4 py-2 rounded-xl font-medium"
          >
            Log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
