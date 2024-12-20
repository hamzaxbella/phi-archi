
const ServicesList = ({ locale }: { locale: string }) => {
  const services = [
    {
      en: "Architectural Design",
      fr: "Conception architecturale", 
      ar: "التصميم المعماري",
      
    },
    {
      en: "Interior Design",
      fr: "Conception intérieure",
      ar: "تصميم داخلي",
      
    },
    {
      en: "Urban Planning",
      fr: "Urbanisme",
      ar: "التخطيط العمراني",
      
    },
    {
      en: "Landscape Design",
      fr: "Conception paysagère",
      ar: "تصميم المناظر الطبيعية",
      
    },
    {
      en: "Building Renovation",
      fr: "Rénovation de bâtiment",
      ar: "تجديد المباني",
      
    },


  ];

  const isRtl = locale === 'ar';

  return (
    <div className={`py-4 md:pt-12 flex flex-row  md:flex-col gap-4 w-full ${isRtl ? 'rtl' : 'ltr'} overflow-x-scroll overflow-y-opacity-0 md:overflow-x-hidden`}>
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative flex items-center"
        >
          <span className="bg-dark text-[12px] md:text-base text-nowrap text-white mx-1  ring-1 ring-dark  md:py-4 py-2 px-8 rounded-xl transition-colors duration-300">
            {service[locale]}
          </span>
        </div>
      ))}

    </div>
  );
};

export default ServicesList;
