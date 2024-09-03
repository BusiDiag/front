import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Diagnosis() {
  const [selectedBusiness, setSelectedBusiness] = useState("");

  const handleSelect = (event) => {
    setSelectedBusiness(event.target.value);
  };

  return (
    <div className='Diagnosis'>
      <section className='w-full lg:pt-8 pt-0 lg:pl-8 h-full mb-4'>
        <div className='w-full rounded-tl-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl bg-sky-50 py-5 overflow-hidden m-5 lg:m-0 2xl:py-10 xl:py-8'>
          <div className='w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full text-center lg:text-left'>
              <h1 className='py-4 text-gray-900 font-bold font-manrope text-5xl leading-[70px]'>
                Diagnosis
              </h1>
              <p className='text-gray-500 text-lg'>
                Select the business you want to diagnose
              </p>
            </div>
          </div>
          <div className='w-full mt-10 flex flex-col items-center lg:items-start ml-8'>
            <select
              onChange={handleSelect}
              value={selectedBusiness}
              className='block w-full md:w-1/2 lg:w-1/3 bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-150 ease-in-out mb-4'
            >
              {/* TODO: Get the list of businesses from the backend */}
              <option value=''>Select a business</option>
              <option value='1'>Business 1</option>
              <option value='2'>Business 2</option>
              <option value='3'>Business 3</option>
              <option value='4'>Business 4</option>
              <option value='5'>Business 5</option>
              <option value='6'>Business 6</option>
            </select>
            <Link
              to={`/diagnosis/${selectedBusiness}`}
              className='bg-sky-600 rounded-full py-3 px-10 text-base font-semibold text-white hover:bg-sky-700 transition-all duration-500 w-full md:w-fit'
            >
              Start diagnosis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
