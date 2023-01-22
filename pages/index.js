import Head from 'next/head'
import Layout from '@components/Layout'
import Header from '@components/Header'
import Testimonials from '@components/Testimonials'
import ImageSlider from '@components/ImageSlider'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Her Many Voices</title>
        <meta property="og:title" content="Her Many Voices" key="title" />
      </Head>
      <Header />
      <div className="my-12">
        <div className="-mx-4 -mb-4 flex flex-wrap md:mb-0 lg:py-16">
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2  lg:px-10">
            <h2 className="mx-4 mb-4 font-heading text-3xl font-bold text-blueGray-100 md:text-4xl">
              <span className="text-green-600">Who</span> We Are
            </h2>
            <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
              Her Many Voices is a passionate group of activists,
              artists and global community members intent on saving our Mother
              Earth and All Her Children, through community engagement.
            </p>
          </div>
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
            <img
              src="https://res.cloudinary.com/hmvf/image/upload/q_auto,f_auto/v1649962069/Row_2_Who_We_Are_unnamed_mjmpew.jpg"
              alt=""
              className="rounded shadow md:-mx-4"
            ></img>
          </div>
        </div>

        <section className="skewed-top-left skewed-bottom-right my-12">
          <div className="skew skew-top ml-for-radius -mb-[.6px]">
            <svg
              className="h-8 w-full text-green-600 md:h-12 lg:h-20"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
            </svg>
          </div>
          <div className="radius-for-skewed -mb-[.6px] bg-green-600 py-20">
            <div className="container mx-auto px-4"></div>
            <div className="my-12 mx-4">
              <div className="-mb-4 flex flex-wrap-reverse md:mb-0">
                <div className="mb-4 w-full md:mb-0 md:w-1/2">
                  <img
                    src="https://res.cloudinary.com/hmvf/image/upload/q_auto,f_auto/v1646879309/our-big-why_wq4dm5.jpg"
                    alt=""
                    className="rounded shadow"
                  ></img>
                </div>
                <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
                  <h2 className="mx-4 mb-4 font-heading text-3xl font-bold text-blueGray-100 md:text-4xl">
                    Our Big <span className="text-white">Why</span>
                  </h2>
                  <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
                    Indigenous Peoples make up less than 5% of the population
                    while protecting 80% of Mother Earth&apos;s resources. There
                    is a gap in non-profit support that reveals that .2 % of
                    funding goes to Indigenous groups.
                  </p>
                  <p className="mx-4 pt-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
                    By supporting Indigenous People and humanitarian projects,
                    we are investing in the future of our planet while
                    developing strong, resilient communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skew skew-bottom mr-for-radius">
            <svg
              className="h-8 w-full text-green-600 md:h-12 lg:h-20"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
            </svg>
          </div>
          <div className="skew skew-bottom ml-for-radius">
            <svg
              className="h-8 w-full text-green-600 md:h-12 lg:h-20"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
            </svg>
          </div>
        </section>

        <div className="-mx-4 -mb-4 flex flex-wrap md:mb-0  lg:py-16">
          <div className="mb-4 w-full place-self-center px-4 md:mb-0 md:w-1/2  lg:px-10">
            <h2 className="mx-4 mb-4 font-heading text-3xl font-bold text-blueGray-100 md:text-4xl">
              <span className="text-green-600">Why</span> we succeed:
            </h2>
            <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
              HMV Founder, Alicia Fall, leads us by example. From digging
              trenches to international presentations, Alicia has taught us to
              step to the need and follow the wisdom and knowledge of those we
              serve.
            </p>
            <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
              We can&apos;t do this alone- our partnerships with businesses,
              non-profits, &amp; committed individuals are key to our success.
              By leveraging strategic partnerships to direct resources and
              assets to communities, we support{' '}
              <span className="font-bold text-green-600">
                community driven solutions
              </span>
              {' '}for Indigenous groups, women and children.
            </p>
          </div>
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
            <ImageSlider className="rounded shadow md:-mx-4" />
          </div>
        </div>
      </div>
      {/* <Projects /> */}
      <Testimonials />
    </div>
  )
}

Home.getLayout = function getLayout(Home) {
  return <Layout>{Home}</Layout>
}
