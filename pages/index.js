import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Her Many Voices Foundation</title>
      </Head>

      <main>
        <Header title="Her Many Voices Foundation" />
      </main>

      <Footer />
    </div>
  )
}
