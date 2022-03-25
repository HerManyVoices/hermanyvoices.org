import Script from 'next/script'
import Link from 'next/link'
import Layout from '@components/Layout'
import Calendar from '@components/Calendar'

function Events() {
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
    <div>
      <section>
        <div className="relative overflow-hidden bg-gray-50 pt-20 pb-24 lg:py-40">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="flex w-full items-center px-4 lg:w-1/2">
                <div className="w-full text-center lg:text-left">
                  <div className="relative mx-auto max-w-md lg:mx-0">
                    <h2 className="mb-3 font-heading text-4xl font-bold lg:text-6xl">
                      <span>Earth Day</span>
                      <span className="text-green-600"> 2022</span>
                    </h2>
                  </div>
                  <div className="relative mx-auto max-w-sm lg:mx-0">
                    <p className="mb-6 leading-loose text-gray-500 lg:text-2xl">
                      A Celebration of Indigenous Wisdom for Modern Challenges
                    </p>
                    <p className="mb-1 leading-loose text-green-600 lg:text-2xl">
                      Livestreaming on Youtube
                    </p>
                    <p className="mb-6 leading-loose text-green-600 lg:text-2xl">
                      Friday, April 22nd, 2022
                    </p>
                    <div>
                      <a
                        className="mr-4 inline-block w-full rounded-l-xl rounded-t-xl bg-green-600 py-2 px-12 font-semibold leading-loose shadow transition duration-200 hover:bg-gray-50 lg:w-auto"
                        title="Add to Calendar"
                        data-id="Pb13087502" // Event ID
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
                        data-id="13089977" // Event ID
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
              <div className="w-full px-4 lg:w-1/2">
                <Calendar className="top-0 my-12 h-full w-full rounded-3xl object-cover lg:absolute lg:my-0 lg:w-1/2 lg:rounded-none" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex flex-wrap">
              <div className="mb-10 w-full lg:mb-0 lg:w-1/2">
                <div className="max-w-md sm:m-auto">
                  <h2 className="mb-2 font-heading text-4xl font-bold lg:text-4xl">
                    Past events
                  </h2>
                  <p className="max-w-s pt-4 text-xl leading-loose text-gray-500">
                    We&apos;re busy adding past events to our new website,
                    meanwhile you can view them on our{' '}
                    <Link href="https://www.youtube.com/c/HerManyVoicesFoundation">
                      <a>
                        <span className="font-bold text-green-600 underline">
                          YouTube channel.
                        </span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="relative flex w-full lg:w-1/2">
                <iframe
                  className="relative rounded-lg sm:m-auto"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/dM9ODufd4Bg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events

Events.getLayout = function getLayout(Events) {
  return <Layout>{Events}</Layout>
}
