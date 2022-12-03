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
            {isOpen ? (
                <div className="inset-x-0 top-0 z-50 block sticky">
                    <div className="bg-purple-600 py-1 text-white">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-nowrap items-center justify-center">
                                <div className="w-128 text-center md:w-full">
                                    <p className="mr-1 inline-block font-heading text-lg font-bold md:text-xl">
                                        🎁
                                    </p>
                                    <Link href="/donate" passHref>
                                        <a className="font-heading text-lg semibold underline hover:text-green-600 md:text-xl">
                                            Support our work this holiday season
                                        </a>
                                    </Link>
                                </div>
                                <div className="text-right object-contain">
                                    <button
                                        className="ml-auto inline-block rounded border-2 text-sm border-white hover:border-green-600 p-1 hover:text-green-600"
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
            ) : null}
        </>
    )
}