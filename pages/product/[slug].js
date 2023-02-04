import React from 'react'
import { client, urlFor } from 'lib/client'
import { useStateContext } from 'context/StateContext'
import Head from 'next/head'
import Layout from '@components/Layout'

export default function ProductDetails({ product }) {
    const { mainImage, name, description, price } = product;
    const { incQty, decQty, qty, onAdd } = useStateContext();

    return (
        <>
            <Head>
                <title>HMV | {name && name}</title>
                <meta property="og:title" content="Her Many Voices" key="title" />
            </Head>
            <section className="py-4  md:my-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="flex flex-wrap -mx-1">
                                <div className="md:w-full px-1">
                                    <h2 className="max-w-xl text-3xl md:text-5xl font-bold font-heading md:hidden text-center">{name}</h2>
                                    <img className="relative object-contain mt-6 -mb-10 md:mb-0 md:mt-0 mx-auto md:w-[440px] md:h-full rounded-xl" src={urlFor(mainImage && mainImage)} alt={name}></img>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="mb-10 pb-10 border-b">
                                <h2 className="mt-2 mb-6 max-w-xl text-4xl md:text-5xl font-bold font-heading hidden md:block">{name}</h2>
                                <p className="max-w-md text-gray-500 mt-12 md:mt-0 text-lg mb-8">{description}</p>
                                <p className="inline-block text-2xl font-bold font-heading text-green-500">
                                    <span>${price}</span>
                                </p>
                                <p className="block text-xl font-bold font-heading text-green-500">
                                    <span>FREE SHIPPING</span>
                                </p>
                            </div>
                            <div className="flex justify-center mb-14 w-full">
                                <div className="md:w-1/4 mb-auto mr-4">
                                    <span className="block mb-4 font-bold text-xl font-heading text-gray-400 uppercase">QTY</span>
                                    <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                                        <span className="py-2 hover:text-gray-700" onClick={decQty}>
                                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                                        </span>
                                        <span className="w-12 mx-1 px-2 py-4 text-center border-2 focus:ring-transparent focus:outline-none rounded-md" type="number">{qty}</span>
                                        <span className="py-2 hover:text-gray-700" onClick={incQty}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-3/4 mt-auto">
                                    <button onClick={() => onAdd(product, qty)} className="block w-full py-4 bg-green-500 hover:bg-blue-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { products, product }
    }
}

export async function getStaticPaths() {
    ProductDetails
    ProductDetails.getLayout = function getLayout(ProductDetails) {
        return <Layout>{ProductDetails}</Layout>
    }
    const query = `*[_type == "product"] {
        slug {
        current
        }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));
    return {
        paths,
        fallback: false,
    }
}