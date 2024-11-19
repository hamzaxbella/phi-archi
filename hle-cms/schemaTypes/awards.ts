import { defineField, defineType } from "sanity";

export default defineType({
    name : "awwards",
    title: "Awards",
    type: "document",
    fields : [
        defineField({
            name : 'stitle',
            title: 'Document title',
            type: 'string',
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