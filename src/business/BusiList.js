import React from "react";
import { Link } from "react-router-dom";
import BusinessStack from "./BusinessStack";

export default function BusiList() {
  return (
    <div className='BusiLis px-10'>
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
        </thead>
      </table>
    </div>
  );
}
