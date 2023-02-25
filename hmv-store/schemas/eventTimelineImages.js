import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'eventTimelineImages',
    title: 'Event timeline images',
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
            name: 'eventID',
            title: 'Event ID',
            type: 'string',
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
            name: 'startDate',
            title: 'Event start date',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
            },
        }),
    ],
    preview: {
        select: {
            title: 'eventName',
            event: 'eventsTimelineImages.eventName',
            media: 'eventImage',
        },
        prepare(selection) {
            const { product } = selection
            return { ...selection, subtitle: product && `by ${product}` }
        },
    },
})
