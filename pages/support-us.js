import Layout from '@components/Layout'

function SupportUs() {
  return (
    <div>
      <section>
        <h1>Support Us</h1>
      </section>
    </div>
  )
}

export default SupportUs

SupportUs.getLayout = function getLayout(SupportUs) {
  return <Layout>{SupportUs}</Layout>
}
