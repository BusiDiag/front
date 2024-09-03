import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Result() {
  const { id } = useParams();
  const data = [
    { name: "080124", uv: 4000, ev: 2400, sv: 2400, wv: 2000 },
    { name: "081324", uv: 3000, ev: 3000, sv: 1800, wv: 2500 },
    { name: "082524", uv: 2000, ev: 1500, sv: 2000, wv: 3000 },
    { name: "082724", uv: 1000, ev: 2000, sv: 2200, wv: 1500 },
  ];

  return (
    <div className='Result'>
      <section className='lg:pt-8 pt-0 lg:pl-8 h-full mb-4'>
        <div className='flex justify-end mr-10 mb-4'>
          <button className='bg-sky-600 rounded-full py-3 px-10 text-base font-semibold text-white hover:bg-sky-700 transition-all duration-500 w-full md:w-fit'>
            <Link to={`/diagnosis/${id}`}>Start new diagnosis</Link>
          </button>
        </div>
        <div className='rounded-tl-2xl lg:rounded-tl-2xl rounded-bl-2xl lg:rounded-bl-2xl bg-sky-50 py-5 overflow-hidden m-5 lg:m-0 2xl:py-10 xl:py-8'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full'>
              <h1 className='py-4 text-center text-gray-900 font-bold font-manrope text-5xl lg:text-left leading-[70px]'>
                {id}
              </h1>
              <p className='text-gray-500 text-lg text-center lg:text-left'>
                Diagnosis results for {id}
              </p>
            </div>
            <div className='w-full mt-10'>
              {/* Total Graph Centered */}
              <div className='flex justify-center mb-10'>
                <div className='w-full md:w-3/4 lg:w-2/3'>
                  <p className='text-gray-900 text-xl mb-4 text-center'>
                    Total
                  </p>
                  <LineChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
                    className='bg-white rounded-lg shadow-md'
                  >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type='monotone'
                      dataKey='uv'
                      stroke='#8884d8'
                      dot={{ stroke: "#8884d8", strokeWidth: 2 }}
                    />
                    <Line
                      type='monotone'
                      dataKey='ev'
                      stroke='#82ca9d'
                      dot={{ stroke: "#82ca9d", strokeWidth: 2 }}
                    />
                    <Line
                      type='monotone'
                      dataKey='sv'
                      stroke='#ffc658'
                      dot={{ stroke: "#ffc658", strokeWidth: 2 }}
                    />
                    <Line
                      type='monotone'
                      dataKey='wv'
                      stroke='#ff7300'
                      dot={{ stroke: "#ff7300", strokeWidth: 2 }}
                    />
                  </LineChart>
                </div>
              </div>
              {/* Individual Graphs */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                <div className='flex justify-center'>
                  <div className='w-full md:w-3/4 lg:w-2/3'>
                    <p className='text-gray-900 text-xl mb-4 text-center'>UV</p>
                    <LineChart
                      width={400}
                      height={300}
                      data={data}
                      margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                      className='bg-white rounded-lg shadow-md'
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type='monotone'
                        dataKey='uv'
                        stroke='#8884d8'
                        dot={{ stroke: "#8884d8", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <div className='w-full md:w-3/4 lg:w-2/3'>
                    <p className='text-gray-900 text-xl mb-4 text-center'>EV</p>
                    <LineChart
                      width={400}
                      height={300}
                      data={data}
                      margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                      className='bg-white rounded-lg shadow-md'
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type='monotone'
                        dataKey='ev'
                        stroke='#82ca9d'
                        dot={{ stroke: "#82ca9d", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <div className='w-full md:w-3/4 lg:w-2/3'>
                    <p className='text-gray-900 text-xl mb-4 text-center'>SV</p>
                    <LineChart
                      width={400}
                      height={300}
                      data={data}
                      margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                      className='bg-white rounded-lg shadow-md'
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type='monotone'
                        dataKey='sv'
                        stroke='#ffc658'
                        dot={{ stroke: "#ffc658", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <div className='w-full md:w-3/4 lg:w-2/3'>
                    <p className='text-gray-900 text-xl mb-4 text-center'>WV</p>
                    <LineChart
                      width={400}
                      height={300}
                      data={data}
                      margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
                      className='bg-white rounded-lg shadow-md'
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type='monotone'
                        dataKey='wv'
                        stroke='#ff7300'
                        dot={{ stroke: "#ff7300", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
