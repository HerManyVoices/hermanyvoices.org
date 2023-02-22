import { client } from '../../lib/client'

export async function loadData() {
    const query = `{"products": *[_type == "product"],}`;
    const { products } = await client.fetch(query);

    const eventsBannerQuery = `{"eventsBanner": *[_type == "eventImages"],}`;
    const { eventsBanner } = await client.fetch(eventsBannerQuery);

    return { products, eventsBanner };

}