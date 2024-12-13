import ContactDetails from "@/components/ContactComponents/ContactDetails"
import ContactForm from "@/components/ContactComponents/ContactForm"
import PageTitle from "@/components/PageTitle"
import Wrapper from "@/components/Wrapper"

const ContactUs = async ({params}) => {
  const {locale} = await params
  return (
    <Wrapper locale={locale} PageTitle={<PageTitle label={{en: 'Contact Us', fr: 'Contactez-nous', ar: 'اتصل بنا'}} locale={locale} />} side={<ContactDetails locale={locale} />} main={<ContactForm locale={locale} />} path={'/'} />
  )
}

export default ContactUs