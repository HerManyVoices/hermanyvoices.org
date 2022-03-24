import Link from 'next/link'
import TeamModal from './TeamModal'
import FacebookSocialLogo from 'public/assets/social/FacebookSocialLogo.js'
import TwitterSocialLogo from 'public/assets/social/TwitterSocialLogo.js'
import InstagramSocialLogo from 'public/assets/social/InstagramSocialLogo.js'

export default function TeamCard({
  id,
  fullName,
  title,
  description,
  shortDescription,
  image,
  altText,
  facebookLink,
  instagramLink,
  twitterLink,
}) {
  return (
    <div key={id} className="mb-6 w-full px-4 lg:w-1/2">
      <div className="flex flex-wrap items-start overflow-hidden rounded bg-white shadow">
        {image ? (
          <img
            className="h-[22rem] w-full object-cover lg:w-1/3"
            src={image ? image : null}
            alt={image ? altText : null}
          ></img>
        ) : (
          <div className="h-[22rem] w-full bg-gradient-to-r from-[#99f6e4] to-[#d9f99d] lg:w-1/3"></div>
        )}

        <div className="flex flex-col p-4 md:px-4 md:pt-2 lg:h-[22rem] lg:w-2/3 lg:pl-6">
          <h4 className="mb-2 text-2xl font-bold">{fullName}</h4>
          <h4 className="mb-2 font-heading text-xl">{title}</h4>
          <p className="mb-4 leading-loose text-gray-500">{shortDescription}</p>
          <div className="flex justify-between">
            {facebookLink ? (
              <Link href={facebookLink} passHref>
                <a className="mr-3 self-center">
                  <FacebookSocialLogo />
                </a>
              </Link>
            ) : null}
            {twitterLink ? (
              <Link href={twitterLink} passHref>
                <a className="mr-3 self-center">
                  <TwitterSocialLogo />
                </a>
              </Link>
            ) : null}
            {instagramLink ? (
              <Link href={instagramLink} passHref>
                <a className="mr-3 self-center">
                  <InstagramSocialLogo />
                </a>
              </Link>
            ) : null}
            <a className="pl-32">
              <TeamModal
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
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
