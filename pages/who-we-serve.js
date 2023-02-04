import Head from 'next/head'
import Image from 'next/image'
import {
  GreenDarkup,
  BulletsGrayRight,
  BulletsGrayLeft,
  WingGreenDown,
} from 'public/assets/who-we-serve-assets.js'
function WhoWeServe() {
  return (
    <section className="relative overflow-hidden">
      <Head>
        <title>HMV | Who We Serve</title>
        <meta property="og:title" content="What We Do" key="title" />
      </Head>
      <div className="relative bg-gray-50 pt-12 pb-12 md:pb-24 lg:pt-20">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-12 flex w-full items-center px-4 md:mb-20 lg:mb-0 lg:w-1/2">
              <div className="w-full text-center lg:text-left">
                <div className="mx-auto max-w-md lg:mx-0">
                  <h1 className="mb-3 font-heading text-4xl font-bold lg:text-5xl">
                    Who We Serve
                  </h1>
                </div>
                <div className="mx-auto max-w-sm lg:mx-0">
                  <p className="mb-6 text-lg leading-loose text-gray-600">
                    Her Many Voices is dedicated to serving and
                    protecting our Mother Earth, Indigenous People, Underserved
                    populations, women, children and the men and communities
                    they live in.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
              <div className="relative z-0">
                <Image
                  src="https://res.cloudinary.com/hmvf/image/upload/q_auto,f_auto/v1650986182/Wynne_Farm_Training_pnjy6z.jpg"
                  className="relative z-0 max-w-lg rounded-3xl object-cover md:rounded-br-none"
                  height="720"
                  width="960"
                  alt=""
                />
                <div className="absolute top-[-2rem] right-[3rem] -z-10 hidden md:block">
                  <GreenDarkup />
                </div>
                <div className="absolute bottom-[-2rem] right-[-2rem] -z-10 hidden md:block">
                  <WingGreenDown />
                </div>
                <div className="absolute top-[3rem] right-[-3rem] -z-10 hidden md:block">
                  <BulletsGrayRight />
                </div>
                <div className="absolute bottom-[2.5rem] left-[-4.5rem] -z-10 hidden md:block">
                  <BulletsGrayLeft />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </section>
  )
}

export default WhoWeServe
