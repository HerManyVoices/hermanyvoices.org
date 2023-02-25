// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import he from 'he'
// import { loadData } from 'pages/api/product'
// // import { urlFor } from 'lib/client'


// const CallEventList = ({ eventsBanner }) => {

//     console.log("eventsBanner: ", eventsBanner)


//     const [upcomingMainEventList, setUpcomingMainEventList] = useState([])
//     const [pastMainEventList, setPastMainEventList] = useState([])


//     const fetchEventLists = () => {
//         const upcomingMainEventListUrl = process.env.ADDEVENT_UPCOMING_MAIN_EVENTS_ENDPOINT
//         const pastMainEventListUrl = process.env.ADDEVENT_PAST_MAIN_EVENTS_ENDPOINT

//         const getUpcomingMainEventListUrl = axios.get(upcomingMainEventListUrl)
//         const getPastMainEventListUrl = axios.get(pastMainEventListUrl)

//         axios.all([getUpcomingMainEventListUrl, getPastMainEventListUrl])
//             .then(axios.spread((...allEvents) => {
//                 const upcomingMainEventList = allEvents[0].data
//                 const pastMainEventList = allEvents[1].data

//                 setUpcomingMainEventList(upcomingMainEventList)
//                 setPastMainEventList(pastMainEventList)
//             })
//             )
//     }

//     useEffect(() => {
//         let current = true;
//         fetchEventLists()
//         if (current) {
//         }
//         return () => {
//             current = false;
//         };
//     }, [])

//     const listUpcomingMainEventList = Object.values(upcomingMainEventList)[2]
//     const listPastMainEventList = Object.values(pastMainEventList)[2]

//     const checkDate = (date) => {
//         const currentDate = Date.now()
//         const dateStartUnix = date * 1000
//         if (dateStartUnix >= currentDate) {
//             return true // future
//         } else {
//             return false // past
//         }
//     }

//     // eslint-disable-next-line no-unused-vars
//     const pastEventsList = listPastMainEventList && listPastMainEventList.filter((event) => {
//         return checkDate(event.date_start_unix) === false
//     })

//     const formatDate = (date_start_unix) => {
//         const date = new Date(date_start_unix * 1000)
//         const formattedDate = date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric', year: 'numeric' })
//         const cleanDateFormat = formattedDate.replace(/,/g, '')
//         return cleanDateFormat
//     }

//     const formatTime = (eventTime) => {
//         const time = eventTime
//         const formattedTime = time.substring(0, time.length - 3)
//         return formattedTime
//     }

//     const cleanDescription = (description) => {
//         const descriptionText = description.replace(/<[^>]*>/g, '')
//         const decodedDescription = he.decode(descriptionText)
//         return decodedDescription
//     }

//     const eventImageArray = ['https://res.cloudinary.com/hmvf/image/upload/v1660326430/NoCo8-Speaker-AFall_pbszmb.jpg']

//     //    import images from eventImageArray 
//     const eventImages = eventImageArray.map((mainImage) => {
//         return mainImage
//     })

//     // combine eventImageArray with listUpcomingMainEventList array
//     const UpcomingEventsList = listUpcomingMainEventList && listUpcomingMainEventList.map((event, index) => {
//         return {
//             ...event,
//             eventImage: eventImages[index]
//         }
//     })

//     return (
//         <>
//             <h2 id="upcoming" className="mb-10 font-heading text-4xl font-bold lg:text-4xl text-center">Upcoming Events</h2>
//             {UpcomingEventsList && UpcomingEventsList.map((event) => (
//                 <div key={event.id} className="grid grid-cols-[1fr_min(65ch,_100%)_1fr] grid-rows-6 gap-4 h-60 pb-4 border-b-2 p-2 border-green-200">
//                     <div className="row-start-1 col-start-1 row-end-6 col-end-2 text-right px-10 font-bold md:block hidden w-24 h-full ml-auto">{formatDate(event.date_start_unix)}</div>
//                     <div className="row-start-1 col-start-2 row-end-2 col-end-3">{formatDate(event.date_start_unix)} at {formatTime(event.date_start_time)} {event.date_start_ampm} - {formatTime(event.date_end_time)} {event.date_end_ampm} MDT</div>
//                     <div className="row-start-2 col-start-2 row-end-3 col-end-3">Title: {event.title}</div>
//                     <p>{event.location ? 'Location: ' : ''}<a className="row-start-3 col-start-2 row-end-4 col-end-3 text-green-600 underline font-bold" href={event.location}>{event.location ? event.location : ''}</a></p>
//                     <div className="row-start-4 col-start-2 row-end-5 col-end-3">{event.eventname ? "Description: " + cleanDescription(event.eventname) : ''}</div>
//                     <a className="row-start-5 col-start-2 row-end-6 col-end-3 text-green-600 underline" href={event.link_long}>Learn More »</a>
//                     <img className="row-start-1 col-start-3 row-end-6 col-end-4 bg-contain w-auto h-full m-auto md:block hidden" src={event.eventImage ? event.eventImage : "https://res.cloudinary.com/hmvf/image/fetch/v1646844617/https://main--hermanyvoicesfoundation.netlify.app/cld-assets/images/safari-pinned-tab.svg"} alt="#"></img>
//                 </div>
//             ))}
//         </>
//     )

