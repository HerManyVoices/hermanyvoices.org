import Layout from '@components/Layout'
import '../public/images/EarthDay-2022-Hero.png'
import SpeakerList from '@components/SpeakerList'
import Script from 'next/script'
import EarthDaySponsors from '@components/EarthDaySponsors'
import EarthDayCalendar from '@components/EarthDayCalendar'

function EarthDay() {
  const CalIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="align-end inline-block h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )

  const MailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="align-end inline-block h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
  return (
    <section className="bg-gray-50">
      <div className=" bg-[#603913]">
        <div className="mb-6 h-72 bg-[url('/images/EarthDay-2022-Hero.png')] bg-contain bg-center bg-no-repeat py-20 md:h-96"></div>
      </div>
      <div className="container relative mx-auto px-4 md:pt-10 lg:-mb-10">
        <div className="mb-16 text-center">
          <div className="mb-6 md:hidden">
            <a
              className="mr-4 mb-2 inline-block w-full rounded-l-xl rounded-t-xl bg-green-600 py-2 px-12 font-semibold leading-loose shadow transition duration-200 hover:bg-gray-50 md:mb-0 lg:w-auto"
              title="Add to Calendar"
              data-id="Pb13087502"
              href="https://www.addevent.com/event/hO13089977"
              target="_blank noreferrer"
              rel="nofollow"
            >
              <MailIcon /> RSVP
            </a>
            <Script
              type="text/javascript"
              src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js"
              async
              defer
            ></Script>

            <a
              className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose shadow transition duration-200 hover:bg-gray-50 lg:w-auto"
              title="Add to Calendar"
              data-id="13089977"
              href="https://www.addevent.com/event/hO13089977"
              target="_blank noreferrer"
              rel="nofollow"
            >
              <CalIcon /> Add to Calendar
            </a>
            <Script
              type="text/javascript"
              src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js"
              async
              defer
            ></Script>
          </div>
          <h1 className="mb-4 text-3xl leading-tight tracking-tighter text-green-600 md:text-5xl md:font-thin">
            Earth Day 2022: A Celebration of Indigenous Wisdom to Face Modern
            Challenges
          </h1>
          <p className="text-lg font-medium text-gray-600 md:text-xl">
            This free online event — consisting of over 13 hours of programming
            — centers the voices of Indigenous People and those who actively
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
                    Livestreaming on Youtube - Friday, April 22nd, 2022
                  </p>
                  <p className="mb-1 leading-loose text-green-600 md:hidden lg:text-2xl">
                    Livestreaming on Youtube
                  </p>
                  <p className="mb-6 leading-loose text-green-600 md:hidden lg:text-2xl">
                    Friday, April 22nd, 2022
                  </p>
                  <div>
                    <a
                      className="mr-4 mb-2 inline-block w-full rounded-l-xl rounded-t-xl bg-green-600 py-2 px-12 font-semibold leading-loose shadow transition duration-200 hover:bg-gray-50 md:mb-0 lg:w-auto"
                      title="Add to Calendar"
                      data-id="Pb13087502"
                      href="https://www.addevent.com/event/hO13089977"
                      target="_blank noreferrer"
                      rel="nofollow"
                    >
                      <MailIcon /> RSVP
                    </a>
                    <Script
                      type="text/javascript"
                      src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js"
                      async
                      defer
                    ></Script>

                    <a
                      className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose shadow transition duration-200 hover:bg-gray-50 lg:w-auto"
                      title="Add to Calendar"
                      data-id="13089977"
                      href="https://www.addevent.com/event/hO13089977"
                      target="_blank noreferrer"
                      rel="nofollow"
                    >
                      <CalIcon /> Add to Calendar
                    </a>
                    <Script
                      type="text/javascript"
                      src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js"
                      async
                      defer
                    ></Script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EarthDayCalendar />
      <SpeakerList />
      <EarthDaySponsors />
    </section>
  )
}

export default EarthDay

EarthDay.getLayout = function getLayout(EarthDay) {
  return <Layout>{EarthDay}</Layout>
}
