import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className='Hero'>
      <section className='lg:pt-8 pt-0 lg:pl-8 h-full'>
        <div className='rounded-tl-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl bg-sky-50 py-5 overflow-hidden m-5 lg:m-0 2xl:py-10 xl:py-8'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32'>
              <div className='w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0'>
                <h1 className='py-8 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]'>
                  Spot Problems,
                  <br />
                  <span className='text-sky-600'>Seize Opportunities</span>
                </h1>
                <p className='text-gray-500 text-lg text-center lg:text-left'>
                  Diagnose your business anytime — even before you launch.
                </p>
                <div className='relative p-1.5 my-10 flex items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-sky-600 focus-within:border-sky-600'>
                  <input
                    type='text'
                    name='email'
                    placeholder='Enter email to get started'
                    className='text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full'
                  />
                  <button className='bg-sky-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-sky-700 cursor-pointer transition-all duration-500 md:w-fit w-full'>
                    Get Started
                  </button>
                </div>
              </div>
              <div className='w-full xl:col-span-7 lg:col-span-6 block'>
                <div className='w-full sm:w-auto lg:w-[60.8125rem] xl:ml-16'>
                  <img
                    src='https://tinyurl.com/mrem4k68'
                    alt='Dashboard'
                    className='rounded-l-2xl w-full lg:h-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
