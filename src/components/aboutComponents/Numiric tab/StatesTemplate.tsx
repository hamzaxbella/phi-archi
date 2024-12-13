"use client"
import React from 'react'

const StatesTemplate = ({data, locale}) => {
  const isRtl = locale === "ar";

  const stats = {
    completed: {
      en: "completed projects",
      fr: "projets complétés", 
      ar: "المشاريع المنجزة"
    },
    kilometre: {
      en: "kilometers conducted",
      fr: "kilomètre conduits",
      ar: "كيلومترات منفذة"
    },
    maquette: {
      en: "models presented",
      fr: "Maquettes présentés",
      ar: "النماذج المقدمة"
    },
    plans: {
      en: "printed plans",
      fr: "plans imprimés",
      ar: "المخططات المطبوعة"
    }
  }

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="bg-background lg:bg-white p-6 rounded-3xl grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 justify-center items-center my-6 space-y-4">
      {/* First Stat */}
      <div className="text-center flex justify-start items-center flex-col flex-1 lg:py-2 p-4 lg:0">
        <h2 className="text-3xl font-bold text-gray-800">
          +{data[0].completed}
        </h2>
        <p className="text-gray-600">{stats.completed[locale]}</p>
      </div>

      {/* Second Stat */}
      <div className="text-center flex justify-start items-center flex-col flex-1 lg:py-2 p-4">
        <h2 className="text-3xl font-bold text-gray-800">
          +{data[0].kilometre}
        </h2>
        <p className="text-gray-600">{stats.kilometre[locale]}</p>
      </div>

      {/* Third Stat */}
      <div className="text-center flex justify-start items-center flex-col flex-1 lg:py-2 p-4">
        <h2 className="text-3xl font-bold text-gray-800">
          +{data[0].maquette}
        </h2>
        <p className="text-gray-600">{stats.maquette[locale]}</p>
      </div>

      {/* Fourth Stat */}
      <div className="text-center flex justify-start items-center flex-col flex-1 lg:py-2 p-4">
        <h2 className="text-3xl font-bold text-gray-800">
          +{data[0].plans}
        </h2>
        <p className="text-gray-600">{stats.plans[locale]}</p>
      </div>
    </div>
  );
};

export default StatesTemplate