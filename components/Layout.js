import Banner from './Banner'
import Navigation from './Navigation'
import NewsletterCTA from '@components/NewsletterCTA'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Banner />
      <Navigation />
      <main>{children}</main>
      <NewsletterCTA />
      <Footer />
    </>
  )
}
