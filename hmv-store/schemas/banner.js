import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'product',
            title: 'Product',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        }),
        defineField({
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        }),
        defineField({
            name: 'midText',
            title: 'MidText',
            type: 'string',
        }),
        defineField({
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        }),
        defineField({
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'string',
        }),
        defineField({
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
    ],
    preview: {
        select: {
            title: 'product',
            product: 'product.product',
            media: 'mainImage',
        },
        prepare(selection) {
            const { product } = selection
            return { ...selection, subtitle: product && `by ${product}` }
        },
    },
})
