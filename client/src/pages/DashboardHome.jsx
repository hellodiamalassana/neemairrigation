import React from 'react';
import Card from '../components/dashboard-components/Card';

const DasboardHome = () => {
  const data = ['Water Level', 'Temperature', 'Humidity', 'pH'];
  return (
    <div>
      <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {/* First Grid Item */}
        <div className='py-8 pl-4 mb-6 rounded-md md:h-64 bg-gray-300 shadow-lg flex items-center col-span-2'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='space-y-3 pb-3'>
              <h1 className='text-4xl font-light text-gray-900 '>
                Hydroponics Data Dashboard
              </h1>
              <p className='font-bold text-md text-gray-900'>
                Quick Data analysis for all your needs
              </p>
              <p className='text-sm leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                soluta, sunt modi, magni nobis sapiente pariatur perferendis
                saepe totam repellat vitae
              </p>
            </div>
            <div className='h-full w-full'>
              <img
                className='w-full h-full object-center object-cover'
                src='/dashboard.png'
                alt='dashboard'
              />
            </div>
          </div>
        </div>
        {/* End of First Grid Item */}

        <div className='rounded-md '>
          <div className='flex items-center bg-gray-300 p-5 rounded-sm shadow-md'>
            <div className='w-16 h-16 rounded-full bg-gray-50 '>
              <img
                className='h-full w-full object-cover object-center'
                src='./logo192.png'
                alt='user profile pic'
              />
            </div>
            <div className='ml-6'>
              <p className='text-gray-900 font-bold text-md'>username</p>
              <p className='text-gray-600 font-md text-semibold '>
                email address
              </p>
            </div>
          </div>
          <div className='mt-2 bg-emerald-700 h-36 flex items-center justify-center'>
            <p className='text-4xl font-light text-gray-50'>Farmer View</p>
          </div>
        </div>
      </div>

      {/* Sensor Data*/}

      <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {data.map((i) => (
          <Card i={i} />
        ))}
      </div>

      {/* Graph Section */}

      <div className='mt-8'>
        <div className='pb-5 border-b-2'>
          <h1 className='text-4xl font-bold text-gray-700'>
            Graphs and Charts
          </h1>
        </div>
      </div>

      {/* Grid for Graphs */}
      <div className='mt-4 grid grid-cols-1  lg:grid-cols-2 gap-3'>
        <div className='bg-gray-400 h-64'></div>
        <div className='bg-gray-400 h-64'></div>
        <div className='bg-gray-400 h-64'></div>
        <div className='bg-gray-400 h-64'></div>
      </div>
    </div>
  );
};

export default DasboardHome;