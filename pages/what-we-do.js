import Layout from '@components/Layout'

function WhatWeDo() {
  return (
    <div>
      <section>
        <h1>What We Do</h1>
      </section>
    </div>
  )
}

export default WhatWeDo

WhatWeDo.getLayout = function getLayout(WhatWeDo) {
  return <Layout>{WhatWeDo}</Layout>
}
