import Link from 'next/link'
import FacebookSocialLogo from 'public/assets/social/FacebookSocialLogo.js'
import TwitterSocialLogo from 'public/assets/social/TwitterSocialLogo.js'
import InstagramSocialLogo from 'public/assets/social/InstagramSocialLogo.js'

export default function BoardCard({
  id,
  fullName,
  title,
  description,
  longDescription,
  image,
  altText,
  facebookLink,
  instagramLink,
  twitterLink,
}) {
  return (
    <div key={id} className="min-w-full bg-green-600 py-10">
      <div className="container mx-auto px-4">
        <div className="-mx-3 flex flex-wrap items-center">
          <div className="w-full px-3">
            <div className="flex flex-wrap rounded-lg bg-white p-6 shadow">
              <div className="w-full lg:w-1/2 lg:pr-3">
                {image ? (
                  <img
                    className="h-80 w-full rounded-lg object-cover lg:h-auto lg:min-w-auto lg:max-h-[40rem]"
                    src={image ? image : null}
                    alt={image ? altText : null}
                  />
                ) : (
                  <div className="h-80 lg:h-160 w-full rounded bg-gradient-to-r from-[#99f6e4] to-[#d9f99d]"></div>
                )}
                <div className="flex justify-start py-4">
                  {facebookLink ? <Link href={facebookLink} passHref className="mr-3 self-center">

                    <FacebookSocialLogo />

                  </Link> : null}
                  {twitterLink ? <Link href={twitterLink} passHref className="mr-3 self-center">

                    <TwitterSocialLogo />

                  </Link> : null}
                  {instagramLink ? <Link href={instagramLink} passHref className="mr-3 self-center">

                    <InstagramSocialLogo />

                  </Link> : null}
                </div>
              </div>
              <div className="w-full lg:mt-6 lg:w-1/2 lg:pl-3">
                <h4 className="font-heading text-2xl font-bold">
                  {fullName}
                </h4>
                <p className="mb-6 font-heading text-xl">{title}</p>
                <p className="mb-6 leading-loose text-gray-600 whitespace-pre-wrap">
                  {description}
                </p>
              </div>
              <p className="-mt-6 mb-6 leading-loose text-gray-600 whitespace-pre-wrap sm:hidden md:block">{longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
