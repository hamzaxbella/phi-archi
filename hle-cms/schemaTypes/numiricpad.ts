import { defineField, defineType } from "sanity";

export default defineType ({
    name: "numiricpad",
    title : 'Numiric Pad',
    type: 'document',
    fields: [
        defineField({
            name: "completed",
            title: "Projets terminés",
            type: "number",
        }),
        defineField({
            name: "kelometre",
            title : 'Kilomètre Conduits',
            type: 'number',
        }),
        defineField({
            name: "maquette",
            title : 'Maquettes présentés',
            type: 'number',
        }),
        defineField({
            name: "plans",
            title : 'Plans Imprimés',
            type: 'number',
        }),
    ]
})