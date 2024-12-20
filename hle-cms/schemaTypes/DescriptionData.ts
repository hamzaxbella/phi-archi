import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'descriptionData',
  title: 'Description Data',
  type: 'document',
  fields: [
    defineField({
      name : 'title',
      title : 'Title',
      type : 'string'
    }),
    defineField({
      name : 'who_we_are',
      title : 'Who We Are',
      type : 'object',
      fields : [
        defineField({
          name : 'title',
          title : 'Title',
          type : 'object',
          fields : [
            defineField({
              name : 'en',
              title : 'English',
              type : 'string'
            }),
            defineField({
              name : 'fr',
              title : 'French',
              type : 'string'
            }),
            defineField({
              name : 'ar',
              title : 'Arabic',
              type : 'string'
            })
          ]
        }),
        defineField({
          name : 'description',
          title : 'Description',
          type : 'object',
          fields : [
            defineField({
              name : 'en',
              title : 'English',
              type : 'text'
            }),
            defineField({
              name : 'fr',
              title : 'French',
              type : 'text'
            }),
            defineField({
              name : 'ar',
              title : 'Arabic',
              type : 'text'
            })
          ]
        })
      ]
    }),
    defineField({
      name : 'collaboration',
      title : 'Collaboration',
      type : 'object',
      fields : [
        defineField({
          name : 'title',
          title : 'Title',
          type : 'object',
          fields : [
            defineField({
              name : 'en',
              title : 'English',
              type : 'string'
            }),
            defineField({
              name : 'fr',
              title : 'French',
              type : 'string'
            }),
            defineField({
              name : 'ar',
              title : 'Arabic',
              type : 'string'
            })
          ]
        }),
        defineField({
          name : 'description',
          title : 'Description',
          type : 'object',
          fields : [
            defineField({
              name : 'en',
              title : 'English',
              type : 'text'
            }),
            defineField({
              name : 'fr',
              title : 'French',
              type : 'text'
            }),
            defineField({
              name : 'ar',
              title : 'Arabic',
              type : 'text'
            })
          ]
        })
      ]
    }),
    defineField({
      name : 'expertise',
      title : 'Expertise',
      type : 'object',
      fields : [
        defineField({
          name : 'title',
          title : 'Title',
          type : 'object',
          fields : [
            defineField({
              name : 'en',
              title : 'English',
              type : 'string'
            }),
            defineField({
              name : 'fr',
              title : 'French',
              type : 'string'
            }),
            defineField({
              name : 'ar',
              title : 'Arabic',
              type : 'string'
            })
          ]
        }),
        defineField({
          name : 'description',
          title : 'Description',
          type : 'object',
          fields : [
            defineField({
              name : 'en',
              title : 'English',
              type : 'text'
            }),
            defineField({
              name : 'fr',
              title : 'French',
              type : 'text'
            }),
            defineField({
              name : 'ar',
              title : 'Arabic',
              type : 'text'
            })
          ]
        })
      ]
    }),


  ]
});
