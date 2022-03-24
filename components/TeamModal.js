import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'
import Link from 'next/link'
import FacebookSocialLogo from 'public/assets/social/FacebookSocialLogo.js'
import TwitterSocialLogo from 'public/assets/social/TwitterSocialLogo.js'
import InstagramSocialLogo from 'public/assets/social/InstagramSocialLogo.js'

export default function Modal({
  description,
  image,
  altText,
  fullName,
  facebookLink,
  twitterLink,
  instagramLink,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const completeButtonRef = useRef(null)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-green-200 bg-opacity-20 px-4 py-2 text-sm font-medium text-green-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          ...more
        </button>
      </div>

      <Transition
        appear
        show={isOpen}
        as={Fragment}
        initialFocus={completeButtonRef}
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-100 bg-opacity-60" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className='md:flex md:content-between'>
                <img
                  className="object-cover md:h-auto md:w-1/3 lg:h-96 rounded-sm"
                  src={image}
                  alt={altText}
                ></img>
                <div className="md:w-2/3">
                  <Dialog.Title
                    as="h3"
                    className="leading-6 text-lg font-medium text-gray-900 md:pl-10"
                  >
                    {fullName}
                  </Dialog.Title>

                  <p className="text-md text-gray-500 md:pl-10 whitespace-pre-wrap">{description}</p>
                </div>
                </div>
                <div className="mt-4 flex items-center">
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
                    <a className="mr-3">
                      <InstagramSocialLogo />
                    </a>
                  </Link>
                  <button
                    ref={completeButtonRef}
                    type="button"
                    className="rounded-md ml-40 inline-flex justify-center border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:ml-[35rem]"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
