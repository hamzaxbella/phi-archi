import AboutDescription from '@/components/aboutComponents/AboutDescription'
import NumiricTab from '@/components/aboutComponents/Numiric tab/NumiricTab'
import React from 'react'

export default async function AboutUs({params}) {
  const {locale} = await params

  return (
    <div className='lg:px-12 '>
      <AboutDescription />
      <NumiricTab locale={locale}/>
    </div>
  )
}
