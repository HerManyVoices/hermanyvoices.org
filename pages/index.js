import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import Header from '@components/Header'

export default function Home({ children }) {
  return (
    <div>
      <Navigation />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
