const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                sessionId: data.id,
                shipping_address_collection: {
                    allowed_countries: ['US', 'CA']
                },
                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: { amount: 0, currency: 'usd' },
                            display_name: 'Free shipping',
                            delivery_estimate: {
                                minimum: { unit: 'business_day', value: 5 },
                                maximum: { unit: 'business_day', value: 7 },
                            },
                        },
                    },
                ],
                line_items: req.body.map((item) => {
                    const img = item.mainImage[0].asset._ref;
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/rjb5gync/production/').replace('-jpg', '.jpg');

                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`,
            }
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.redirect(303, session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}