//     // <section className='container m-auto w-full lg:w-1/2'>
//     //     <h2 id="upcoming" className="mb-10 font-heading text-4xl font-bold lg:text-4xl text-center">Upcoming Events</h2>
//     //     {listUpcomingMainEventList && listUpcomingMainEventList.map((event) => (

//     //         <div key={event.id} className="grid grid-cols-6 grid-rows-10 gap-0 overflow-hidden h-128 border-b-2 border-green-200 my-2">

//     //             <div className="row-start-1 col-start-1 row-end-11 col-end-2 text-right px-10 font-bold md:block hidden">{formatDate(event.date_start_unix)}</div>

//     //             <div className="row-start-1 col-start-2 row-end-2 col-end-6">{formatDate(event.date_start_unix)} at {formatTime(event.date_start_time)} {event.date_start_ampm} - {formatTime(event.date_end_time)} {event.date_end_ampm} MDT</div>

//     //             <div className="row-start-2 col-start-2 row-end-3 col-end-6 mb-2 font-heading text-2xl font-medium md:-mt-32">{event.title}</div>

//     //             <div className="row-start-3 col-start-2 row-end-4 col-end-6 text-sm md:-mt-24  ">
//     //                 Location: <a href={event.location} className='text-green-600 underline font-bold'>Online</a>
//     //             </div>
//     //             <p className="row-start-4 col-start-2 row-end-10 col-end-6 text-gray-800 overflow-hidden h-24 md:-mt-36">{cleanDescription(event.eventname)}</p>

//     //             <div className="row-start-10 col-start-2 row-end-11 col-end-6 md:-mt-24">
//     //                 <a href={event.link_long} className='text-green-600 underline'>Read more »</a>
//     //             </div>

//     //             {/* TODO ADD EVENT IMAGE DATA FILE AND IMPORT / MAP OVER THEM HERE */}

//     //             <div className="row-start-1 col-start-6 row-end-11 col-end-7 overflow-visible md:block hidden">
//     //             <img src="https://res.cloudinary.com/hmvf/image/upload/v1660326430/NoCo8-Speaker-AFall_pbszmb.jpg" alt="#"></img>
//     //             </div> 
//     //         </div>
//     //     ))}

//     //     <h2 className="mb-10 font-heading text-4xl font-bold lg:text-4xl text-center">Past Events</h2>
//     //     {pastEventsList && pastEventsList.slice(1).map((event) => (
//     //         <div key={event.id} className="grid grid-cols-6 grid-rows-10 gap-0 overflow-hidden h-128 border-b-2 border-green-200 my-2">

//     //             <div className="row-start-1 col-start-1 row-end-11 col-end-2 text-right px-10 font-bold md:block hidden">{formatDate(event.date_start_unix)}</div>

//     //             <div className="row-start-1 col-start-2 row-end-2 col-end-6">{formatDate(event.date_start_unix)} at {formatTime(event.date_start_time)} {event.date_start_ampm} - {formatTime(event.date_end_time)} {event.date_end_ampm} MDT</div>

//     //             <div className="row-start-2 col-start-2 row-end-3 col-end-6 mb-2 font-heading text-2xl font-medium md:-mt-32">{event.title}</div>

//     //             <div className="row-start-3 col-start-2 row-end-4 col-end-6 text-sm md:-mt-24  ">
//     //                 Location: <a href={event.location} className='text-green-600 underline font-bold'>Online</a>
//     //             </div>
//     //             <p className="row-start-4 col-start-2 row-end-10 col-end-6 text-gray-800 overflow-hidden h-24 md:-mt-36">{cleanDescription(event.description)}</p>

//     //             <div className="row-start-10 col-start-2 row-end-11 col-end-6 md:-mt-24">
//     //                 <a href={event.link_long} className='text-green-600 underline'>Read more »</a>
//     //             </div>

//     //             {/* TODO ADD EVENT IMAGE DATA FILE AND IMPORT / MAP OVER THEM HERE

//     //             <div className="row-start-1 col-start-6 row-end-11 col-end-7 overflow-visible md:block      hidden">
//     //                 <img src="https://via.placeholder.com/1000" alt="#"></img>
//     //             </div> */}
//     //         </div>
//     //     ))}

//     // </section>

// }
