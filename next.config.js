/** @type
 * {import('next').NextConfig}
 * */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'cdn.sanity.io'],
    formats: ['image/webp'],
  },
  env: { 
    ADDEVENT_UPCOMING_MAIN_EVENTS_ENDPOINT: [process.env.ADDEVENT_UPCOMING_MAIN_EVENTS_ENDPOINT ],
    ADDEVENT_PAST_MAIN_EVENTS_ENDPOINT: [process.env.ADDEVENT_PAST_MAIN_EVENTS_ENDPOINT ],
    ADDEVENT_EARTHDAY_EVENTS_ENDPOINT1: [process.env.ADDEVENT_EARTHDAY_EVENTS_ENDPOINT1 ],
    ADDEVENT_EARTHDAY_EVENTS_ENDPOINT2: [process.env.ADDEVENT_EARTHDAY_EVENTS_ENDPOINT2 ],
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: [process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ],
  },
  }
