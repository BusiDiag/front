import React from "react";

function Hero() {
  return (
    <div className='Hero'>
      <section className='main-section'>
        <div className='main-container-blue-rounded'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32'>
              <div className='w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0'>
                <h1 className='text-title'>
                  Spot Problems,
                  <br />
                  <span className='text-sky-600'>Seize Opportunities</span>
                </h1>
                <p className='text-detail'>
                  Diagnose your business anytime — even before you launch.
                </p>
                <form className='relative p-1.5 my-10 flex items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-sky-600 focus-within:border-sky-600'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter email to get started'
                    className='input-text'
                  />
                  <input
                    type='submit'
                    placeholder='Get Started'
                    className='bg-sky-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-sky-700 cursor-pointer transition-all duration-500 md:w-fit w-full'
                  />
                </form>
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
