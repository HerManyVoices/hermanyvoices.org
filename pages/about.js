import Layout from '@components/Layout'
import TeamList from '@components/TeamList'
import BoardList from '@components/BoardList'
import Sponsors from '@components/Sponsors'
import SupportersCard from '@components/SupportersCard'

function About() {
  return (
    <section>
      <div className="bg-gray-50 py-6 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap">
            <div className="mb-10 w-full lg:mb-0 lg:w-1/2">
              <div className="max-w-md sm:m-auto">
                <h2 className="mb-2 font-heading text-4xl font-bold">
                  Whatever I do for another,{' '}
                  <span className="lg:block">I do for myself</span>
                </h2>
                <p className="max-w-s leading-loose text-gray-600">
                  Her Many Voices Foundation (HMVF) is a small organization that
                  does big things in the world. We started out as artists
                  responding to humanitarian needs. Since then we&apos;ve grown
                  to include activists and global community members.
                </p>
                <p className="max-w-s pt-4 leading-loose text-gray-600">
                  Our mission is to{' '}
                  <span className="font-bold text-green-600">
                    ignite the Artivist (Artist/Activist)
                  </span>{' '}
                  in us all, in order to move our passions to purpose, for the
                  betterment of women, children and our Mother Earth.
                </p>
              </div>
            </div>
            <div className="relative flex w-full lg:w-1/2">
              <iframe
                className="relative rounded-lg sm:m-auto"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FNqzt545to4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-5/12">
              {/* hidden on large screens */}
              <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-5xl lg:hidden">
                Founder/Vision Holder <br></br> Oversees all operations
              </h2>
              <img
                className="mx-auto rounded-lg object-cover"
                src="https://res.cloudinary.com/hmvf/image/upload/q_auto,f_auto/v1647212992/About_Row_2_Alicia_Fall_qcjerk.jpg"
                alt="Head shot of Alicia Fall"
              ></img>
            </div>
            <div className="w-full px-4 lg:w-7/12">
              <div className="m-auto max-w-xl lg:ml-auto">
                {/* hidden on small screens */}
                <h2 className="mb-4 hidden pt-6 font-heading text-4xl font-bold md:block">
                  Founder/Vision Holder <br></br> Oversees all operations
                </h2>
                <p className="mb-4 text-lg leading-loose text-gray-600">
                  Alicia Fall, Founder and Visionholder of Her Many Voices
                  Foundation, has been a lifelong doer and creator. Fall is a
                  TEDx Talk presenter, a recipient of the New York State
                  Assembly Citation Award, board member for the Coalition
                  Against Global Genocide and for Tiyospaye Winyan Maka, both as
                  a representative for Indigenous Peoples.
                </p>
                <p className="mb-4 text-lg leading-loose text-gray-600">
                  Ms. Fall has been on the International Hemp Speaking circuit,
                  speaking on Hemp and Humanity. Presentations include: the
                  ASACON Hemp Conference (Asahikawa, Japan); the Euro Hemp Tour
                  (Milan, Italy; and Naklo, Poland); at the Posner Center for
                  International Development and The Asian Hemp Summit
                  (Kathmandu, Nepal). Ms. Fall is delighted to have been nominated for the Mother Earth
              Award by the NOCO team in 2022.
                </p>
              </div>
            </div>
            {/* <p className="mx-4 my-4 text-lg leading-loose text-gray-600 lg:mx-6">
              Ms. Fall is delighted to have been nominated for the Mother Earth
              Award by the NOCO team in 2022.
            </p> */}
            <p className="mx-4 mb-4 text-lg leading-loose text-gray-600 lg:mx-6">
              Mother Earth Award &#8212; This award is to honor a woman whose
              entrepreneurial spirit has ushered a new era of business leaders
              through her skills and execution in agriculture. She is a
              visionary who has cultivated relationships through education,
              inclusivity, and collaboration. Her determination and dedication
              support our farmers and contribute immensely to building the
              supply chain making her a trailblazer and inspiration to others.
            </p>
          </div>
        </div>
      </div>
      <TeamList />
      <BoardList />
      <SupportersCard />
      <Sponsors />
    </section>
  )
}

export default About

About.getLayout = function getLayout(About) {
  return <Layout>{About}</Layout>
}
