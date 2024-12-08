import {
  agencyCover,
  contactCover,
  mediaCover,
  projectsCover,
  servicesCover,
} from "../../../public";

export const Navigators = [
  {
    path: "/Projects",
    title: [{ fr: "Projets" }, { en: "Projects" }, { ar: "مشاريعنا" }],
    image: projectsCover,
  },
  {
    path: "/Agency",
    title: [{ fr: "Agence" }, { en: "Agency" }, { ar: "عن وكالتنا" }],
    image: agencyCover,
  },
  {
    path: "/ContactUs",
    title: [{ fr: "Contacter" }, { en: "Contact us" }, { ar: "تواصل معنا" }],
    image: contactCover,
  },
  {
    path: "/PressMedia",
    title: [
      { fr: "Médias et Presse" },
      { en: "Media & Press" },
      { ar: "مقالات" },
    ],
    image: mediaCover,
  },
  {
    path: "/Services",
    title: [{ fr: "Services" }, { en: "Services" }, { ar: "خدماتنا" }],
    image: servicesCover,
  },
];

export const PhiloSlides = [
  {
    id: 0,
    title: "ÉCOUTER",
    description: `
            Chez HLE Architecture, l’écoute est au cœur de notre processus. Nous croyons qu'un projet commence par comprendre les besoins et les aspirations de nos clients et des communautés. En favorisant un dialogue authentique, nous recueillons des perspectives essentielles qui nourrissent notre créativité. Cette approche nous permet de concevoir des espaces en harmonie avec leur environnement, garantissant que chaque réalisation reflète véritablement la voix de ceux qui l’utilisent.

        `,
  },
  {
    id: 1,
    title: "ÉDIFIER",
    description: `
            Édifier est au cœur de notre mission chez HLE Architecture. Nous voyons chaque projet comme une opportunité d'élever les espaces et d'offrir des structures qui racontent une histoire unique et durable. Construire, pour nous, va au-delà des simples plans et matériaux ; c'est créer des lieux qui fusionnent esthétique, fonctionnalité et harmonie avec leur environnement. Dans chaque projet, nous nous engageons à respecter les valeurs d’intégrité et de précision, en nous appuyant sur des années d’expérience et une compréhension profonde des attentes de nos clients. Qu’il s’agisse de résidences, de bureaux ou de bâtiments publics, notre approche repose sur un dialogue constant, une écoute attentive et une attention au détail.
            Édifier avec HLE, c’est bâtir des espaces qui reflètent vos aspirations, tout en intégrant une vision moderne et responsable.

        `,
  },
  {
    id: 0,
    title: "INNOVER",
    description: `
            L’innovation est au cœur de notre démarche chez HLE Architecture. Nous croyons que l’architecture doit évoluer pour relever les défis contemporains. En combinant technologies de pointe et concepts audacieux, nous développons des solutions uniques et adaptées. Cette philosophie nous pousse à explorer de nouvelles frontières et à remettre en question les conventions. En collaborant avec des experts, nous transformons notre vision architecturale en réalisations concrètes, façonnant un avenir inspirant.
            Nous faisons de l’analyse de toute nouvelle situation un préalable et abordons chaque projet sans à priori, avec un regard sans cesse renouvelé mais expérimenté. Notre démarche consiste à passer les questions posées aux filtres de nos interrogations sociales, économiques, théoriques ou techniques : c’est la garantie d’inscrire une démarche innovante dans un contexte réaliste.

        `,
  },
];
