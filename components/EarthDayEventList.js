import { useEffect, useState } from 'react'
import axios from 'axios'
import he from 'he'

export default function CallEventList() {
    const [earthDayEventList1, setEarthDayEventList1] = useState([])
    const [earthDayEventList2, setEarthDayEventList2] = useState([])


    const fetchEventLists = () => {
        const earthDayEventListUrl1 = process.env.ADDEVENT_EARTHDAY_EVENTS_ENDPOINT1
        const earthDayEventListUrl2 = process.env.ADDEVENT_EARTHDAY_EVENTS_ENDPOINT2

        const getEarthDayEventList1 = axios.get(earthDayEventListUrl1)
        const getEarthDayEventList2 = axios.get(earthDayEventListUrl2)

        axios.all([getEarthDayEventList1, getEarthDayEventList2])
            .then(axios.spread((...allEvents) => {
                const earthDayEventList1 = allEvents[0].data
                const earthDayEventList2 = allEvents[1].data

                setEarthDayEventList1(earthDayEventList1)
                setEarthDayEventList2(earthDayEventList2)
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

    const listEarthDayEvents1 = Object.values(earthDayEventList1)[2]
    const listEarthDayEvents2 = Object.values(earthDayEventList2)[2]


    const formatDate = (date_start_unix) => {
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

    const cleanDescription = (description) => {
        const descriptionText = description.replace(/<[^>]*>/g, '')
        const decodedDescription = he.decode(descriptionText)
        return decodedDescription
    }

    return (
        <section className='container m-auto w-full lg:w-1/2 mt-10 bg-gray-50'>
            <h2 className="mb-10 font-heading text-4xl font-bold lg:text-4xl text-center">Talks</h2>
            {listEarthDayEvents1 && listEarthDayEvents1.map((event) => (

                <div key={event.id} className="grid grid-cols-6 grid-rows-10 gap-0 overflow-hidden h-128 border-b-2 border-green-200 my-2">

                    <div className="row-start-1 col-start-1 row-end-11 col-end-2 text-right px-10 font-bold md:block hidden">{formatDate(event.date_start_unix)}</div>

                    <div className="row-start-1 col-start-2 row-end-2 col-end-6">{formatDate(event.date_start_unix)} at {formatTime(event.date_start_time)} {event.date_start_ampm} - {formatTime(event.date_end_time)} {event.date_end_ampm} MDT</div>

                    <div className="row-start-2 col-start-2 row-end-3 col-end-6 mb-2 font-heading text-2xl font-medium md:-mt-32">{event.title}</div>

                    <div className="row-start-3 col-start-2 row-end-4 col-end-6 text-sm md:-mt-24  ">
                        Location: <a href={event.location} className='text-green-600 underline font-bold'>Online</a>
                    </div>
                    <p className="row-start-4 col-start-2 row-end-10 col-end-6 text-gray-800 overflow-hidden h-24 md:-mt-36">{cleanDescription(event.description)}</p>

                    <div className="row-start-10 col-start-2 row-end-11 col-end-6 md:-mt-24">
                        <a href={event.link_long} className='text-green-600 underline'>Read more »</a>
                    </div>

                    {/* TODO ADD EVENT IMAGE DATA FILE AND IMPORT / MAP OVER THEM HERE

                    <div className="row-start-1 col-start-6 row-end-11 col-end-7 overflow-visible md:block      hidden">
                        <img src="https://via.placeholder.com/1000" alt="#"></img>
                    </div> */}
                </div>
            ))}
            {listEarthDayEvents2 && listEarthDayEvents2.map((event) => (

                <div key={event.id} className="grid grid-cols-6 grid-rows-10 gap-0 overflow-hidden h-128 border-b-2 border-green-200 my-2">


                    <div className="row-start-1 col-start-1 row-end-11 col-end-2 text-right px-10 font-bold md:block hidden">{formatDate(event.date_start_unix)}</div>

                    <div className="row-start-1 col-start-2 row-end-2 col-end-6">{formatDate(event.date_start_unix)} at {formatTime(event.date_start_time)} {event.date_start_ampm} - {formatTime(event.date_end_time)} {event.date_end_ampm} MDT</div>

                    <div className="row-start-2 col-start-2 row-end-3 col-end-6 mb-2 font-heading text-2xl font-medium md:-mt-32">{event.title}</div>

                    <div className="row-start-3 col-start-2 row-end-4 col-end-6 text-sm md:-mt-24  ">
                        Location: <a href={event.location} className='text-green-600 underline font-bold'>Online</a>
                    </div>
                    <p className="row-start-4 col-start-2 row-end-10 col-end-6 text-gray-800 overflow-hidden h-24 md:-mt-36">{cleanDescription(event.description)}</p>

                    <div className="row-start-10 col-start-2 row-end-11 col-end-6 md:-mt-24">
                        <a href={event.link_long} className='text-green-600 underline'>Read more »</a>
                    </div>

                    {/* TODO ADD EVENT IMAGE DATA FILE AND IMPORT / MAP OVER THEM HERE

                    <div className="row-start-1 col-start-6 row-end-11 col-end-7 overflow-visible md:block      hidden">
                        <img src="https://via.placeholder.com/1000" alt="#"></img>
                    </div> */}
                </div>
            ))}

        </section>
    )
}
