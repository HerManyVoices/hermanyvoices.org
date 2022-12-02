import Banner from './Banner'
import Head from 'next/head'
import Navigation from './Navigation'
import NewsletterCTA from '@components/NewsletterCTA'
import Footer from './Footer'

export default function Layout({ children, pageTitle, description, twitterHandle, currentURL, previewImage, siteName }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />



        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Banner />
      <Navigation />
      <main>{children}</main>
      <NewsletterCTA />
      <Footer />
    </>
  )
}
