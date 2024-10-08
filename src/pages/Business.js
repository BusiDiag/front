import React from "react";
import { Link } from "react-router-dom";
import BusinessStack from "../components/BusinessStack";

export default function Business() {
  return (
    <div className='BusiLis px-10'>
      <div className='flex justify-end mr-10 mt-8'>
        <button className='btn'>
          <Link to='/business/new'>Add Business</Link>
        </button>
      </div>
      {/* TODO: get business list from backend including id */}
      <table className='table-auto w-full'>
        <thead>
          <tr className='-mx-3'>
            <th>
              <BusinessStack
                name='Business Name'
                content='Lorem Ipsum Dolor Sit'
                img='https://tinyurl.com/mrem4k68'
                id='1'
              />
            </th>
            <th>
              <BusinessStack
                name='Business Name'
                content='Lorem Ipsum Dolor Sit'
                img='https://tinyurl.com/mrem4k68'
                id='2'
              />
            </th>
          </tr>
          <tr className='-mx-3'>
            <th>
              <BusinessStack
                name='Business Name'
                content='Lorem Ipsum Dolor Sit'
                img='https://tinyurl.com/mrem4k68'
                id='3'
              />
            </th>
            <th>
              <BusinessStack
                name='Business Name'
                content='Lorem Ipsum Dolor Sit'
                img='https://tinyurl.com/mrem4k68'
                id='4'
              />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
