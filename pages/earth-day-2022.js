import Head from 'next/head'
import '../public/images/EarthDay-2022-Hero.png'
import Layout from '@components/Layout'
import SpeakerList from '@components/SpeakerList'
import EarthDaySponsors from '@components/EarthDaySponsors'
import EarthDayEventList from '@components/EarthDayEventList'

function EarthDay2022() {
  return (
    <section className="bg-gray-50">
      <Head>
        <title>HMVF | Earth Day 2022</title>
        <meta property="og:title" content="Her Many Voices Foundation" key="title" />
      </Head>
      <div className=" bg-[#603913]">
        <div className="mb-6 h-72 bg-[url('/images/EarthDay-2022-Hero.png')] bg-contain bg-center bg-no-repeat py-20 md:h-96"></div>
      </div>
      <div className="container relative mx-auto px-4 md:pt-10 lg:-mb-10">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl leading-tight tracking-tighter text-green-600 md:text-5xl md:font-thin">
            Earth Day 2022: A Celebration of Indigenous Wisdom to Face Modern
            Challenges
          </h1>
          <p className="text-lg font-medium text-gray-600 md:text-xl">
            This free online event centers the voices of Indigenous People and those who actively
            share their values and support their efforts to build sustainable,
            thriving systems- leaders, artists / activists (“Artivists”),
            musicians, sustainability experts, futurists, performers,
            environmentalists, hemp growers, and partnering nonprofit
            organizations from around the world who are joining together to
            share their wisdom to guide us all in <br></br> helping Mother Earth
            thrive.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pb-24">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-full items-center px-4">
              <div className="w-full text-center">
                <div className="relative mx-auto w-full lg:mx-0">
                  <p className="mb-1 hidden leading-loose text-green-600 md:block lg:text-2xl">
                    Livestreamed on Youtube - Friday, April 22nd, 2022
                  </p>
                  <p className="mb-1 leading-loose text-green-600 md:hidden lg:text-2xl">
                    Livestreamed on Youtube
                  </p>
                  <p className="mb-6 leading-loose text-green-600 md:hidden lg:text-2xl">
                    Friday, April 22nd, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SpeakerList />
      <EarthDayEventList />
      <EarthDaySponsors />
    </section>
  )
}

export default EarthDay2022

EarthDay2022.getLayout = function getLayout(EarthDay2022) {
  return <Layout>{EarthDay2022}</Layout>
}
