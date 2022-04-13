import Script from 'next/script'

export default function EarthDayCalendar() {
  return (
    <div>
      <div
        strategy="beforeInteractive"
        className="ae-emd-cal"
        data-calendar="Cy428079"
        data-calendars="Cy428079"
        data-calendars-selected="Cy428079"
        data-configure="true"
        data-title=""
        data-title-show="true"
        data-today="true"
        data-datenav="true"
        data-date="true"
        data-monthweektoggle="true"
        data-subscribebtn="true"
        data-swimonth="true"
        data-swiweek="true"
        data-swischedule="true"
        data-print="true"
        data-timezone="true"
        data-logo="true"
        data-defaultview="schedule"
        data-firstday="1"
        data-datetimeformat="1"
      ></div>
      <Script
        type="text/javascript"
        async="true"
        src="https://cdn.addevent.com/libs/cal/js/cal.embed.t1.init.js"
        className="ae-emd-script"
        id="ae-emd-script"
      ></Script>
    </div>
  )
}
