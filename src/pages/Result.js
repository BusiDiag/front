import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import fetchResult from "../api/FetchResult";
import ResultStack from "../components/ResultStack";

export default function Result() {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const data = useMemo(() => [], []);

  const setData = useCallback(() => {
    results.forEach((result) => {
      const _data = {
        name: result.question,
        // TODO: Make these scores according to backend
        uv: result.score,
        ev: result.score,
        sv: result.score,
        wv: result.score,
      };
      data.push(_data);
    });
  }, [data, results]);

  useEffect(() => {
    fetchResult(id).then((data) => setResults(data));
    setData();
  }, [id, setData]);

  if (!results) return <div>Loading...</div>;
  return (
    <div className='Result'>
      <section className='main-section'>
        <div className='flex justify-end mr-10 mb-4'>
          <button className='btn'>
            <Link to={`/diagnosis/${id}`}>Start new diagnosis</Link>
          </button>
        </div>
        <div className='main-container-blue-rounded'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full'>
              <h1 className='py-4 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]'>
                {id}
              </h1>
              <p className='text-gray-500 text-lg text-center lg:text-left'>
                Diagnosis results for {id}
              </p>
            </div>
            <ResultStack data={data} />
          </div>
        </div>
      </section>
    </div>
  );
}
