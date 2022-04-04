import Layout from '@components/Layout'
import TeamList from '@components/TeamList'
import BoardList from '@components/BoardList'
import Sponsors from '@components/Sponsors'

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
                src="https://res.cloudinary.com/hmvf/image/upload/v1647212992/About_Row_2_Alicia_Fall_qcjerk.jpg"
                alt=""
              ></img>
            </div>
            <div className="w-full px-4 lg:w-7/12">
              <div className="m-auto max-w-xl lg:ml-auto">
                {/* hidden on small screens */}
                <h2 className="mb-4 pt-6 hidden font-heading text-4xl font-bold md:block">
                  Founder/Vision Holder <br></br> Oversees all operations
                </h2>
                <p className="mb-4 text-lg leading-loose text-gray-600">
                  Alicia Fall is the Founder and Vision Holder of Her Many
                  Voices Foundation, launched in 2009. With HMVF, Ms. Fall has
                  launched projects that empower and center the leadership of
                  Indigenous women and girls from helping to protect an
                  ecological preserve in Haiti, to starting a school in Haiti,
                  to building a Mohawk longhouse in New York State, to giving
                  Native women the tools to grow their own food.
                </p>
                <p className="mb-4 text-lg leading-loose text-gray-600">
                  Born and raised in New York City, her life&apos;s work has been
                  shaped by her rich cultural background - Eastern Band
                  Cherokee, Dutch, Cuban Taino, and Spanish. She&apos;s an alum of
                  Future Farmers of America, and graduate of John Bowne High
                  School and SUNY - Cobleskill, both agricultural institutions.
                  Over the last 30 years, Fall has worked as an educator,
                  healer, singer, songwriter, musician and public speaker (on
                  humanitarian issues).
                </p>
               
              </div>
              
            </div>
            <p className="mx-4 lg:mx-6 mb-4 text-lg leading-loose text-gray-600">
                  Fall is a TEDx Talk presenter; a recipient of the New York
                  State Assembly Citation Award; and a board member of the
                  Coalition Against Global Genocide, Tiyospaye Winyan Maka (a
                  sustainable housing organization), and Boulder Valley
                  Indigenous People&apos;s Day Organizing Committee.
                </p>
                <p className="mx-4 lg:mx-6 mb-4 text-lg leading-loose text-gray-600">
                  Over the past year and a half, Ms. Fall has been on the
                  International Hemp Speaking circuit, speaking on Hemp and
                  Humanity: (as Keynote speaker) at the ASACON Hemp Conference
                  (Asahikawa, Japan); on the Euro Hemp Tour (Milan, Italy; and
                  Naklo, Poland); and at the Posner Center for International
                  Development ( , Colorado). She has been a panel presenter at
                  The Asian Hemp Summit (Kathmandu, Nepal), and spoken in
                  Reykjavik, Iceland; Helsinki, Finland; Vilani, Latvia; and
                  Prague, Czech Republic. She is a member of The European
                  Institute for Multidisciplinary Studies on Human Rights and
                  Science (Knowmad Institute), and the mother of two warrior
                  daughters. Her philosophy is “Whatever I do for another, I do
                  for myself.”
                </p>
          </div>
        </div>
      </div>
      <TeamList />
      <BoardList />
      <Sponsors />
    </section>
  )
}

export default About

About.getLayout = function getLayout(About) {
  return <Layout>{About}</Layout>
}
