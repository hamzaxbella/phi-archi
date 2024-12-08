import { client } from '@/lib/sanity'
import TestimonialsTemplate from './TestimonialsTemplate'
import { Testimonial } from '@/lib/interface'




export async function GetTestimonials() {
  const query = `
    *[_type == 'testimonials'] {
      person,
      testimonial
    }
  ` 
  const testimonials = client.fetch(query)
  return testimonials

}

export default async function Testimonials({locale} : {locale : string}) {

  const testimonials : Testimonial[] = await GetTestimonials()
  
  return (
    <TestimonialsTemplate locale = {locale} testimonials = {testimonials} />
  )
}