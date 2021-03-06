import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FacebookSocialLogo from 'public/assets/social/FacebookSocialLogo.js'
import InstagramSocialLogo from 'public/assets/social/InstagramSocialLogo.js'
import TwitterSocialLogo from 'public/assets/social/TwitterSocialLogo.js'
import wordmark from 'public/assets/logo/logo-wordmark.png'
import logo from 'public/assets/logo/logo.png'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeNav = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', closeNav)
    return () => {
      window.removeEventListener('keydown', closeNav)
    }
  }, [])

  return (
    <div className="sticky top-0 z-30">
      <nav className="relative flex items-center justify-between bg-gray-50 px-6 py-2">
        <div className=" text-xs font-bold leading-none">
          <Link href="/" passHref>
            <a>
              <div className="md:hidden">
                <Image
                  src={logo}
                  className="h-12"
                  alt=""
                  width="50"
                  height="50"
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src={wordmark}
                  className="h-12"
                  alt=""
                  width="200"
                  height="47"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="sticky lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
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
        <ul className="absolute top-1/2 left-1/2 hidden -translate-y-1/2 -translate-x-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-2 lg:justify-around">
          <li>
            <Link href="/about" passHref>
              <a className="text-sm font-bold text-[#603913] hover:text-[#35200b] focus-within:text-green-600 focus-within:hover:text-green-700">About</a>
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
            <Link href="/what-we-do" passHref>
              <a className="text-sm font-bold text-[#603913] hover:text-[#35200b] focus-within:text-green-600 focus-within:hover:text-green-700">
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
            <Link href="/who-we-serve" passHref>
              <a className="text-sm font-bold text-[#603913] hover:text-[#35200b] focus-within:text-green-600 focus-within:hover:text-green-700">
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
            <Link href="/our-events" passHref>
              <a className="text-sm font-bold text-[#603913] hover:text-[#35200b] focus-within:text-green-600 focus-within:hover:text-green-700">
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
            <Link href="/earth-day" passHref>
              <a className="text-sm font-bold text-[#603913] hover:text-[#35200b] focus-within:text-green-600 focus-within:hover:text-green-700">
                Earth Day 2022
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
            <Link href="/support-us" passHref>
              <a className="text-sm font-bold text-[#603913] hover:text-[#35200b] ">Support Us</a>
            </Link>
          </li>
        </ul>
        <a
          className="custom-dbox-popup hidden rounded-l-xl rounded-t-xl bg-green-500 py-2 px-6 text-sm font-bold text-white transition duration-200 hover:bg-green-600 lg:inline-block"
          href="https://donorbox.org/general-96"
        >
          Donate
        </a>
      </nav>
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 z-50 w-5/6 max-w-sm">
          <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex h-full w-full flex-col overflow-y-auto border-r bg-white py-6 px-6">
            <div className="mb-8 flex items-center">
              <Link href="/" passHref>
                <a className="mr-auto text-3xl font-bold leading-none">
                  <Image
                    className="h-16 w-16"
                    src={logo}
                    alt=""
                    width="75"
                    height="80"
                  />
                </a>
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <svg
                  className="h-6 w-6 cursor-pointer font-bold text-[#603913] hover:text-[#35200b]"
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
                  <Link href="/about" passHref>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block rounded p-4 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600"
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/what-we-do" passHref>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block rounded p-4 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600"
                    >
                      What We Do
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/who-we-serve" passHref>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block rounded p-4 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600"
                    >
                      Who We Serve
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/our-events" passHref>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block rounded p-4 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600"
                    >
                      Events
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/earth-day" passHref>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block rounded p-4 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-700"
                    >
                      Earth Day 2022
                    </a>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="/support-us" passHref>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block rounded p-4 text-lg font-bold text-[#603913] hover:bg-green-50 hover:text-green-600"
                    >
                      Support Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="text-center">
              <div className="mb-10 w-full">
                  <a
                    className="custom-dbox-popup rounded-l-xl rounded-t-xl bg-green-500 py-4 px-12 m-auto text-sm font-bold text-white transition duration-200 hover:bg-green-600"
                    href="https://donorbox.org/general-96"
                  >
                    Donate
                  </a>
                </div>
              
                <Link href="https://www.facebook.com/HerManyVoices/" passHref>
                  <a className="inline-block px-1">
                    <FacebookSocialLogo alt="" className="text-2xl" />
                  </a>
                </Link>
                <Link href="https://twitter.com/HerManyVoices" passHref>
                  <a className="inline-block px-1">
                    <TwitterSocialLogo alt="" className="text-2xl" />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/hermanyvoicesfoundation/" passHref>
                  <a className="inline-block px-1">
                    <InstagramSocialLogo alt="" className="text-2xl" />
                  </a>
                </Link>
              </div>
              <p className="my-4 text-center text-xs text-gray-500">
                <span>&copy; 2022 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
