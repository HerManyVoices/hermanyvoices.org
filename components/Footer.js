import TwitterSocialLogo from 'public/assets/social/TwitterSocialLogo.js'
import FacebookSocialLogo from 'public/assets/social/FacebookSocialLogo.js'
import LinkedInSocialLogo from 'public/assets/social/LinkedInSocialLogo.js'
import InstagramSocialLogo from '/public/assets/social/InstagramSocialLogo.js'
import logo from 'public/assets/logo/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return <>
    <footer>
      <section className="bg-gray-50">
        <div className="flex w-full">
          <div className="flex w-1/3">
            <div className="w-1/3 bg-green-400 py-1"></div>
            <div className="w-1/3 bg-green-500 py-1"></div>
            <div className="w-1/3 bg-green-600 py-1"></div>
          </div>
          <div className="flex w-1/3">
            <div className="w-1/3 bg-green-400 py-1"></div>
            <div className="w-1/3 bg-green-500 py-1"></div>
            <div className="w-1/3 bg-green-600 py-1"></div>
          </div>
          <div className="flex w-1/3">
            <div className="w-1/3 bg-green-400 py-1"></div>
            <div className="w-1/3 bg-green-500 py-1"></div>
            <div className="w-1/3 bg-green-600 py-1"></div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="pt-10 pb-12">
            <div className="relative mb-8 flex flex-wrap lg:border-b lg:border-gray-300 lg:pb-10">
              <p className="order-first w-full text-center lg:order-first lg:w-auto">
                <a
                  className="custom-dbox-popup text-md rounded-l-xl rounded-t-xl bg-green-500 py-4 px-12 font-bold text-white transition duration-200 hover:bg-green-600 lg:inline-block"
                  href="https://donorbox.org/general-96"
                >
                  Donate
                </a>
              </p>
              <div className="order-last mb-6 text-center first:mx-auto lg:absolute lg:left-1/2 lg:mb-0 lg:-translate-x-1/2 lg:transform">
                <p className="mr-6 text-sm">
                  The original inhabitants of the area that is now Colorado
                  included:<br></br>
                  The Apache Nation, The Arapaho Nation, The Cheyenne Nation,
                  The Pueblo Tribes, The Shoshone Tribe, The Ute Nation, The
                  Comanche Tribe, The Kiowa Tribe, and The Navajo Tribe.
                </p>
              </div>
              <div className="my-12 w-full text-center md:mt-auto lg:order-last lg:mb-0 lg:ml-auto lg:w-auto">
                <Link href="/" passHref className="inline-block text-xl font-bold leading-none">

                  <Image
                    src={logo}
                    className="inline-block h-12 lg:h-6"
                    alt=""
                    width="75"
                    height="80"
                  />

                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://www.facebook.com/HerManyVoices/"
                passHref
                className="mr-2 inline-block w-10 rounded bg-white p-2 hover:bg-gray-50">

                <FacebookSocialLogo />

              </Link>
              <Link
                href="https://twitter.com/HerManyVoices"
                passHref
                className="mr-2 inline-block w-10 rounded bg-white p-2 hover:bg-gray-50">

                <TwitterSocialLogo />

              </Link>
              <Link
                href="https://www.instagram.com/hermanyvoicesfoundation/"
                passHref
                className="mr-2 inline-block w-10 rounded bg-white p-2 hover:bg-gray-50">

                <InstagramSocialLogo />

              </Link>
              <Link
                href="https://www.linkedin.com/company/her-many-voices-foundation/"
                passHref
                className="mr-2 inline-block w-10 rounded bg-white p-2 hover:bg-gray-50">

                <LinkedInSocialLogo />

              </Link>
            </div>
            <p className="w-full pt-4 text-center text-sm text-gray-500 lg:w-auto lg:text-center">
              © 2009 - 2022. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  </>;
}
