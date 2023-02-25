import Head from 'next/head'
import { loadData } from 'pages/api/product';
import Script from 'next/script'
import { useEffect, useState } from 'react'
import axios from 'axios'
import he from 'he'

export default function Events({ eventsBanner, eventTimelineImages }) {
  const [upcomingMainEventList, setUpcomingMainEventList] = useState([])
  const [pastMainEventList, setPastMainEventList] = useState([])

  const fetchEventLists = () => {
    const upcomingMainEventListUrl = process.env.ADDEVENT_UPCOMING_MAIN_EVENTS_ENDPOINT
    const pastMainEventListUrl = process.env.ADDEVENT_PAST_MAIN_EVENTS_ENDPOINT

    const getUpcomingMainEventListUrl = axios.get(upcomingMainEventListUrl)
    const getPastMainEventListUrl = axios.get(pastMainEventListUrl)

    axios.all([getUpcomingMainEventListUrl, getPastMainEventListUrl])
      .then(axios.spread((...allEvents) => {
        const upcomingMainEventList = allEvents[0].data
        const pastMainEventList = allEvents[1].data

        setUpcomingMainEventList(upcomingMainEventList)
        setPastMainEventList(pastMainEventList)
      })
      )
  }

  useEffect(() => {
    let current = true;
    fetchEventLists()
    if (current) {
    }
    return () => {
      current = false;
    };
  }, [])

  const listUpcomingMainEvents = Object.values(upcomingMainEventList)[2]
  const listPastMainEvents = Object.values(pastMainEventList)[2]

  const checkDate = (date) => {
    const currentDate = Date.now()
    const dateStartUnix = date * 1000
    if (dateStartUnix >= currentDate) {
      return true // future
    } else {
      return false // past
    }
  }

  const formatLongDate = (date_start_unix) => {
    const date = new Date(date_start_unix * 1000)
    const formattedDate = date.toLocaleDateString('en-EN', { month: 'short', day: 'numeric', year: 'numeric' })
    const cleanDateFormat = formattedDate.replace(/,/g, '')
    return cleanDateFormat
  }

  const formatShortDate = (date_start_unix) => {
    const date = new Date(date_start_unix * 1000)
    const formattedDate = date.toLocaleDateString('en-EN', { month: 'short', day: 'numeric', year: 'numeric' })
    const cleanDateFormat = formattedDate.replace(/,/g, '')
    return cleanDateFormat
  }

  const formatTime = (eventTime) => {
    const time = eventTime
    const formattedTime = time.substring(0, time.length - 3)
    return formattedTime
  }

  const limitDescription = (description) => {
    const descriptionText = description.replace(/<[^>]*>/g, '')
    const decodedDescription = he.decode(descriptionText)
    const descriptionLength = decodedDescription.length
    if (descriptionLength > 280) {
      const limitedDescription = decodedDescription.substring(0, 280) + '...'
      return limitedDescription
    } else {
      return decodedDescription
    }
  }


  const nextEvent = eventsBanner.sort((a, b) => {
    return new Date(a.publishedAt) - new Date(b.publishedAt);
  });

  const sortedEventTimelineImages = eventTimelineImages.sort((a, b) => {
    return new Date(a.startDate) - new Date(b.startDate);
  });

  const upcomingEventsWithImages = listUpcomingMainEvents?.map((event) => {
    const eventImage = sortedEventTimelineImages?.find((image) => image.eventID === event.id)
    if (eventImage) {
      return {
        ...event,
        eventImageURL: eventImage.eventImageURL,
        altText: eventImage.altText
      }
    } else {
      return {
        ...event,
      }
    }
  })

  const pastEvents = listPastMainEvents?.filter((event) => {
    return checkDate(event.date_start_unix) === false
  })

  const pastEventsWithImages = pastEvents?.map((event) => {
    const eventImage = sortedEventTimelineImages?.find((image) => image.eventID === event.id)
    if (eventImage) {
      return {
        ...event,
        eventImageURL: eventImage.eventImageURL,
        altText: eventImage.altText
      }
    } else {
      return {
        ...event,
      }
    }
  })

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
              <img className=' rounded ' src={nextEvent[0].eventImageURL} alt={nextEvent[0].altText}></img>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                style={{ 'width': '100%', 'height': '538px', 'border': "solid 2px white", "border-radius": "6px" }}
                className="ae-emd-cal-events" data-calendar="IT413581"
                data-lbl-upcoming="Upcoming events"
                data-lbl-subscribe="Subscribe"
                data-no-events="No events found.."
                data-lbl-readmore="Read more"
                data-include-atc="true"
                data-include-stc="true"
                data-include-moupcpicker="true"
                data-include-location="false"
                data-include-timezone="false"
                data-include-organizer="false"
                data-include-countdown="false"
                data-include-description="false"
                data-include-timezone-select="true"
                data-default-view="upcoming"
                data-stayonpage="false"
                data-datetime-format="1"
                data-datetime-language="en_US"
                data-events-max="20"
                data-description-length="full" ></div>
              <Script type="text/javascript" async="true" strategy="lazyOnload" src="https://cdn.addevent.com/libs/cal/js/cal.events.embed.t3.init.js"></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 lg:py-20">
        <h2 id="upcoming" className="mb-10 font-heading text-4xl font-bold lg:text-4xl text-center">Upcoming Events</h2>
        {upcomingEventsWithImages?.map((event) => (
          <div key={event.id} className="grid grid-cols-[20%_5%_65%] w-auto md:grid-rows-6 grid-rows-7 gap-6 md:h-80 px-2 p-4 border-b-2 border-green-200">
            <img className="md:row-start-1 col-start-1 row-end-6 col-end-2 bg-contain md:block hidden h-56 w-auto object-contain ml-auto"
              src={event.eventImageURL ? event.eventImageURL : "https://res.cloudinary.com/hmvf/image/upload/v1677261456/events-timeline-fallback-image_slxhce.png"}
              alt="#">
            </img>
            <div className="md:row-start-1 row-start- col-start-2 row-end-6 col-end-3 text-left font-bold md:block hidden -ml-2 w-12">
              {formatShortDate(event.date_start_unix)}
            </div>
            <img className="row-start-1 col-start-1 row-end-2 col-end-4 bg-contain lg:hidden h-auto w-full object-contain m-auto -ml-1"
              src={event.eventImageURL ? event.eventImageURL : "https://res.cloudinary.com/hmvf/image/upload/v1677261456/events-timeline-fallback-image_slxhce.png"}
              alt="#">
            </img>
            <div className="md:row-start-1 row-start-2 md:col-start-3 row-end-2 md:col-end-3 col-start-1 col-end-4 h-auto object-contain my-auto">
              {formatLongDate(event.date_start_unix)} at {formatTime(event.date_start_time)} {event.date_start_ampm} - {formatTime(event.date_end_time)} {event.date_end_ampm} MDT
            </div>
            <div className="md:row-start-2 row-start-3 md:col-start-3 row-end-3 md:col-end-3 col-start-1 col-end-4 h-auto object-contain my-auto text-xl font-semibold">
              {event.title}
            </div>
            {event.location.includes('you') ?
              <a className="md:row-start-3 row-start-4 md:col-start-3 row-end-4 md:col-end-3 col-start-1 col-end-4 h-auto object-contain my-auto text-green-600 underline font-bold"
                href={event.location}>Watch On YouTube
              </a> :
              <a className="md:row-start-3 row-start-5 md:col-start-3 row-end-4 md:col-end-3 col-start-1 col-end-4 h-auto object-contain my-auto text-green-600 underline font-bold"
                href={event.location}>{event.location ? event.location : ''}
              </a>
            }
            <div className="md:row-start-4 row-start-6 md:col-start-3 row-end-5 md:col-end-3 col-start-1 col-end-4 h-auto object-contain md:mr-auto md:pr-40 my-2">
              {event.eventname ? limitDescription(event.eventname) : ''}
            </div>
            <a className="md:row-start-5 row-start-7 md:col-start-3 row-end-6 md:col-end-3 col-start-1 col-end-4 h-auto object-contain mb-2 text-green-600 underline py-10"
              href={event.link_long}>Learn More »
            </a>
          </div>
        ))}
      </div>
      <div className="py-6 lg:py-20">
        <h2 id="past" className="mb-10 font-heading text-4xl font-bold lg:text-4xl text-center">Past Events</h2>
        {pastEventsWithImages?.map((event) => (
          <div key={event.id} className="grid grid-cols-[20%_5%_65%] w-auto md:grid-rows-6 grid-rows-7 gap-6 md:h-80 px-2 p-4 border-b-2 border-green-200">
            <img className="md:row-start-1 col-start-1 row-end-6 col-end-2 bg-contain md:block hidden h-56 w-auto object-contain ml-auto"
              src={event.eventImageURL ? event.eventImageURL : "https://res.cloudinary.com/hmvf/image/upload/v1677261456/events-timeline-fallback-image_slxhce.png"}
              alt="#">
            </img>
            <div className="md:row-start-1 row-start- col-start-2 row-end-6 col-end-3 text-left font-bold md:block hidden -ml-2 w-12">
              {formatShortDate(event.date_start_unix)}
            </div>
            <img className="row-start-1 col-start-1 row-end-2 col-end-4 bg-contain lg:hidden h-auto w-full object-contain m-auto -ml-1"
              src={event.eventImageURL ? event.eventImageURL : "https://res.cloudinary.com/hmvf/image/upload/v1677261456/events-timeline-fallback-image_slxhce.png"}
              alt="#">
            </img>
            <div className="md:row-start-1 row-start-2 md:col-start-3 row-end-2 md:col-end-3 col-start-1 col-end-4 h-auto object-contain my-auto">
              {formatLongDate(event.date_start_unix)} at {formatTime(event.date_start_time)} {event.date_start_ampm} - {formatTime(event.date_end_time)} {event.date_end_ampm} MDT
            </div>
            <div className="md:row-start-2 row-start-3 md:col-start-3 row-end-3 md:col-end-3 col-start-1 col-end-4 h-auto object-contain my-auto text-xl font-semibold">
              {event.title}
            </div>
            {event.location.includes('you') ?
              <a className="md:row-start-3 row-start-4 md:col-start-3 row-end-4 md:col-end-3 col-start-1 col-end-4 h-auto object-contain my-auto text-green-600 underline font-bold"
                href={event.location}>Watch On YouTube
              </a> :
              <a className="md:row-start-3 row-start-5 md:col-start-3 row-end-4 md:col-end-3 col-start-1 col-end-4 h-auto object-contain my-auto text-green-600 underline font-bold"
                href={event.location}>{event.location ? event.location : ''}
              </a>
            }
            <div className="md:row-start-4 row-start-6 md:col-start-3 row-end-5 md:col-end-3 col-start-1 col-end-4 h-auto object-contain md:mr-auto md:pr-40 my-2">
              {event.eventname ? limitDescription(event.eventname) : ''}
            </div>
            <a className="md:row-start-5 row-start-7 md:col-start-3 row-end-6 md:col-end-3 col-start-1 col-end-4 h-auto object-contain mb-2 text-green-600 underline py-10"
              href={event.link_long}>Learn More »
            </a>

          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { eventsBanner, eventTimelineImages } = await loadData();
  return {
    props: {
      eventsBanner,
      eventTimelineImages
    },
  }
}