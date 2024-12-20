import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    defineField({
      name: 'stitle',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),

    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options : {
        source: 'stitle',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ar',
          title: 'Arabic',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'object',
        fields: [
          defineField({
            name: 'en',
            title: 'English',
            type: 'text',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'fr',
            title: 'French',
            type: 'text',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'ar',
            title: 'Arabic',
            type: 'text',
            validation: (Rule) => Rule.required(),
          }),
        ],
      }),
    defineField({
        name: 'content',
        title: 'Content',
        type: 'object',
        fields: [
          defineField({
            name: 'en',
            title: 'English',
            type: 'text',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'fr',
            title: 'French',
            type: 'text',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'ar',
            title: 'Arabic',
            type: 'text',
            validation: (Rule) => Rule.required(),
          }),
        ],
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options : {
            hotspot : true
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm:ss',
        },
        initialValue: () => new Date().toISOString(),
      }),
  
  
  ],
})
