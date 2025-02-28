"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import PageTitle from "../PageTitle";
import { Avatar } from "../../../public";
import Image from "next/image";

interface LocalizedText {
  fr: string;
  en: string;
  ar: string;
}

interface Tab {
  title: LocalizedText;
  description: LocalizedText;
}


const AboutDescriptionTemplate = ({ locale, description }) => {
  const isRtl = locale === "ar";

  const tabs = useMemo<Tab[]>(
    () => [
      {
        title: {
          fr: description[0].who_we_are.title["fr"],
          en: description[0].who_we_are.title["en"],
          ar: description[0].who_we_are.title["ar"],
        },
        description: {
          fr: description[0].who_we_are.description["fr"],
          en: description[0].who_we_are.description["en"],
          ar: description[0].who_we_are.description["ar"],
        },
      },
      {
        title: {
          fr: description[0].collaboration.title["fr"],
          en: description[0].collaboration.title["en"],
          ar: description[0].collaboration.title["ar"],
        },
        description: {
          fr: description[0].collaboration.description["fr"],
          en: description[0].collaboration.description["en"],
          ar: description[0].collaboration.description["ar"],
        },
      },
      {
        title: {
          fr: description[0].expertise.title["fr"],
          en: description[0].expertise.title["en"],
          ar: description[0].expertise.title["ar"],
        },
        description: {
          fr: description[0].expertise.description["fr"],
          en: description[0].expertise.description["en"],
          ar: description[0].expertise.description["ar"],
        },
      },
    ],
    []
  );

  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].title[locale]);
  const [barStyle, setBarStyle] = useState<React.CSSProperties>({});
  const tabContainerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const tabElements = tabContainerRef.current?.querySelectorAll("li");
    const activeTabIndex = tabs.findIndex(
      (tab) => tab.title[locale].toLowerCase() === selectedTab.toLowerCase()
    );

    if (tabElements && tabElements[activeTabIndex]) {
      const activeTab = tabElements[activeTabIndex] as HTMLElement;
      const containerWidth = tabContainerRef.current?.offsetWidth || 0;

      if (isRtl) {
        const rightOffset =
          containerWidth - (activeTab.offsetLeft + activeTab.offsetWidth);
        setBarStyle({
          width: `${activeTab.offsetWidth}px`,
          right: `${rightOffset}px`,
          left: "auto",
        });
      } else {
        setBarStyle({
          width: `${activeTab.offsetWidth}px`,
          left: `${activeTab.offsetLeft}px`,
          right: "auto",
        });
      }
    }
  }, [selectedTab, tabs, isRtl, locale]);

  

  return (
    <div
      className="flex flex-col gap-6 md:flex-row rounded-3xl overflow-hidden bg-background md:bg-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div
        className={`md:flex-1 rounded-3xl overflow-hidden ${isRtl ? "md:order-2" : ""}`}
      >
        <Image src={Avatar} alt="about" width={1000} height={1000} className="w-full h-full object-cover" />
      </div>
      <div
        className={`lg:my-10 md:flex-1 spy-4 px-2 ${isRtl ? "md:order-1" : ""}`}
      >
        <PageTitle
          label={{
            en: "Zyllux Architecture",
            fr: "Zyllux Architecture",
            ar: "Zyllux Architecture",
          }}
          locale={locale}
        />
        <div>
          <ul
            ref={tabContainerRef}
            className="border-b-[1px] my-2 border-gray flex justify-between items-end text-center relative"
          >
            {tabs.map((tab, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedTab(tab.title[locale])}
                data-tab={tab.title[locale]}
                className={`capitalize py-2 px-2 cursor-pointer text-sm ${
                  tab.title[locale].toLowerCase() === selectedTab.toLowerCase()
                    ? "font-semibold text-dark"
                    : "text-gray-600"
                }`}
              >
                {tab.title[locale]}
              </li>
            ))}
            {/* Sliding bar */}
            <div
              className="absolute bottom-0 h-[1px] bg-dark transition-all duration-300"
              style={barStyle}
            ></div>
          </ul>
          <p className="my-4 max-h-[300px] overflow-y-auto text-justify">
            {
              tabs.find(
                (tab) =>
                  tab.title[locale].toLowerCase() === selectedTab.toLowerCase()
              )?.description[locale]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDescriptionTemplate;
