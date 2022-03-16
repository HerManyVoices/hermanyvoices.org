import Link from 'next/link'
import FacebookSocialLogo from 'public/assets/social/FacebookSocialLogo.js'
import TwitterSocialLogo from 'public/assets/social/TwitterSocialLogo.js'
import InstagramSocialLogo from 'public/assets/social/InstagramSocialLogo.js'

export default function TeamCard({
  id,
  fullName,
  title,
  shortDescription,
  image,
  altText,
  facebookLink,
  instagramLink,
  twitterLink,
}) {
  return (
    <div
      id={id}
      className="mb-6 w-full transform cursor-pointer px-4 transition duration-500 hover:scale-105 lg:w-1/2"
    >
      <div className="flex flex-wrap items-start overflow-hidden rounded bg-white shadow">
        <img
          className="h-80 w-full object-cover lg:w-1/3"
          src={image}
          alt={altText}
        ></img>
        <div className="w-full p-4 lg:w-2/3 lg:pl-6">
          <h4 className="mb-2 text-2xl font-bold">{fullName}</h4>
          <h4 className="mb-2 font-heading text-xl">{title}</h4>
          <p className="mb-4 leading-loose text-gray-500">{shortDescription}</p>
          <div className="flex">
            <Link href={facebookLink} passHref>
              <a className="mr-3">
                <FacebookSocialLogo />
              </a>
            </Link>
            <Link href={instagramLink} passHref>
              <a className="mr-3">
                <TwitterSocialLogo />
              </a>
            </Link>
            <Link href={twitterLink} passHref>
              <a>
                <InstagramSocialLogo />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
