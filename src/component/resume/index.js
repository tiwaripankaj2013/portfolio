import React from 'react'

export const Resume = () => {
  return (
    <div
      className="resume-section pt-24 lg:pt-28 xl:pt-32"
    >
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase">My Resume</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            Resume
          </span>
        </div>
        <div className="grid grid-cols-2 gap-14 lg:gap-7">
          <div className="col-span-2 lg:col-span-1">
            <div className="education-timeline">
              <h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="mr-2 inline-block text-primary"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5zM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19zM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337z" />
                  </g>
                </svg>
                Educational Qualification
              </h4>
              <div
                className="timeline-wrap"
                data-projection-id={68}
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2008 - 2010
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey" />
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2" />
                    </span>
                    <h5 className="mb-0 text-primary">
                      Higher School Graduation
                    </h5>
                    <p className="mb-2 text-heading">Abc College.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed consectetur donec gravida ullamcorper cum id. Sit
                      viverra donec in ornare euismod.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="timeline-wrap"
                data-projection-id={69}
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2010 - 2014
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey" />
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2" />
                    </span>
                    <h5 className="mb-0 text-primary">
                      Bachelor of Sciences
                    </h5>
                    <p className="mb-2 text-heading">Def University.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed consectetur donec gravida ullamcorper cum id. Sit
                      viverra donec in ornare euismod.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="timeline-wrap"
                data-projection-id={70}
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2014 - 2016
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey" />
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2" />
                    </span>
                    <h5 className="mb-0 text-primary">Masters of Sciences</h5>
                    <p className="mb-2 text-heading">Def University.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed consectetur donec gravida ullamcorper cum id. Sit
                      viverra donec in ornare euismod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="job-experience">
              <h4>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="mr-2 inline-block text-primary"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 16v3h16v-3H4zm0-2h16V7H4v7zM9 3v2h6V3H9zm2 8h2v2h-2v-2z" />
                  </g>
                </svg>
                Working Experience
              </h4>
              <div
                className="timeline-wrap"
                data-projection-id={71}
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2015 - 2017
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey" />
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2" />
                    </span>
                    <h5 className="mb-0 text-primary">UI/UX Designer</h5>
                    <p className="mb-2 text-heading">Abc Company.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed consectetur donec gravida ullamcorper cum id. Sit
                      viverra donec in ornare euismod.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="timeline-wrap"
                data-projection-id={72}
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2017 - 2019
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey" />
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2" />
                    </span>
                    <h5 className="mb-0 text-primary">Front-end Developer</h5>
                    <p className="mb-2 text-heading">Def Company.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed consectetur donec gravida ullamcorper cum id. Sit
                      viverra donec in ornare euismod.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="timeline-wrap"
                data-projection-id={73}
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="timeline relative block items-start rounded-full border-white border-opacity-20 first:mt-0 md:flex">
                  <span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
                    2019 - Present
                  </span>
                  <div className="timeline-right relative border-l-4 border-white border-opacity-20 pt-16 pl-12 md:pt-6">
                    <span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
                      <span className="absolute left-0 top-6 z-10 inline-block h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white border-opacity-20 bg-grey" />
                      <span className="absolute left-0 right-full top-6 -z-10 mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2" />
                    </span>
                    <h5 className="mb-0 text-primary">Back-end Developer</h5>
                    <p className="mb-2 text-heading">Ghi Company.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed consectetur donec gravida ullamcorper cum id. Sit
                      viverra donec in ornare euismod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
