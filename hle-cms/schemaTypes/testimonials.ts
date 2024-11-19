import { defineField, defineType } from "sanity";

export default defineType({
    name : "testimonials",
    title : "Testimonials",
    type: "document",
    fields : [
        defineField({
            name : "person",
            title : "Person",
            type : 'object',
            fields : [
                defineField({
                  name: 'en',
                  title: 'English',
                  type: 'string',
                }),
                defineField({
                  name: 'fr',
                  title: 'French',
                  type: 'string',
                }),
                defineField({
                  name: 'ar',
                  title: 'Arabic',
                  type: 'string',
                }),
                ],
                }),

        defineField({
            name : "testimonial",
            title : "Testimonial",
            type : 'object',
            fields : [
                defineField({
                  name: 'en',
                  title: 'English',
                  type: 'text',
                }),
                defineField({
                  name: 'fr',
                  title: 'French',
                  type: 'text',
                }),
                defineField({
                  name: 'ar',
                  title: 'Arabic',
                  type: 'text',
                }),
                ],
        
        }),
        
    ]
})