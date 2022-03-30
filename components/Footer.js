import FacebookSocialLogo from 'public/assets/social/FacebookSocialLogo.js'
import TwitterSocialLogo from 'public/assets/social/TwitterSocialLogo.js'
import InstagramSocialLogo from '/public/assets/social/InstagramSocialLogo.js'
import logo from 'public/assets/logo/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
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
                <p className="order-last w-full text-center text-sm text-gray-400 lg:order-first lg:w-auto lg:text-left">
                  © 2009 - 2022. All rights reserved.
                </p>
                <div className="mx-auto mb-6 lg:absolute lg:left-1/2 lg:mb-0 lg:-translate-x-1/2 lg:transform text-center">
                  <p className="mr-6 text-sm">
                    The original inhabitants of the area that is now Colorado
                    included:<br></br>
                    The Apache Nation, The Arapaho Nation, The Cheyenne Nation,
                    The Pueblo Tribes, The Shoshone Tribe, The Ute nation, The
                    Comanche Tribe, The Kiowa Tribe, and The Navajo Tribe.
                  </p>
                </div>
                <div className="order-first mb-12 w-full text-center lg:order-last lg:mb-0 lg:ml-auto lg:w-auto lg:text-left">
                  <Link href="/" passHref>
                    <a className="inline-block text-xl font-bold leading-none">
                      <Image
                        src={logo}
                        className="inline-block h-12 lg:h-6"
                        alt=""
                        width="44"
                        height="52"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="https://www.facebook.com/HerManyVoices/" passHref>
                  <a className="mr-2 inline-block w-10 rounded bg-white p-2 hover:bg-gray-50">
                    <FacebookSocialLogo />
                  </a>
                </Link>
                <Link href="https://twitter.com/HerManyVoices" passHref>
                  <a className="mr-2 inline-block w-10 rounded bg-white p-2 hover:bg-gray-50">
                    <TwitterSocialLogo />
                  </a>
                </Link>
                <Link
                  href="https://www.instagram.com/hermanyvoicesfoundation/"
                  passHref
                >
                  <a className="mr-2 inline-block w-10 rounded bg-white p-2 hover:bg-gray-50">
                    <InstagramSocialLogo />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
