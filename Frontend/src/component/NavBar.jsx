import React, { useEffect, useState } from 'react';
import {Link, useLocation} from '@tanstack/react-router'
import {logOutUser} from '../axios/authUser.jsx'
import {toast} from 'react-toastify'
const NavBar = () => {
  const [isLogged, setIsLogged] = useState(false)
  const location = useLocation()
  useEffect(() => {
     const hasAccessToken = document.cookie.split('; ').find((row) => row.startsWith('accessToken='));
    if(hasAccessToken){
        setIsLogged(true)
    }else{
      setIsLogged(false)
    }
  }, [location])

  const handleLogOut = async ()=> {
    await logOutUser()
    .then((res)=>{
      toast.success("User Logged out successfully")
      setIsLogged(false)
    })
    .catch((err)=>{
      toast.error("Problem in logging out")
    })
  }

  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-[#3B1E54] tracking-wide">
        short<span className="text-[#9B7EBD]">LY</span>
      </h1>

      {/* Login Button */}
      {isLogged === false ? (
      <div className='flex gap-2.5'>
        <Link to="/login">
          <button className="bg-[#3B1E54] text-white px-5 py-2 cursor-pointer rounded-full text-sm font-medium hover:bg-[#2d1540] transition duration-300">
            Log in
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-[#3B1E54] text-white px-5 py-2 cursor-pointer rounded-full text-sm font-medium hover:bg-[#2d1540] transition duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    ) : (
      <button onClick={handleLogOut} className="bg-[#3B1E54] text-white px-5 py-2 cursor-pointer rounded-full text-sm font-medium hover:bg-[#2d1540] transition duration-300">
        Log out
      </button>
    )}

    </div>
  );
};

export default NavBar;
