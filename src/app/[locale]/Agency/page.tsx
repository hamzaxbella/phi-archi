import AboutDescription from '@/components/AboutDescription/AboutDescription'
import NumiricTab from '@/components/aboutComponents/Numiric tab/NumiricTab'
import Testimonials from '@/components/aboutComponents/Testimonials/Testimonials'
import React from 'react'
import PhotoGallery from '@/components/aboutComponents/PhotoGallery/PhotosGallery'

export default async function AboutUs({params}) {
  const {locale} = await params

  return (
    <div className='lg:px-12 '>
      <AboutDescription locale={locale} />
      <NumiricTab locale={locale}/>
      <Testimonials locale={locale} />
      <PhotoGallery />
    </div>
  )
}
