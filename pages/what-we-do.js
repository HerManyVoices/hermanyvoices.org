import Head from 'next/head'
import Link from 'next/link'
import Layout from '@components/Layout'
import ProjectList from '@components/ProjectList'

function WhatWeDo() {
  return (
    <section>
      <Head>
        <title>HMVF | What We Do</title>
        <meta property="og:title" content="What We Do" key="title" />
      </Head>
      <div className="flex flex-wrap-reverse ">
        <div className="inset-0 w-full py-3 lg:w-1/2 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="font-heading text-2xl font-bold text-green-600 lg:text-5xl">
                What We Do
              </h1>
              <div className="mx-auto mb-6 w-auto">
                <p className="pt-4 text-xl text-gray-900 lg:text-2xl">
                  We listen to the voices of need, determine the best response
                  strategy and then activate a community or coalition solution
                  designed to strengthen the long-term viability of recipients
                  of our aid and programs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-64 w-full bg-[url('https://res.cloudinary.com/hmvf/image/upload/q_auto,f_auto/v1648758754/What_do_we_do_svyu3f.jpg')] bg-cover bg-center bg-no-repeat py-3 md:h-auto md:bg-top md:py-32 lg:w-1/2 lg:py-20"></div>
      </div>

      <div className="bg-gray-50 py-4 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 max-w-lg text-center md:mb-16">
            <h2 className="mt-4 font-heading text-2xl font-bold text-green-600 md:text-4xl">
              How We Do It
            </h2>
            <p className="py-4 text-2xl text-gray-900">
              Project by project, we solve small problems that lead to big
              impacts.
            </p>
            <div className="inline-flex flex-wrap rounded bg-white py-1 text-sm sm:space-x-1 sm:px-1">
              <Link href="#environmental-projects" passHref>
                <button className="mx-1 mb-1 w-full rounded py-2 px-4 font-bold text-gray-500 transition duration-200 focus-within:bg-gray-50 focus-within:text-gray-900 focus-within:shadow hover:bg-gray-50 hover:text-gray-900 hover:shadow focus:outline-none sm:mx-0 sm:mb-0 sm:w-auto">
                  Environment
                </button>
              </Link>
              <Link href="#community-projects" passHref>
                <button className="mx-1 mb-1 w-full rounded py-2 px-4 font-bold text-gray-500 transition duration-200 focus-within:bg-gray-50 focus-within:text-gray-900 focus-within:shadow hover:bg-gray-50 hover:text-gray-900 hover:shadow focus:outline-none sm:mx-0 sm:mb-0 sm:w-auto">
                  Community
                </button>
              </Link>
              <Link href="#cultural-projects" passHref>
                <button className="mx-1 mb-1 w-full rounded py-2 px-4 font-bold text-gray-500 transition duration-200 focus-within:bg-gray-50 focus-within:text-gray-900 focus-within:shadow hover:bg-gray-50 hover:text-gray-900 hover:shadow focus:outline-none sm:mx-0 sm:mb-0 sm:w-auto">
                  Culture
                </button>
              </Link>
            </div>
          </div>
          <ProjectList />
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

WhatWeDo.getLayout = function getLayout(WhatWeDo) {
  return <Layout>{WhatWeDo}</Layout>
}
