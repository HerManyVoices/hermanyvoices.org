import Header from '@components/Header'
import Projects from '@components/Projects'
import Testimonials from '@components/Testimonials'
import NewsletterCTA from '@components/NewsletterCTA'
import Layout from '@components/Layout'
import ImageSlider from '@components/ImageSlider'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="my-12">
        <div className="-mx-4 -mb-4 flex flex-wrap md:mb-0 lg:py-16">
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2 lg:px-10  place-self-center">
            <h2 className="mx-4 mb-4 font-heading text-3xl font-bold text-blueGray-100 md:text-4xl">
              <span className="text-green-600">Who</span> We Are
            </h2>
            <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
              Her Many Voices Foundation is a passionate group of activists,
              artists and global community members intent on saving our Mother
              Earth and All Her Children, through big acts of love and service,
              disguised as a non-profit.
            </p>
          </div>
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
            <img
              src="https://res.cloudinary.com/hmvf/image/upload/v1646852077/who-we-are_vzcrsj.jpg"
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
                    src="https://res.cloudinary.com/hmvf/image/upload/v1646879309/our-big-why_wq4dm5.jpg"
                    alt=""
                    className="rounded shadow"
                  ></img>
                </div>
                <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
                  <h2 className="mx-4 mb-4 font-heading text-3xl font-bold text-blueGray-100 md:text-4xl">
                    Our Big <span className="text-white">Why</span>
                  </h2>
                  <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
                    1.3 Billion people live in Multidimensional Poverty over
                    800,000,000 are women and children.
                  </p>
                  <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
                    Mother Earth struggles to breathe and her children are in
                    need,
                  </p>
                  <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
                    we are listening, and responding.
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
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2 lg:px-10  place-self-center">
            <h2 className="mx-4 mb-4 font-heading text-3xl font-bold text-blueGray-100 md:text-4xl">
              <span className="text-green-600">Why</span> we succeed:
            </h2>
            <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
            HMVF Founder, Alicia Fall, leads us by example. From digging trenches to international presentations, Alicia has taught us to step to the need and follow the wisdom and knowledge of those we serve.
            </p>
            <p className="mx-4 mb-2 text-lg leading-relaxed text-blueGray-100 lg:text-2xl">
            We bring tools, resources and coalition partners to Indigenous communities and then we <span className='font-bold text-green-600'>listen</span> to their needs. We then support the community to create the solutions they devise.
            </p>
          </div>
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
            <ImageSlider className="rounded shadow md:-mx-4"/>
          </div>
        </div>
      </div>
      <Projects />
      <Testimonials />
      <NewsletterCTA />
    </div>
  )
}

Home.getLayout = function getLayout(Home) {
  return <Layout>{Home}</Layout>
}
