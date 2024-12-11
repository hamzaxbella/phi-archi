import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'team_member',
      title: 'Team member',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options : {
        source: 'team_member',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'occupation',
      title: 'Occupation',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
