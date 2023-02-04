import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useStateContext } from 'context/StateContext'
import { urlFor } from 'lib/client'
import Head from 'next/head'

import getStripe from 'lib/getStripe';

const Cart = () => {



    const cartRef = useRef();
    const { totalPrice, cartItems, toggleCartItemQuanitity, onRemove } = useStateContext();

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({
            mode: 'payment',
            sessionId: data.id,
            // collect shiiping address
            shippingAddressCollection:
                { allowedCountries: ['US'] },
            // shipping options
            lineItems: cartItems.map((item) => ({
                price: item.stripeProductId,
                quantity: item.quantity,
            })),
            successUrl: `${window.location.origin
                }/success`,
            cancelUrl: `${window.location.origin
                }/canceled`,
        });
    };

    return (
        <section className="py-20 bg-gray-100" ref={cartRef}>
            <Head>
                <title>HMV | Cart</title>
                <meta property="og:title" content="Her Many Voices" key="title" />
            </Head>
            {cartItems?.length === 0 && (
                <div className="empty-cart pb-32">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-48 h-48 m-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                    <h3>Your bag is empty</h3>
                    <Link href="/shop">
                        <button
                            type="button"
                            className="mx-auto mt-6 w-60 md:w-96 rounded-xl bg-green-500 py-2 px-8  md:py-8 md:px-24 text-lg md:text-xl font-bold text-white transition duration-200 hover:bg-green-600"
                        >
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            )}
            {cartItems?.length >= 1 && (
                <div className="container mx-auto px-4">
                    <div className="p-8 lg:p-20 bg-white">
                        <h2 className="mb-20 text-5xl font-bold font-heading">Your cart</h2>
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
                                <div className="hidden lg:flex w-full">
                                    <div className="w-full lg:w-3/6">
                                        <h4 className="mb-6 font-bold font-heading text-gray-500">Description</h4>
                                    </div>
                                    <div className="w-full lg:w-1/6">
                                        <h4 className="mb-6 font-bold font-heading text-gray-500">Price</h4>
                                    </div>
                                    <div className="w-full lg:w-1/6 text-center">
                                        <h4 className="mb-6 font-bold font-heading text-gray-500">Quantity</h4>
                                    </div>
                                    <div className="w-full lg:w-1/6 text-right">
                                        <h4 className="mb-6 font-bold font-heading text-gray-500">Total</h4>
                                    </div>
                                </div>

                                <div className="mb-12 py-6 border-t border-b border-gray-200">
                                    {cartItems?.map((item) => (
                                        <div key={0} className="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
                                            <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                                                <div className="flex -mx-4 flex-wrap items-center">
                                                    <div className="w-full md:w-1/3 px-4 mb-3">
                                                        <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                                                            <img className="h-full object-contain" src={urlFor(item.mainImage)} alt=""></img>
                                                        </div>
                                                    </div>
                                                    <div className="w-2/3 px-4">
                                                        <h3 className="mb-2 text-xl font-bold font-heading">{item.name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block lg:w-2/12 px-4">
                                                <p className="text-lg text-green-500 font-bold font-heading">${item.price}</p>
                                            </div>
                                            <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                                                <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-green-300 focus:border-green-300 rounded-md">
                                                    <button type='button' onClick={() => toggleCartItemQuanitity(item._id, 'dec')} className="py-2 hover:text-gray-700">
                                                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                                                    </button>
                                                    <span className="w-12 m-0 px-2 py-4 text-center border-0 focus:ring-transparent focus:outline-none rounded-md">{item.quantity}</span>
                                                    <button type="button" onClick={() => toggleCartItemQuanitity(item._id, 'inc')} className="py-2 hover:text-gray-700">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-auto md:w-1/6 lg:w-2/12 m-auto p-4 text-right flex flex-row">
                                                <p className="text-lg text-green-500 font-bold font-heading p-2">${item.price * item.quantity}</p>
                                                <button
                                                type="button"
                                                className="text-red-500"
                                                onClick={() => onRemove(item)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                            </div>
                                            
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className="w-full xl:w-4/12 px-4">
                                <div className="p-6 md:p-12 bg-green-300">
                                    <h2 className="mb-6 text-4xl font-bold font-heading text-white">Cart total</h2>
                                    <div class="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                                        <span class="text-blue-50">Subtotal</span>
                                        <span class="text-xl font-bold font-heading text-white">${totalPrice}</span>
                                    </div>
                                    <h4 className="mb-2 text-xl font-bold font-heading text-white">Shipping</h4>
                                    <div className="flex mb-2 justify-between items-center border-b border-white-200">
                                        <span className="text-green-50">Free</span>
                                        <span className="text-xl font-bold font-heading text-white">$0</span>
                                    </div>
                                    <div className="flex mb-10 justify-between items-center">
                                        <span className="text-xl font-bold font-heading text-white">Order total</span>
                                        <p className="text-xl font-bold font-heading text-white">${totalPrice}</p>
                                    </div>
                                    <button className="block w-full py-4 rounded-lg bg-purple-300 hover:bg-purple-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200" onClick={handleCheckout}>Go to Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Cart
