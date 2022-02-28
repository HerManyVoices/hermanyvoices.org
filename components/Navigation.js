import Image from 'next/image'
import React, { useState } from 'react'
import logo from 'public/assets/logo/logo.png'
import FacebookSocialLogo from 'public/assets/social/FacebookSocialLogo.js'
import TwitterSocialLogo from 'public/assets/social/TwitterSocialLogo.js'
// import InstagramSocialLogo from '/public/assets/social/InstagramSocialLogo.js'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setisOpen] = useState(false)

  const handleToggle = () => {
    setisOpen((prev) => !prev)
  }

  return (
    <div>
      <nav className="relative flex items-center justify-between bg-gray-50 px-6 py-6">
        <div className="text-3xl font-bold leading-none">
          <Link href="/" passHref>
            <Image src={logo} className="h-12" alt="" width="44" height="52" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleToggle}
            className="flex items-center p-3 text-gray-400"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
          <li>
            <Link href="/about">
              <a className="text-sm text-gray-400 hover:text-gray-500">About</a>
            </Link>
          </li>
          <li className="text-gray-800">
            <svg
              className="current-fill h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <Link href="/what-we-do">
              <a className="text-sm text-gray-400 hover:text-gray-500">
                What We Do
              </a>
            </Link>
          </li>
          <li className="text-gray-800">
            <svg
              className="current-fill h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <Link href="/who-we-serve">
              <a className="text-sm text-gray-400 hover:text-gray-500">
                Who We Serve
              </a>
            </Link>
          </li>
          <li className="text-gray-800">
            <svg
              className="current-fill h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <Link href="/our-events">
              <a className="text-sm text-gray-400 hover:text-gray-500">
                Events
              </a>
            </Link>
          </li>
          <li className="text-gray-800">
            <svg
              className="current-fill h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <Link href="/support-us">
              <a className="text-sm font-bold text-green-600">Support Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 w-5/6 max-w-sm">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex h-full w-full flex-col overflow-y-auto border-r bg-white py-6 px-6">
            <div className="mb-8 flex items-center">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                {/* <Image
                  className="h-16 w-16"
                  src={logo}
                  alt=""
                  width="100"
                  height="100"
                /> */}
              </a>
              <button onClick={handleToggle} className="navbar-close">
                <svg
                  className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link href="/about">
                    <a className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600">
                      About
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/what-we-do">
                    <a className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600">
                      What We Do
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/who-we-serve">
                    <a className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600">
                      Who We Serve
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/our-events">
                    <a className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600">
                      Events
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/support-us">
                    <a className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600">
                      Support Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6"></div>

              <div className="text-center">
                <Link href="https://www.facebook.com/HerManyVoices/">
                  <a className="inline-block px-1">
                    <FacebookSocialLogo alt="" className="text-2xl" />
                  </a>
                </Link>
                <Link href="https://twitter.com/HerManyVoices">
                  <a className="inline-block px-1">
                    <TwitterSocialLogo alt="" className="text-2xl" />
                  </a>
                </Link>
                {/* <Link href="#">
                <a className="inline-block px-1" href="#">
                  <InstagramSocialLogo alt="" className="text-2xl" />
                </a>
                </Link> */}
              </div>
              <p className="my-4 text-center text-xs text-gray-400">
                <span>&copy; 2022 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
