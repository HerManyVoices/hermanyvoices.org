import SpeakerCard from './SpeakerCard'
import { speakers } from '../public/data/speakers.js'

export default function SpeakerList() {
  const listSpeakerCards = speakers.map(
    ({ id, fullName, title, organization, talkTitle, image, altText }) => (
      <>
        <SpeakerCard
          key={id}
          fullName={fullName}
          title={title}
          organization={organization}
          talkTitle={talkTitle}
          image={image}
          altText={altText}
        />
      </>
    )
  )

  return (
    <section className="relative bg-green-500 py-24">
      <div className="container relative mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">{listSpeakerCards}</div>
      </div>
    </section>
  )
}
