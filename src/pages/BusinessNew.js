import React from "react";

export default function BusinessNew() {
  return (
    <div className='BusinessNew w-full'>
      <section className='w-full lg:pt-8 pt-0 lg:pl-8 h-full mb-4'>
        <div className='w-full rounded-tl-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl bg-sky-50 py-5 overflow-hidden m-5 lg:m-0 2xl:py-10 xl:py-8'>
          <div className='w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex flex-col gap-8 items-center'>
              <div className='w-full text-center lg:text-left'>
                <h1 className='py-4 text-gray-900 font-bold font-manrope text-5xl leading-[70px]'>
                  New Business
                </h1>
                <p className='text-gray-500 text-lg'>Create a new business</p>
              </div>
              <div className='w-full lg:w-2/3 xl:w-1/2 mx-auto'>
                <form className='flex flex-col items-center w-full'>
                  <input
                    className='w-full relative p-3 my-4 rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-sky-600 focus-within:border-sky-600'
                    type='text'
                    placeholder='Business Name'
                  />
                  <input
                    className='w-full relative p-3 my-4 rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-sky-600 focus-within:border-sky-600'
                    type='text'
                    placeholder='Description'
                  />
                  <input
                    className='bg-sky-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-sky-700 cursor-pointer transition-all duration-500 md:w-fit w-full mt-4'
                    type='submit'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
