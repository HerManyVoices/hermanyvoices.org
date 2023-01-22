import Head from 'next/head'
import Layout from '@components/Layout'
import CallEventList from '@components/EventList'
import Script from 'next/script'

function Events() {

  return (
    <div>
      <Head>
        <title>HMV | Our Events</title>
        <meta property="og:title" content="Her Many Voices" key="title" />
      </Head>
      <div className="relative overflow-hidden bg-gray-50 pt-20 pb-24 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-full items-center px-4 lg:w-1/2">
              <img src="https://res.cloudinary.com/hmvf/image/upload/v1674335195/Impact-Week-2023-save-the-date-homepage-1_huxjmk.png" alt="#"></img>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div style={{'width':'100%', 'height':'520px'}} className="ae-emd-cal-events" data-calendar="IT413581" data-lbl-upcoming="Upcoming events" data-lbl-subscribe="Subscribe" data-no-events="No events found.." data-lbl-readmore="Read more" data-include-atc="true" data-include-stc="true" data-include-moupcpicker="true" data-include-location="false" data-include-timezone="false" data-include-organizer="false" data-include-countdown="false" data-include-description="false" data-include-timezone-select="true" data-default-view="upcoming" data-stayonpage="false" data-datetime-format="1" data-datetime-language="en_US" data-events-max="20" data-description-length="full" ></div><Script type="text/javascript" src="https://cdn.addevent.com/libs/cal/js/cal.events.embed.t3.init.js"></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 lg:py-20">

        <CallEventList />
      </div>
    </div>
  )
}

export default Events

Events.getLayout = function getLayout(Events) {
  return <Layout>{Events}</Layout>
}
