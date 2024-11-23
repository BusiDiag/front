import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function ResultStack(data) {
  return (
    <div className='w-full mt-10'>
      {/* Total Graph Centered */}
      <div className='flex justify-center mb-10'>
        <div className='w-full md:w-3/4 lg:w-2/3'>
          <p className='text-gray-900 text-xl mb-4 text-center'>Total</p>
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
  );
}
