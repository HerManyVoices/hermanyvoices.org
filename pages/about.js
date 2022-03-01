import Layout from '@components/Layout'

function About() {
  return (
    <div>
      <section>
        <h1>About</h1>
      </section>
    </div>
  )
}

export default About

About.getLayout = function getLayout(About) {
  return <Layout>{About}</Layout>
}
