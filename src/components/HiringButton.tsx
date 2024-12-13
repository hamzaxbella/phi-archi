'use client'
import React, { useState } from 'react';
import HiringForm from './ContactComponents/HiringForm';

const HiringButton = ({isRtl, locale}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button 
        onClick={openModal}
        className="relative text-blue-50 inline-flex items-center justify-center px-5 py-2 font-semibold bg-[#181818] rounded-full overflow-hidden hover:bg-gray-800 transition-colors"
      >
        <p className='text-blue-50 font-light z-30'>{isRtl ? '!نحن نوظف' : 'we are hiring!'}</p> 
        <span className="absolute inset-0 rounded-full p-[2px]">
          <span className="flex items-center justify-center w-full h-full bg-[#181818] rounded-full"></span>
        </span>
      </button>

      <HiringForm 
        locale={locale}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default HiringButton;
