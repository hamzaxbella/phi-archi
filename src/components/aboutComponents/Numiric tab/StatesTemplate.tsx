import React from 'react'

const StatesTemplate = ({data , locale}) => {
  console.log(locale)
  return (
    <div className="bg-white p-6  rounded-3xl grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 justify-center items-center my-6 space-y-4 ">
      {/* First Stat */}
      <div className="text-center flex-1 lg:py-2 p-4 lg:0  ">
        <h2 className="text-2xl font-bold text-gray-800">+{data[0].completed}</h2>
        <p className="text-gray-600">completed projects</p>
      </div>

      {/* Second Stat */}
      <div className="text-center flex-1 lg:py-2 p-4  ">
        <h2 className="text-2xl font-bold text-gray-800">+{data[0].kilometre}</h2>
        <p className="text-gray-600">kilomètre conduits</p>
      </div>

      {/* Third Stat */}
      <div className="text-center flex-1 lg:py-2 p-4   ">
        <h2 className="text-2xl font-bold text-gray-800">+{data[0].maquette}</h2>
        <p className="text-gray-600">Maquettes présentés</p>
      </div>

      {/* Fourth Stat */}
      <div className="text-center flex-1 lg:py-2 p-4">
        <h2 className="text-2xl font-bold text-gray-800 ">+{data[0].plans}</h2>
        <p className="text-gray-600">plans imprimés</p>
      </div>
    </div>
  );
};



export default StatesTemplate