export default function SpeakerCard({
  id,
  fullName,
  title,
  organization,
  talkTitle,
  image,
  altText,
}) {
  return (
    <div key={id} className="mb-10 w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mx-auto max-w-xs text-center">
        {image ? (
          <img
            className="mx-auto mb-6 h-24 w-24 rounded-full"
            src={image ? image : null}
            alt={image ? altText : null}
          ></img>
        ) : (
          <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-r from-[#99f6e4] to-[#d9f99d]"></div>
        )}
        <p className="mb-1 text-2xl font-semibold text-white">
          {fullName}
        </p>
        <p className="mb-2 block font-medium text-gray-200">
        {title}
        </p>
        <p className="mb-2 block font-medium text-text-gray-800">
          {organization}
        </p>
        <p className="mb-6 block text-lg font-medium italic text-text-gray-800">
          {talkTitle}
        </p>
      </div>
    </div>
  )
}
