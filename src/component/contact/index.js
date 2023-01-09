import React from 'react'

export const Contact = () => {
  return (
<div
          
            className="contact-section pt-24 lg:pt-28 xl:pt-32"
          >
            <div className="container mx-auto">
              <div className="section-heading relative overflow-hidden pb-14 text-center">
                <h2 className="relative z-10 mb-2 uppercase">Contact Us</h2>
                <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
                  <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
                </span>
                <span
                  className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
                  style={{ willChange: "transform" }}
                >
                  Contact
                </span>
              </div>
              <div className="grid grid-cols-9 gap-7">
                <div
                  className="col-span-9 lg:col-span-4"
                  data-projection-id={75}
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="contact-information">
                    <h4>Contact Information</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      omnis, iusto harum possimus non praesentium qui facere.
                    </p>
                    <span className="inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20" />
                    <div className="contact-blocks mt-5 space-y-5">
                      <div className="contact-block card flex p-4 md:p-5">
                        <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                fillRule="nonzero"
                                d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
                              />
                            </g>
                          </svg>
                        </span>
                        <div className="content">
                          <h5 className="mb-2">Contact on phone</h5>
                          <p className="mb-0">
                            <a className="no-underline" href="tel:+01234567891">
                              +012-3456-7891
                            </a>
                          </p>
                          <p className="mb-0">
                            <a className="no-underline" href="tel:+01234567892">
                              +012-3456-7892
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="contact-block card flex p-4 md:p-5">
                        <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
                            </g>
                          </svg>
                        </span>
                        <div className="content">
                          <h5 className="mb-2">Contact on mail</h5>
                          <p className="mb-0">
                            <a
                              className="no-underline"
                              href="mailto:demomail@demo.com"
                            >
                              demomail@demo.com
                            </a>
                          </p>
                          <p className="mb-0">
                            <a
                              className="no-underline"
                              href="mailto:demomail2@demo.com"
                            >
                              demomail2@demo.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="contact-block card flex p-4 md:p-5">
                        <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                            </g>
                          </svg>
                        </span>
                        <div className="content">
                          <h5 className="mb-2">Contact address</h5>
                          <p className="mb-0">
                            121 King Street, Melbourne, United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-9 lg:col-span-5"
                  data-projection-id={76}
                  style={{ opacity: 1, transform: "none" }}
                >
                  <form className="card -mt-1.5 space-y-4 p-4 md:p-5">
                    <div className="inputbox">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name..."
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="inputbox">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="inputbox">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        placeholder="Enter subject..."
                        id="subject"
                        name="subject"
                      />
                    </div>
                    <div className="inputbox">
                      <label htmlFor="message">Message</label>
                      <textarea
                        placeholder="Enter you message..."
                        cols={1}
                        rows={5}
                        id="message"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="btn">
                      <span>Send Mail</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
  )
}
