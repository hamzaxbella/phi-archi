import Wrapper from "@/components/Wrapper"
import ServicesList from "@/components/ServiceComponents/ServicesList"
import ServicesDescription from "@/components/ServiceComponents/ServicesDescription"
import PageTitle from "@/components/PageTitle"

const Services = async ({params}) => {
  const {locale} = await params
  return (
    <div className={`${locale === 'ar' && 'font-cairo' }`}>
      <Wrapper locale={locale} PageTitle={<PageTitle label={{en: 'Services', fr: 'Services', ar: 'الخدمات'}} locale={locale} />} side={<ServicesList locale={locale} />} main={<ServicesDescription locale={locale} />} path={'/'} />
    </div>
  )
}

export default Services