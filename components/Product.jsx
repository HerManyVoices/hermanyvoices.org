import React from 'react'
import Link from 'next/link'
import { urlFor } from 'lib/client'

const Product = ({ product: {id, mainImage, name, slug, price} }) => {

        return (
            <Link href={`/product/${slug.current}`}>

            <li key={id} className="rounded-lg mt-6 h-full border rounded-b-lg bg-white transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                    <img className="w-full md:h-72 object-cover rounded-t-lg" src={urlFor(mainImage && mainImage)} alt={name}></img>
                <div className="p-4 bg-white grid auto-rows-fr">
                    <div className="px-6 mb-2">
                        <h3 className="text-sm font-bold font-heading mb-auto">{name}</h3>
                        <p className="text-lg font-bold font-heading text-green-500 pt-6 -mb-6">
                            <span>${price} USD</span>
                        </p>
                    </div>
                </div>
        </li>
        </Link>


        )};

export default Product

