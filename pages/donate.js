import Head from 'next/head'
import Layout from '@components/Layout'
import Script from 'next/script'

function Donate() {
    return (

        <section className="flex items-center justify-center p-2 md:p-4 bg-gray-100">
            <Head>
                <title>HMVF | Donate</title>
                <meta property="og:title" content="Her Many Voices Foundation" key="title" />
            </Head>
            <Script src="https://donorbox.org/widget.js" paypalExpress="true"></Script><iframe src="https://donorbox.org/embed/hmvf" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameBorder="0" scrolling="no" height="900px" width="100%" style={{"max-width": "500px", "min-width": "250px", "max-height":"none!important"}}></iframe>
        </section>

    )
}

export default Donate

Donate.getLayout = function getLayout(Donate) {
    return <Layout>{Donate}</Layout>
}