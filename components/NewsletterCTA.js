import Link from 'next/link'

export default function NewsletterCTA() {
  return (
    <section className="bg-green-600 py-20">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="mb-16 max-w-2xl px-4 text-center lg:mb-0 lg:w-1/2">
            <div className=" mb-6 inline-block text-3xl font-bold leading-none text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="mb-4 text-center font-heading text-4xl font-bold text-white md:text-5xl">
              How you can help
            </h2>
            <p className="mb-8 text-center leading-loose text-gray-50">
              Get involved. Small acts of kindness have big impact.
            </p>
            <Link href="/support-us">
              <a className="inline-block rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-bold leading-loose text-green-600 transition duration-200 hover:bg-gray-50">
                Support Us
              </a>
            </Link>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="mx-auto max-w-sm lg:mr-0 lg:ml-auto">
              <div className="mb-6 rounded-t-3xl rounded-bl-3xl bg-white py-8 px-6 text-center shadow">
                <form action="">
                  <div className="mb-6">
                    <h4 className="text-2xl">Sign up for our newsletter</h4>
                  </div>
                  <div className="-mx-2 mb-4 flex flex-wrap">
                    <div className="mb-4 w-full px-2 lg:mb-0 lg:w-1/2">
                      <input
                        className="w-full rounded border bg-white py-2 px-3 leading-loose"
                        type="text"
                        placeholder="First Name"
                      ></input>
                    </div>
                    <div className="w-full px-2 lg:w-1/2">
                      <input
                        className="w-full rounded border bg-white py-2 px-3 leading-loose"
                        type="text"
                        placeholder="Last Name"
                      ></input>
                    </div>
                  </div>
                  <input
                    className="mb-4 w-full rounded border bg-white py-2 px-3 leading-loose"
                    type="email"
                    placeholder="hello@example.com"
                  ></input>
                  <button className="mb-4 w-full rounded bg-green-600 py-4 text-sm font-bold leading-normal text-white transition duration-200 hover:bg-green-700">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
