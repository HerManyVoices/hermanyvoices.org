import { client } from '../../lib/client'

export async function loadData() {
    const query = `{"products": *[_type == "product"],}`;
    const { products } = await client.fetch(query);

    const eventsBannerQuery = `{"eventsBanner": *[_type == "eventImages"],}`;
    const { eventsBanner } = await client.fetch(eventsBannerQuery);

    const eventTimelineImagesBannerQuery = `{"eventTimelineImages": *[_type == "eventTimelineImages"],}`;
    const { eventTimelineImages } = await client.fetch(eventTimelineImagesBannerQuery);

    return { products, eventsBanner, eventTimelineImages };

}