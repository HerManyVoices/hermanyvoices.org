import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
// import Script from 'next/script'
import Header from '@components/Header'

export default function Home({ children }) {
  return (
    <div>
       {/* <Script type="text/javascript" defer src="https://donorbox.org/install-popup-button.js" />
      <Script defer
        onLoad={() => {window.DonorBox = { widgetLinkClassName: 'custom-dbox-popup' }}}/> */}
      <Navigation />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
