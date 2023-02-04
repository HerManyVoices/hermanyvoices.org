import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: '2023-01-22',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);