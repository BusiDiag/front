import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchBusinesses from "../api/FetchBusinesses";

export default function Diagnosis() {
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [businesses, setBusinesses] = useState([]);

  const handleSelect = (event) => {
    setSelectedBusiness(event.target.value);
  };

  useEffect(() => {
    fetchBusinesses().then((data) => setBusinesses(data));
  }, []);

  return (
    <div className='Diagnosis'>
      <section className='main-section'>
        <div className='main-container-blue-rounded'>
          <div className='w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full text-center lg:text-left'>
              <h1 className='text-title'>Diagnosis</h1>
              <p className='text-detail'>
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
              <option value=''>Select a business</option>
              {businesses.map((business) => (
                <option key={business.id} value={business.id}>
                  {business.name}
                </option>
              ))}
            </select>
            <Link to={`/diagnosis/${selectedBusiness}`} className='btn'>
              Start diagnosis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
