import React from "react";
import BackButton from "@/components/BackButton";
import InvertedLayer from "@/components/InvertedLayer";

const Wrapper = ({ locale, PageTitle, side, main, path }) => {
  const isRtl = locale === 'ar';

  return (
    <section className="max-container margin-x md:remaining-height" dir={isRtl ? 'rtl' : 'ltr'}>
      <div id="wrapper" className="md:px-4 md:pt-6 pt-4 min-remaining-height">
        <div className="flex flex-col md:h-full md:flex-row gap-6">
          <div className={`md:w-[280px] md:h-5/6 ${isRtl ? 'md:order-2' : ''}`}>
            {PageTitle}
            {side}
          </div>
          <div className={`md:flex-1 md:overflow-y-scroll ${isRtl ? 'md:order-1' : ''}`}>
            {main}
          </div>
        </div>

        <InvertedLayer />
        <BackButton locale={locale} path={`/${locale}/${path}`} />
      </div>
    </section>
  );
};

export default Wrapper;
