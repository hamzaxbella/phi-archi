import { defineField, defineType } from "sanity";

export default defineType({
    name : 'gallery',
    title : "Gallery",
    type: 'document',
    fields : [
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }], // Array of images
          }),      
    ]
})