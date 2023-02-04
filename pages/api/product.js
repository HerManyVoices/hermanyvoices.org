import { client } from '../../lib/client'

export async function loadData() {
    const query = `{"products": *[_type == "product"],}`;
    const { products } = await client.fetch(query);

    const bannerQuery = `{"banner": *[_type == "banner"],}`;
    const { banner } = await client.fetch(bannerQuery);

    return { products, banner };

}