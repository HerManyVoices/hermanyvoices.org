import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@components/Layout'
import { BlueLine1, BlueLine2, BlueLine3 } from 'public/images/blue-lines.js'
import hempPic from 'public/images/seed-of-change.jpeg'
import newsletterPic from 'public/images/newsletter.jpeg'
import donate from 'public/images/donate.jpeg'

function SupportUs() {
  return (
    <section className="xl:py-18 bg-gray-50 py-20">
      <Head>
        <title>HMV | Support Us</title>
        <meta property="og:title" content="Her Many Voices" key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="xl:mb-18 mx-auto mb-14 max-w-xl text-center">
          <h1 className="mb-10 font-heading text-6xl font-bold md:text-7xl xl:text-8xl">
            Support Us
          </h1>
          <p className="text-lg font-bold text-green-600 md:text-2xl">
            Get involved! We do a lot with a little.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/3">
            <div className="mb-6">
              <Image
                className="h-60 w-full rounded-6xl object-cover"
                src={hempPic}
                alt=""
              />
            </div>
            <div className="relative w-4/5 sm:w-1/2 lg:w-3/4">
              <div className="absolute top-0 right-0 -mr-12 -mt-40">
                <BlueLine1 />
              </div>
              <div className="relative flex flex-col rounded-3xl bg-white p-5 md:w-80 md:px-4 xl:px-10">
                <h3 className="mb-2 font-heading text-xl font-medium leading-loose">
                  Be a Seed for Change
                </h3>
                <p className="text-gray-600">
                  Donate at least $5 a month, join our newsletter list, and
                  commit to one action per month to further the goals of the Her
                  Many Voices. With enough of us working together, we
                  will create a world that works for everyone.
                </p>
                <a
                  className="custom-dbox-popup mr-auto my-4 rounded-l-xl rounded-t-xl bg-green-500 py-2 px-6 text-sm font-bold text-white transition duration-200 hover:bg-green-600"
                  href="https://donorbox.org/general-96"
                >
                  Be a Seed for Change
                </a>
              </div>
            </div>
          </div>
          <div className="mb-10 w-full px-4 lg:mb-0 lg:mt-24 lg:w-1/3">
            <div className="mb-6">
              <Image
                className="h-60 w-full rounded-6xl object-cover"
                src={newsletterPic}
                alt=""
              />
            </div>
            <div className="relative ml-auto w-4/5 sm:w-1/2 lg:w-3/4">
              <div className="absolute bottom-0 left-0 mb-20 -ml-12">
                <BlueLine3 />
              </div>

              <div className="relative flex flex-col rounded-3xl bg-white p-5 md:w-80 md:px-4 xl:px-10">
                <h3 className="mb-2 font-heading text-xl font-medium leading-loose">
                  Join our mailing list
                </h3>
                <p className="text-gray-600">
                  We will keep you in the loop on what we are up to and how to
                  get involved.
                </p>
                <Link href="#newsletter" passHref legacyBehavior>
                  <button
                    className="mr-auto my-4 rounded-l-xl rounded-t-xl bg-green-500 py-2 px-6 text-sm font-bold text-white transition duration-200 hover:bg-green-600"
                    href=""
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <div className="mb-6">
              <Image
                className="h-60 w-full rounded-6xl object-cover"
                src={donate}
                alt=""
              />
            </div>
            <div className="relative ml-auto w-4/5 sm:w-1/2 lg:w-3/4">
              <div className="absolute top-0 left-0 -ml-12 -mt-24">
                <BlueLine2 />
              </div>
              <div className="relative flex flex-col rounded-3xl bg-white p-5 md:w-80 md:px-4 xl:px-10">
                <h3 className="mb-2 font-heading text-xl font-medium leading-loose">
                  Donate
                </h3>
                <p className="text-gray-600">
                  Our funders, donors, and sponsors are the wind beneath our
                  wings. Your support is vital to our success.
                </p>
                <a
                  className="custom-dbox-popup mr-auto my-4 rounded-l-xl rounded-t-xl bg-green-500 py-2 px-6 text-sm font-bold text-white transition duration-200 hover:bg-green-600"
                  href="https://donorbox.org/general-96"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportUs

SupportUs.getLayout = function getLayout(SupportUs) {
  return <Layout>{SupportUs}</Layout>
}
