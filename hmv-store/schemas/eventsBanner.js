import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'eventImages',
    title: 'Event banner images',
    type: 'document',
    fields: [
        defineField({
            name: 'eventImage',
            title: 'Event image preview',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'eventImageURL',
            title: 'Event image url (from Cloudinary)',
            type: 'string',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'eventName',
            title: 'Event name',
            type: 'string',
        }),
        defineField({
            name: 'altText',
            title: 'Alt text (short description of text in image)',
            type: 'string',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Publish at',
            type: 'datetime',
        }),
    ],
    preview: {
        select: {
            title: 'eventName',
            event: 'eventImages.eventName',
            media: 'eventImage',
        },
        prepare(selection) {
            const { product } = selection
            return { ...selection, subtitle: product && `by ${product}` }
        },
    },
})
