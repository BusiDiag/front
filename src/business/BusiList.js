import React from "react";
import { Link } from "react-router-dom";
import BusinessStack from "./BusinessStack";

export default function BusiList() {
  return (
    <div className='BusiLis px-10'>
      <div className='flex justify-end mr-10 mt-8'>
        <button className='bg-sky-600 rounded-full py-3 px-10 text-base font-semibold text-white hover:bg-sky-700 transition-all duration-500 w-full md:w-fit'>
          <Link to='/business'>Add Business</Link>
        </button>
      </div>
      <table className='table-auto w-full'>
        <thead>
          <tr className='-mx-3'>
            <th>
              <BusinessStack
                name='Business Name'
                content='Lorem Ipsum Dolor Sit'
                img='https://tinyurl.com/mrem4k68'
              />
            </th>
            <th>
              <BusinessStack
                name='Business Name'
                content='Lorem Ipsum Dolor Sit'
                img='https://tinyurl.com/mrem4k68'
              />
            </th>
          </tr>
          <tr className='-mx-3'>
            <th>
              <BusinessStack
                name='Business Name'
                content='Lorem Ipsum Dolor Sit'
                img='https://tinyurl.com/mrem4k68'
              />
            </th>
            <th>
              <BusinessStack
                name='Business Name'
                content='Lorem Ipsum Dolor Sit'
                img='https://tinyurl.com/mrem4k68'
              />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
