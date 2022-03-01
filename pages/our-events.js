import Layout from '@components/Layout'

function Events() {
  return (
    <div>
      <section>
        <h1>Events</h1>
      </section>
    </div>
  )
}

export default Events

Events.getLayout = function getLayout(Events) {
  return <Layout>{Events}</Layout>
}
