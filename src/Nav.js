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
                  <Link
                    to='/business'
                    className='text-gray-500 text-base lg:text-base font-medium hover:text-sky-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left'
                  >
                    Businesses
                  </Link>
                </li>
                <li>
                  <Link
                    to='/result'
                    className='text-gray-500 text-base lg:text-base font-medium hover:text-sky-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left'
                  >
                    Results
                  </Link>
                </li>
                <li>
                  <Link
                    to='javascript:;'
                    className='text-gray-500 text-base lg:text-base font-medium hover:text-sky-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left'
                  >
                    About us
                  </Link>
                </li>
              </ul>
              <div className='flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end'>
                <button className='bg-sky-50 text-sky-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-sky-100'>
                  Login
                </button>
                <button className='bg-sky-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-sky-700'>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
