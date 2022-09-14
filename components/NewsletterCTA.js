import React, { useState } from "react";
import Link from 'next/link'

export default function NewsletterCTA() {

  const [setName] = useState("");
  const [setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted!")
    setName("");
    setEmail("");
  }

  return (
    <section id="newsletter" className="bg-green-600 py-20">
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
            <div className="mx-auto max-w-md lg:mr-0 lg:ml-auto">
              <div
                id="mc_embed_signup"
                className="mb-6 rounded-t-3xl rounded-bl-3xl bg-white py-8 px-6 text-center shadow"
              >
                <form
                  action="https://hermanyvoices.us12.list-manage.com/subscribe/post?u=ed8cd89534677e76f64a1819d&amp;id=a674fd30fd&amp;f_id=007ab4e0f0007ab4e0f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll" className="mb-6">
                    <h4 className="text-2xl">Sign up for our newsletter</h4>
                  </div>
                  <div className="-mx-2 mb-4 flex flex-wrap">
                    <div className="mc-field-group mb-4 w-full px-2 text-left lg:mb-0 lg:w-1/2">
                      <label htmlFor="mce-FNAME" className="pl-1">
                        First Name <span className="asterisk">*</span>
                      </label>
                      <input
                        className="required w-full rounded border bg-white py-2 px-3 leading-loose"
                        type="text"
                        name="FNAME"
                        id="mce-FNAME"
                        placeholder="First Name"
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>
                    <div className="mc-field-group w-full px-2 text-left lg:w-1/2">
                      <label htmlFor="mce-EMAIL" className="pl-1">
                        Email Address <span className="asterisk">*</span>
                      </label>
                      <input
                        className="required email mb-4 w-full rounded border bg-white py-2 px-3 leading-loose"
                        type="email"
                        placeholder="hello@example.com"
                        name="EMAIL"
                        id="mce-FNAME"
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                    <div className="indicates-required block w-full text-left -mt-3">
                      <span className="asterisk pl-2">*</span>required
                    </div>
                    <div className="mc-field-group input-group">
                      <p className="font-bold text-left pt-4 pl-4 pb-2">Interests</p>
                      <ul className="flex flex-row shrink">
                        <li className='px-4'>
                          <input
                            type="checkbox"
                            value="1"
                            name="group[53773][1]"
                            id="mce-group[53773]-53773-0"
                          ></input>
                          <label className='pl-1' htmlFor="mce-group[53773]-53773-0">
                            Newsletter
                          </label>
                        </li>
                        <li className='px-4'>
                          <input
                            type="checkbox"
                            value="2"
                            name="group[53773][2]"
                            id="mce-group[53773]-53773-1"
                          ></input>
                          <label className='pl-1' htmlFor="mce-group[53773]-53773-1">
                            Events
                          </label>
                        </li>
                        <li className='px-4'>
                          <input
                            type="checkbox"
                            value="4"
                            name="group[53773][4]"
                            id="mce-group[53773]-53773-2"
                          ></input>
                          <label className='pl-1' htmlFor="mce-group[53773]-53773-2">
                            Volunteering
                          </label>
                        </li>
                      </ul>
                    </div>

                    <div id="mce-responses" className="clear">
                      <div
                        className="response hidden"
                        id="mce-error-response"
                      ></div>
                      <div
                        className="response hidden"
                        id="mce-success-response"
                      ></div>
                    </div>
                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="b_ed8cd89534677e76f64a1819d_a674fd30fd"
                        tabIndex="-1"
                      ></input>
                    </div>
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Sign Up"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button mb-4 w-full rounded bg-green-600 py-4 text-sm font-bold leading-normal text-white transition duration-200 hover:bg-green-700 clear"
                      onSubmit={handleSubmit}
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
