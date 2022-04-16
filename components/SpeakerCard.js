export default function SpeakerCard({
  id,
  featured,
  location,
  fullName,
  honorific,
  title,
  organization,
  talkTitle,
  image,
  altText,
}) {
  return (
    <div key={id} className="mb-10 w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/2">
      <div className="mx-auto max-w-xs text-center">
        {image ? (
          <img
            className="mx-auto mb-6 h-24 w-24 rounded-full object-cover"
            src={image ? image : null}
            alt={image ? altText : null}
          ></img>
        ) : (
          <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-r from-[#99f6e4] to-[#d9f99d]"></div>
        )}
        {featured ? (
          <p className="bold -mt-8 translate-x-10 -translate-y-6 text-xl">✨</p>
        ) : null}

        <p className="mb-1 text-2xl font-semibold text-white">{fullName}</p>
        <p className="mb-1 text-sm text-white">{location}</p>
        <p className="mb-1 text-sm text-white">{honorific}</p>
        <p className="mb-2 block font-medium text-gray-200">{title}</p>
        <p className="text-text-gray-800 mb-2 block font-medium">
          {organization}
        </p>
        <p className="text-text-gray-800 mb-6 block text-lg font-medium italic">
          {talkTitle}
        </p>
      </div>
    </div>
  )
}
