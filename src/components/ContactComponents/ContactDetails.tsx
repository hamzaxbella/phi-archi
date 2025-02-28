import React from 'react'

const ContactDetails = ({locale}) => {
  const description = {
    en: "Contact us for any inquiries or collaborations. We're here to help bring your architectural vision to life.",
    fr: "Contactez-nous pour toute demande ou collaboration. Nous sommes là pour donner vie à votre vision architecturale.",
    ar: "تواصل معنا لأي استفسارات أو تعاون. نحن هنا للمساعدة في تحقيق رؤيتك المعمارية."
  }

  return (
    <div className="flex flex-col gap-4 py-8">
        <p className="text-gray-600">{description[locale]}</p>
        <div className="flex flex-col ">
            <p className="text-gray-600 border-t py-2 font-bold text-[12px] tracking-wider uppercase border-dark">Email: zyllux.agency@gmail.com</p>
            <p className="text-gray-600 border-t py-2 font-bold text-[12px] tracking-wider uppercase border-dark">Phone: +212 00 00 00 00 00 </p>
            <p className="text-gray-600 border-t py-2 font-bold text-[12px] tracking-wider uppercase border-dark">Address: 123 Main St, City, Country</p>
            <p className="text-gray-600 border-t py-2 font-bold text-[12px] tracking-wider uppercase border-dark">Address: 456 Main St, City, Country</p>
        </div>
    </div>
  )
}

export default ContactDetails