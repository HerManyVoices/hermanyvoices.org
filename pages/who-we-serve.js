import Layout from '@components/Layout'
function WhoWeServe() {
  return (
    <div>
      <section>
        <h1>Who We Serve</h1>
      </section>
    </div>
  )
}

export default WhoWeServe

WhoWeServe.getLayout = function getLayout(WhoWeServe) {
  return <Layout>{WhoWeServe}</Layout>
}
