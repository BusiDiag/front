import React from "react";
import { useParams } from "react-router-dom";

export default function Result() {
  const { id } = useParams();

  return (
    <div className='Result'>
      <section className='lg:pt-8 pt-0 lg:pl-8 h-full mb-4'>
        <div className='rounded-tl-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl bg-sky-50 py-5 overflow-hidden m-5 lg:m-0 2xl:py-10 xl:py-8'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32'>
              <div className='w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0'>
                <h1 className='py-4 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]'>
                  {id}
                </h1>
                <p className='text-gray-500 text-lg text-center lg:text-left'>
                  Diangnosis results for {id}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
