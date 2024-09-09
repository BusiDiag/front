import React from "react";

export default function BusinessNew() {
  return (
    <div className='BusinessNew w-full'>
      <section className='main-section'>
        <div className='main-container-blue-rounded'>
          <div className='w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex flex-col gap-8 items-center'>
              <div className='w-full text-center lg:text-left'>
                <h1 className='text-title'>New Business</h1>
                <p className='text-detail'>Create a new business</p>
              </div>
              <div className='w-full lg:w-2/3 xl:w-1/2 mx-auto'>
                <form className='flex flex-col items-center w-full'>
                  <input
                    className='input-text w-full mb-4'
                    type='text'
                    placeholder='Business Name'
                  />
                  <input
                    className='input-text w-full mb-4'
                    type='text'
                    placeholder='Description'
                  />
                  <input className='btn' type='submit' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
