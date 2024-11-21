import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBusinesses } from "../api";

import BusinessStack from "../components/BusinessStack";

export default function Business() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetchBusinesses().then((data) => setBusinesses(data));
  }, []);

  return (
    <div className='BusiLis px-10'>
      <div className='flex justify-end mr-10 mt-8'>
        <button className='btn'>
          <Link to='/business/new'>Add Business</Link>
        </button>
      </div>
      <div>
        <h1 className='text-title'>Businesses</h1>
        {businesses.map((business) => (
          <BusinessStack
            key={business.id}
            id={business.id}
            name={business.name}
            content={business.content}
          />
        ))}
      </div>
    </div>
  );
}
