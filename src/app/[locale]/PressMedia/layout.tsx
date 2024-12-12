
import Wrapper from "@/components/Wrapper";
import PageTitle from "@/components/PageTitle";
import SideNav from "@/components/SideNav";

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

export default layout