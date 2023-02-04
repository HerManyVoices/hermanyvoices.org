import React, { useRef } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useStateContext } from 'context/StateContext'
import { urlFor } from 'lib/client'

import getStripe from 'lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

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
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>

          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-48 h-48 m-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

            <h3>Your shopping bag is empty</h3>
            <Link href="/shop">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="mx-auto mt-6 w-96 rounded-xl bg-purple-500 py-8 p-24 text-xl font-bold text-white transition duration-200 hover:bg-green-600"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item.mainImage)} className="cart-product-image" alt="#" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>
                        -
                      </span>
                      <span className="num">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc')}>+</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Total:</h3>
              <h3>${totalPrice} <span className='font-thin'>(Free shipping) </span></h3>
            </div>
            <div className="btn-container">
              <button type="button" className="mx-auto mt-6 w-96 rounded-xl bg-green-500 py-8 p-24 text-xl font-bold text-white transition duration-200 hover:bg-green-600" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
