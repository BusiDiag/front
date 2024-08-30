import React from "react";

export default function BusinessStack(props) {
  return (
    <div className='BusinessStack'>
      <section className='flex lg:items-start py-5 px-10'>
        <div className='bg-sky-50 rounded-3xl py-3 px-6'>
          <div className='font-bold text-left text-2xl mb-4 mt-4'>
            {props.name}
          </div>
          <img
            className='object-scale-down rounded-3xl mb-4'
            src={props.img}
            alt={props.name}
          />
          <div className='font-light text-gray-500 text-base text-left mb-4'>
            {props.content}
          </div>
          <button className='bg-sky-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-sky-700 transition-all duration-500 w-full md:w-fit mb-4'>
            See more
          </button>
          <button className='ml-4 bg-sky-50 text-sky-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-sky-100 w-full md:w-fit'>
            Delete
          </button>
        </div>
      </section>
    </div>
  );
}
