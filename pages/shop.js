import { loadData } from 'pages/api/product';
import Product from 'components/Product'
import Head from 'next/head'

export default function shop({ products }) {

const sortedProducts = products.sort((a, b) => {  
    return a.position - b.position;
  });

  return (
    <section className="py-10 bg-gray-100 overflow-x-hidden">
            <Head>
                <title>HMV | Shop</title>
                <meta property="og:title" content="Her Many Voices" key="title" />
            </Head>

            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">Support our work</h2>
                <p className='md:mb-12 md:w-3/5 m-auto text-center'>Support Her Many Voices with gifts that make our work possible. Profits from each item fund our operating costs and help us grow.</p>
                <div className="container mx-auto px-4">
                    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {sortedProducts?.map((product) => <Product key={product._id} product={product} />)}
                    </ul>
        </div>
            </div>
        </section>
  )
}

export async function getServerSideProps() {
  const {products } = await loadData();
  return {
    props: {
      products,
    },
  }
}


