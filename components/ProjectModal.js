import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'

export default function Modal({
  description,
  image,
  altText,
  title
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
          className="font-bold text-green-600 hover:text-green-700"
        >
          Learn More
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
          className="fixed inset-0 z-10 overflow-y-auto md:my-4"
          onClose={closeModal}
        >
          <div className="min-h-screen p-6 text-center">
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
              <div className="my-8 inline-block w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all h-full">
                <div className='md:flex md:content-between md:flex-col'>
                {image ? (<img
                  className="object-cover md:h-auto lg:h-96 rounded-sm"
                  src={image ? image : null}
                  alt={image ? altText : null}
                ></img>) : (
                  <div className="object-cover md:h-auto lg:h-80 rounded-sm bg-gradient-to-r from-[#99f6e4] to-[#d9f99d]"></div>
                )}
                <div>
                  <Dialog.Title
                    as="h3"
                    className="leading-6 text-lg font-medium text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <p className="text-md text-gray-600 whitespace-pre-wrap overflow-y-auto">{description}</p>
                </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
