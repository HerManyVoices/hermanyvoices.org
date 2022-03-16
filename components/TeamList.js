import TeamCard from './TeamCard'
import { teamMembers } from '../public/data/teamMembers.js'

export default function TeamList() {
  const listTeamCards = teamMembers.map(
    ({
      id,
      fullName,
      title,
      shortDescription,
      description,
      image,
      altText,
      facebookLink,
      instagramLink,
      twitterLink,
    }) => (
      <>
      <TeamCard
        key={id}
        fullName={fullName}
        title={title}
        shortDescription={shortDescription}
        description={description}
        image={image}
        altText={altText}
        facebookLink={facebookLink}
        instagramLink={instagramLink}
        twitterLink={twitterLink}
      />
      </>
    )
  )

  return (
    <section>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 max-w-xl text-center lg:mb-16">
            <h2 className="font-heading text-4xl font-bold lg:text-5xl">
              Our Team
            </h2>
          </div>
          <div className="-mx-4 flex flex-wrap">{listTeamCards}</div>
        </div>
      </div>
    </section>
  )
}
