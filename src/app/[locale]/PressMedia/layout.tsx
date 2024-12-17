import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/PageTitle";
import SideNav from "@/components/SideNav";
import { Metadata } from 'next';  

const links = [
  { 
    label: {
      en: "Media & Press",
      fr: "Médias & Presse",
      ar: "الصحافة والإعلام"
    }, 
    url: "/PressMedia/" 
  },
  { 
    label: {
      en: "Awards",
      fr: "Prix", 
      ar: "جوائز"
    },
    url: "/PressMedia/Awards"
  },
]


const layout  = async ({params , children}) => {
  const { locale } = await params;

  return (
    <div className={`${locale === 'ar' && 'font-cairo' }`}>
      <Wrapper
        locale={locale}
        path={"/"}
        PageTitle={<PageTitle label={{ en: "Press & Media", fr: "Médias & Presse", ar: "الصحافة والإعلام" }} locale={locale} />}
        side={<SideNav links={links} locale={locale} />}
        main={children}
      />
    </div>
  )
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = params;

  return {
    title: {
      en: 'Press & Media',
      fr: 'Médias & Presse',
      ar: 'الصحافة والإعلام'
    }[locale],
    description: {
      en: 'Latest news, press releases and media coverage of HLE Architecture',
      fr: 'Dernières nouvelles, communiqués de presse et couverture médiatique de HLE Architecture',
      ar: 'آخر الأخبار والبيانات الصحفية والتغطية الإعلامية لـ HLE Architecture'
    }[locale],
    openGraph: {
      title: {
        en: 'Press & Media',
        fr: 'Médias & Presse',
        ar: 'الصحافة والإعلام'
      }[locale],
      description: {
        en: 'Latest news and media coverage',
        fr: 'Dernières nouvelles et couverture médiatique',
        ar: 'آخر الأخبار والتغطية الإعلامية'
      }[locale],
    }
  };
}

export default layout