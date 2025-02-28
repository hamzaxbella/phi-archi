import {
  agencyCover,
  contactCover,
  mediaCover,
  projectsCover,
  servicesCover,
  ecouter,
  edifier,
  innover
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
    title: {
      fr: "VALEUR 1",
      en: "VALUE 1",
      ar: "القيمة 1"
    },
    description: {
      fr: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      ar: `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقة وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه.`
    },
    image: ecouter,
  },
  {
    id: 1,
    title: {
      fr: "VALEUR 2",
      en: "VALUE 2",
      ar: "القيمة 2"
    },
    description: {
      fr: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      ar: `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقة وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه.`
    },
    image: edifier,
  },
  {
    id: 2,
    title: {
      fr: "VALEUR 3",
      en: "VALUE 3",
      ar: "القيمة 3"
    },
    description: {
      fr: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      ar: `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقة وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه.`
    },
    image: innover,
  },
];
