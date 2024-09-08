import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='Nav'>
      <nav className='py-5 lg:sticky top-0 w-full bg-white z-10 transition-all duration-500 shadow'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='w-full flex flex-col lg:flex-row'>
            <div className='flex justify-between lg:flex-row'>
              <Link to='/' className='flex items-center'>
                Business Diagnosis
              </Link>
            </div>
            <div
              className='hidden w-full lg:flex lg:pl-11 max-lg:py-4'
              id='navbar'
            >
              <ul className='flex lg:items-center flex-col max-lg:gap-4 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4'>
                <li>
                  <Link to='/business' className='text-detail'>
                    Businesses
                  </Link>
                </li>
                <li>
                  <Link to='/diagnosis' className='text-detail'>
                    Diagnose
                  </Link>
                </li>
                <li>
                  <Link to='/about' className='text-detail'>
                    About us
                  </Link>
                </li>
              </ul>
              <div className='flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end'>
                <Link
                  to='/login'
                  className='bg-sky-50 text-sky-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-sky-100'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='bg-sky-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-sky-700'
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
