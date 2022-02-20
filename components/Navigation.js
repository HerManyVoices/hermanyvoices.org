import Image from 'next/image'
import React, { useState } from 'react'
import logo from '/public/assets/logo/logo.svg'
import wordmark from '/public/assets/logo/wordmark.svg'
import facebookSocialLogo from '/public/assets/social/facebook.svg'
import twitterSocialLogo from '/public/assets/social/twitter.svg'
import instagramSocialLogo from '/public/assets/social/instagram.svg'

export default function Navigation() {
  const [isOpen, setisOpen] = useState(false)

  const handleToggle = () => {
    setisOpen((prev) => !prev)
  }

  return (
    <div>
      <nav className="relative flex items-center justify-between bg-gray-50 px-6 py-6">
        <a className="text-3xl font-bold leading-none" href="#">
          <Image className="h-12" src={logo} alt="" width="50" height="100" />
          <Image
            className="h-12"
            src={wordmark}
            alt=""
            width="150"
            height="100"
          />
        </a>
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
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              About
            </a>
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
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              What We Do
            </a>
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
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Who We Serve
            </a>
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
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Events
            </a>
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
            <a className="text-sm font-bold text-green-600" href="#">
              Support Us
            </a>
          </li>
        </ul>
        <a
          className="custom-dbox-popup hidden rounded-l-xl rounded-t-xl bg-green-500 py-2 px-6 text-sm font-bold text-white transition duration-200 hover:bg-green-600 lg:inline-block"
          href="https://donorbox.org/donate-button-test"
        >
          Donate
        </a>
      </nav>
      {isOpen && (
        <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 w-5/6 max-w-sm">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex h-full w-full flex-col overflow-y-auto border-r bg-white py-6 px-6">
            <div className="mb-8 flex items-center">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <Image
                  className="h-16 w-16"
                  src={logo}
                  alt=""
                  width="100"
                  height="100"
                />
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
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600"
                    href="#"
                  >
                    What We Do
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600"
                    href="#"
                  >
                    Who We Serve
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600"
                    href="#"
                  >
                    Events
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600"
                    href="#"
                  >
                    Support Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="mb-2 block rounded-l-xl rounded-t-xl bg-green-600 px-4 py-3 text-center text-xs font-semibold leading-loose text-white hover:bg-green-700"
                  href="https://donorbox.org/donate-button-test"
                >
                  Donate
                </a>
              </div>
              <p className="my-4 text-center text-xs text-gray-400">
                <span>&copy; 2022 All rights reserved.</span>
              </p>
              <div className="text-center">
                <a className="inline-block px-1" href="#">
                  <Image
                    src={facebookSocialLogo}
                    alt=""
                    height="50"
                    width="50"
                  />
                </a>
                <a className="inline-block px-1" href="#">
                  <Image
                    src={twitterSocialLogo}
                    alt=""
                    height="50"
                    width="50"
                  />
                </a>
                <a className="inline-block px-1" href="#">
                  <Image
                    src={instagramSocialLogo}
                    alt=""
                    height="50"
                    width="50"
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
