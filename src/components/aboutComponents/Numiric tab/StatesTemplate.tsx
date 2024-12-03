import React from 'react'

const StatesTemplate = ({data , locale}) => {
  console.log(data , locale)
  return (
    <div className="bg-white p-6  rounded-3xl grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 justify-center items-center my-6 space-y-4 space-y-0">
      {/* First Stat */}
      <div className="text-center flex-1 lg:py-2 p-4 border-r border-b lg:border-b-0  border-gray-300">
        <h2 className="text-2xl font-bold text-gray-800">+57</h2>
        <p className="text-gray-600">completed projects</p>
      </div>

      {/* Second Stat */}
      <div className="text-center flex-1 lg:py-2 p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
        <h2 className="text-2xl font-bold text-gray-800">+12000</h2>
        <p className="text-gray-600">kilomètre conduits</p>
      </div>

      {/* Third Stat */}
      <div className="text-center flex-1 lg:py-2 p-4 border-r  border-gray-300 ">
        <h2 className="text-2xl font-bold text-gray-800">+128</h2>
        <p className="text-gray-600">Maquettes présentés</p>
      </div>

      {/* Fourth Stat */}
      <div className="text-center flex-1 lg:py-2 p-4">
        <h2 className="text-2xl font-bold text-gray-800 ">+510</h2>
        <p className="text-gray-600">plans imprimés</p>
      </div>
    </div>
  );
};



export default StatesTemplate