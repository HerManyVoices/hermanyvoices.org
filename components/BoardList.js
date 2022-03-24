import BoardCard from './BoardCard'
import { boardMembers } from '../public/data/members.js'

export default function TeamList() {
  const listBoardCards = boardMembers.map(
    ({
      id,
      fullName,
      title,
      description,
      image,
      altText,
      facebookLink,
      instagramLink,
      twitterLink,
    }) => (
      <>
        <BoardCard
          key={id}
          fullName={fullName}
          title={title}
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
      <div className="bg-green-600 py-20">
        <div className="mx-auto px-4">
          <div className="mx-auto mb-8 max-w-xl text-center lg:mb-16">
            <h2 className="font-heading text-4xl font-bold lg:text-5xl text-white">
              Our Board
            </h2>
          </div>
          <div className="-mx-4 flex flex-wrap">{listBoardCards}</div>
        </div>
      </div>
    </section>
  )
}
