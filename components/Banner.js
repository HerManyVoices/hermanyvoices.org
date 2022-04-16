import React, { useEffect, useState } from 'react'
import Link from 'next/link'
export default function Banner() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const closeBanner = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', closeBanner)
    return () => {
      window.removeEventListener('keydown', closeBanner)
    }
  }, [])

  return (
    <>
      {isOpen && (
        <div className="inset-x-0 top-0 z-50 block">
          <div className="bg-purple-800 py-6 text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-nowrap items-center justify-center">
                <div className="w-128 text-center md:w-full">
                  <p className="mr-1 inline-block font-heading text-lg font-bold md:text-xl">
                    🌎
                  </p>

                  <Link href="https://youtu.be/kg22hqQeL1o" passHref>
                    <a className="font-heading text-lg font-bold underline hover:text-green-200 md:text-xl">
                      Watch Earth Day Live Here!
                    </a>
                  </Link>
                </div>
                <div className="text-right">
                  <button
                    className="ml-auto inline-block rounded border-2 border-white px-2 py-1"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
