import Head from 'next/head'
import Layout from '@components/Layout'
import Script from 'next/script'

function Donate() {
    return (

        <section className="flex min-h-screen justify-center items-center mx-auto md:w-3/5 my-2">
            <Head>
                <title>HMVF | Donate</title>
                <meta property="og:title" content="Her Many Voices Foundation" key="title" />
            </Head>
            <Script src="https://donorbox.org/widget.js" paypalExpress="true"></Script><iframe src="https://donorbox.org/embed/hmvf?default_interval=m&show_content=true" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameBorder="0" scrolling="no" height="900px" width="100%" style={{"max-width": "100%", "min-width": "100%", "max-height":"none!important"}}></iframe>
        </section>

    )
}

export default Donate

Donate.getLayout = function getLayout(Donate) {
    return <Layout>{Donate}</Layout>
}