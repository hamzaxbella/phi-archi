import React from 'react';

const HiringButton = ({isRtl}) => {
  return (
    <button className="relative text-blue-50 inline-flex items-center justify-center px-5 py-2 font-semibold  bg-[#181818] rounded-full overflow-hidden">
      <p className='text-blue-50 font-light z-30'>{isRtl ? '!نحن نوظف' : 'we are hiring!'}</p> 
      <span className="absolute inset-0  rounded-full p-[2px]">
        <span className="flex items-center justify-center w-full h-full bg-[#181818] rounded-full"></span>
      </span>
    </button>
  );
};

export default HiringButton;
