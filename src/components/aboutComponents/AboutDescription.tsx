'use client';
import { useState, useRef, useEffect } from "react";
import PageTitle from "../PageTitle";

interface Tab {
  title: string;
  description: string;
}

const AboutDescription = () => {

  const tabs : Tab[] = [
    {
      title: "qui somme nous",
      description: `Fondée par Hatim EL Ouali & Lina EL Ouali, HLE est une agence, d'architecture,  d’urbanisme et de design d’intérieur, basée à Rabat et à Paris. Notre Atelier est d'abord une agence familiale, qui capitalise sur une expertise métier de plus de 30 ans à tarvers l'agence historique et réputée Atelier d'architecture EL OUALI & Hajji & ASSOCIES, co fondé Par Aziz EL Ouali en 1993. HLE allie donc le savoir-faire d'une agence de renom avec une vision contemporaine, intégrant des solutions novatrices et durables.
      Au delà de la dimension familiale, de l'heritage technique et architecturale, HLE se veut etre le fruit du developpement, et de la pluridisciplinarité donnant lieu à l'acte de bâtir. Son engagement pour la valorisation de l’architecture se concrétise à chaque étape de la chaine de valeur par une œuvre collective et un travail d'équipe constant. HLE est fondée sur les savoirs partagés et le dialogue pour augmenter le potentiel créatif d’une conception collective. Notre agence, s'est donc construite autour de projets d'une grande diversité, et de différentes échelles, avec une forte volonté:
      - d'Influencer positivement et durablement le contexte social et environnemental du projet
      - S’engager contre la banalité par des solutions architecturales innovantes
      - Concrétiser chaque projet par un engagement professionnel constant.
      Dans ce sens, chez HLE, la composition multiculturelle et pluridisciplinaire permet un échange pertinent entre les cultures, les méthodes et les contextes. Cette approche favorise une compréhension plurielle du monde. C'est ainsi que témoignent les réalisations menées par HLE pour répondre aux grands enjeux du 21e siècle.
      Cet engagement donne aux architectures traitées par HLE une profondeur qui marque la volonté d’inscrire de manière durable des éléments dans le tissu territorial. Au-delà de sa valeur d’usage, de sa puissance esthétique et de la nécessité de construire avec responsabilité, l’architecture est pour l’agence une exploration de l’intangible et de l’immatériel.`,
    },
    {
      title: "L'expertise",
      description: `L'expertise de HLE Architecture repose sur une compréhension approfondie des défis architecturaux et une capacité à transformer les idées en réalisations concrètes. Chaque projet est abordé avec une attention minutieuse aux détails techniques, tout en intégrant des solutions esthétiques et fonctionnelles.
      Nous collaborons étroitement avec nos clients pour traduire leurs aspirations en espaces uniques, adaptés à leur usage et à leur environnement, tout en respectant les normes les plus exigeantes de l'industrie.`,
    },
    {
      title: "la collaboration",
      description: `La collaboration est au cœur de la philosophie de HLE Architecture. Nous croyons que les meilleurs projets naissent d'un dialogue constant entre nos équipes et nos clients. En intégrant leurs idées et en partageant notre expertise, nous développons des solutions architecturales qui répondent parfaitement à leurs attentes.
      Chaque étape du projet est une occasion d’échanger et de co-créer, assurant ainsi une vision commune tout en respectant les objectifs et les contraintes de nos clients.`,
    },
  ];
  

  const [selectedTab, setSelectedTab] = useState<string>("qui somme nous");
  const [barStyle, setBarStyle] = useState<React.CSSProperties>({});
  const tabContainerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const tabElements = tabContainerRef.current?.querySelectorAll("li");
    const activeTabIndex = tabs.findIndex(
      (tab) => tab.title.toLowerCase() === selectedTab.toLowerCase()
    );

    if (tabElements && tabElements[activeTabIndex]) {
      const activeTab = tabElements[activeTabIndex] as HTMLElement;
      setBarStyle({
        width: `${activeTab.offsetWidth}px`,
        transform: `translateX(${activeTab.offsetLeft}px)`,
      });
    }
  }, [selectedTab , tabs]);

  return (
    <div className="flex flex-col gap-6 md:flex-row rounded-3xl overflow-hidden bg-background md:bg-white">
      <div className="md:flex-1 rounded-3xl overflow-hidden">
        <video
          className="max-h-[550px] object-cover w-full"
          src="../../about_vid.mp4"
          controls
        ></video>
      </div>
      <div className=" self-center md:flex-1 spy-4 px-2">
        <PageTitle label="hle architecture" />
        <div>
          <ul
            ref={tabContainerRef}
            className="border-b-[1px] my-2 border-gray flex justify-between items-end text-center relative"
          >
            {tabs.map((tab, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedTab(tab.title.toLowerCase())}
                data-tab={tab.title}
                className={`capitalize py-2 px-2 cursor-pointer text-sm ${
                  tab.title.toLowerCase() === selectedTab.toLowerCase()
                    ? "font-semibold text-dark"
                    : "text-gray-600"
                }`}
              >
                {tab.title}
              </li>
            ))}
            {/* Sliding bar */}
            <div
              className="absolute bottom-0 left-0 h-[1px] bg-dark transition-all duration-300"
              style={barStyle}
            ></div>
          </ul>
          <p className="my-4 max-h-[300px] overflow-y-scroll">
            {
              tabs.find(
                (tab) => tab.title.toLowerCase() === selectedTab.toLowerCase()
              )?.description
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
