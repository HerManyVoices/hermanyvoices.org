import Header from '@components/Header'
import Projects from '@components/Projects'
import Testimonials from '@components/Testimonials'
import NewsletterCTA from '@components/NewsletterCTA'
import Layout from '@components/Layout'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="my-12">
        <div className="-mx-4 -mb-4 flex flex-wrap md:mb-0">
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
            <h2 className="mx-4 mb-4 font-heading text-3xl font-bold md:text-4xl">
              Who We Are
            </h2>
            <p className="text-blueGray-400 mx-4 mb-2 text-lg leading-relaxed">
              Her Many Voices Foundation is a passionate group of
              activists/artivists intent on saving our Mother Earth and All Her
              Children, through big acts of love and service, disguised as a
              non-profit.
            </p>
          </div>
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
              alt=""
              className="rounded shadow"
            ></img>
          </div>
        </div>

        <section className="skewed-top-left skewed-bottom-right my-12">
          <div className="skew skew-top mr-for-radius">
            <svg
              className="h-8 w-full text-green-600 md:h-12 lg:h-20"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
            </svg>
          </div>
          <div className="skew skew-top ml-for-radius">
            <svg
              className="h-8 w-full text-green-600 md:h-12 lg:h-20"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
            </svg>
          </div>
          <div className="radius-for-skewed bg-green-600 py-20">
            <div className="container mx-auto px-4"></div>
            <div className="my-12 mx-4">
              <div className="-mb-4 flex flex-wrap-reverse md:mb-0">
                <div className="mb-4 w-full md:mb-0 md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                    className="rounded shadow"
                  ></img>
                </div>
                <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
                  <h2 className="mx-4 mb-4 font-heading text-3xl font-bold md:text-4xl">
                    Our Big <span className="italic text-white">Why</span>
                  </h2>
                  <p className="text-blueGray-400 mx-4 mb-2 leading-relaxed">
                    Can you hear it? The Voice of Mother Earth Calling? Her
                    children Crying? Are you listening? She&apos;s weeping… and
                    we are listening, and responding.
                  </p>
                  <p className="text-blueGray-400 mx-4 mb-2 leading-relaxed">
                    85% of women and children live in poverty. 75% of the
                    earth&apos;s landscape is scared by environmental calamity.
                    Children are hungry. People are desperate. Time is running
                    out.
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

        <div className="-mx-4 -mb-4 flex flex-wrap md:mb-0">
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
            <h2 className="mx-4 mb-4 font-heading text-3xl font-bold md:text-4xl">
              We are responding.{' '}
              <span className="text-green-600">Why we succeed:</span>
            </h2>
            <p className="text-blueGray-400 mx-4 mb-2 text-lg leading-relaxed">
              Adaptability in approach / focus on artivism and Indigenous Wisdom
              / Partner and Coalition Building
            </p>
          </div>
          <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
              alt=""
              className="rounded shadow"
            ></img>
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
