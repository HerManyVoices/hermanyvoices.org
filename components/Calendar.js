import Script from 'next/script'

export default function Calendar() {
  return (
    <>
      <div
        strategy="beforeInteractive"
        className="ae-emd-cal-events"
        data-calendar="IT413581"
        data-lbl-upcoming="Upcoming events"
        data-lbl-subscribe="Subscribe"
        data-no-events="No events found.."
        data-lbl-readmore="Read more"
        data-include-atc="true"
        data-include-stc="true"
        data-include-moupcpicker="true"
        data-include-location="false"
        data-include-timezone="true"
        data-include-organizer="false"
        data-include-countdown="false"
        data-include-description="true"
        data-default-view="upcoming"
        data-stayonpage="false"
        data-datetime-format="1"
        data-datetime-language="en_US"
        data-events-max="20"
        data-description-length="brief"
      ></div>
      <Script
        type="text/javascript"
        src="https://cdn.addevent.com/libs/cal/js/cal.events.embed.t2.init.js"
      ></Script>
    </>
  )
}
