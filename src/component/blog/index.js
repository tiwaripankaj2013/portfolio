import React from 'react'

export const Blog = () => {
  return (
    <div name="section-blog" className="news-section pt-24 lg:pt-28 xl:pt-32">
            <div className="container mx-auto">
              <div className="section-heading relative overflow-hidden pb-14 text-center">
                <h2 className="relative z-10 mb-2 uppercase">Latest Blogs</h2>
                <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
                  <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
                </span>
                <span
                  className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
                  style={{ willChange: "transform" }}
                >
                  Blogs
                </span>
              </div>
              <div className="swiper-holder">
                <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                  <div
                    className="swiper-wrapper"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}
                  >
                    <div
                      className="swiper-slide swiper-slide-active"
                      style={{ width: "354px", marginRight: "28px" }}
                    >
                      <div className="slider-item">
                        <article className="blog card p-4 md:p-5">
                          <div className="blog-top relative mb-4">
                            <a
                              className="fiximage hover-scale block"
                              title="What designer can do"
                              href="/postdetails/what-designer-can-do"
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "60% 0px 0px",
                                  }}
                                />
                                <img
                                  alt="Blog Image"
                                  src="https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg"
                                  decoding="async"
                                  data-nimg="responsive"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <noscript />
                              </span>
                            </a>
                            <div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
                              <span className="month block text-sm uppercase leading-none">
                                May
                              </span>
                              <span className="date block text-2xl leading-none">
                                11
                              </span>
                              <span className="year block text-sm leading-none">
                                2022
                              </span>
                            </div>
                          </div>
                          <h5 className="mb-0">
                            <a
                              className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
                              title="What designer can do"
                              href="/postdetails/what-designer-can-do"
                            >
                              What designer can do
                            </a>
                          </h5>
                          <div className="flex list-none gap-1.5 text-sm">
                            <span className="after:content-[','] last:after:hidden">
                              <a
                                className=" hover:text-primary"
                                href="/category/trend/1"
                              >
                                Trend
                              </a>
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "354px", marginRight: "28px" }}
                    >
                      <div className="slider-item">
                        <article className="blog card p-4 md:p-5">
                          <div className="blog-top relative mb-4">
                            <a
                              className="fiximage hover-scale block"
                              title="What you need to learn in 2022"
                              href="/postdetails/what-you-need-to-learn-in-2022"
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "60% 0px 0px",
                                  }}
                                />
                                <img
                                  alt="Blog Image"
                                  src="https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg"
                                  decoding="async"
                                  data-nimg="responsive"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <noscript />
                              </span>
                            </a>
                            <div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
                              <span className="month block text-sm uppercase leading-none">
                                May
                              </span>
                              <span className="date block text-2xl leading-none">
                                11
                              </span>
                              <span className="year block text-sm leading-none">
                                2022
                              </span>
                            </div>
                          </div>
                          <h5 className="mb-0">
                            <a
                              className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
                              title="What you need to learn in 2022"
                              href="/postdetails/what-you-need-to-learn-in-2022"
                            >
                              What you need to learn in 2022
                            </a>
                          </h5>
                          <div className="flex list-none gap-1.5 text-sm">
                            <span className="after:content-[','] last:after:hidden">
                              <a
                                className=" hover:text-primary"
                                href="/category/trend/1"
                              >
                                Trend
                              </a>
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ width: "354px", marginRight: "28px" }}
                    >
                      <div className="slider-item">
                        <article className="blog card p-4 md:p-5">
                          <div className="blog-top relative mb-4">
                            <a
                              className="fiximage hover-scale block"
                              title="Learn programming easy way"
                              href="/postdetails/learn-programming-easy-way"
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "60% 0px 0px",
                                  }}
                                />
                                <img
                                  alt="Blog Image"
                                  src="https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg"
                                  decoding="async"
                                  data-nimg="responsive"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <noscript />
                              </span>
                            </a>
                            <div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
                              <span className="month block text-sm uppercase leading-none">
                                May
                              </span>
                              <span className="date block text-2xl leading-none">
                                08
                              </span>
                              <span className="year block text-sm leading-none">
                                2022
                              </span>
                            </div>
                          </div>
                          <h5 className="mb-0">
                            <a
                              className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
                              title="Learn programming easy way"
                              href="/postdetails/learn-programming-easy-way"
                            >
                              Learn programming easy way
                            </a>
                          </h5>
                          <div className="flex list-none gap-1.5 text-sm">
                            <span className="after:content-[','] last:after:hidden">
                              <a
                                className=" hover:text-primary"
                                href="/category/technology/1"
                              >
                                Technology
                              </a>
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ width: "354px", marginRight: "28px" }}
                    >
                      <div className="slider-item">
                        <article className="blog card p-4 md:p-5">
                          <div className="blog-top relative mb-4">
                            <a
                              className="fiximage hover-scale block"
                              title="How to choose javascript framework for your project"
                              href="/postdetails/how-to-choose-javascript-framework"
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "60% 0px 0px",
                                  }}
                                />
                                <img
                                  alt="Blog Image"
                                  src="https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg"
                                  decoding="async"
                                  data-nimg="responsive"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <noscript />
                              </span>
                            </a>
                            <div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
                              <span className="month block text-sm uppercase leading-none">
                                May
                              </span>
                              <span className="date block text-2xl leading-none">
                                01
                              </span>
                              <span className="year block text-sm leading-none">
                                2022
                              </span>
                            </div>
                          </div>
                          <h5 className="mb-0">
                            <a
                              className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
                              title="How to choose javascript framework for your project"
                              href="/postdetails/how-to-choose-javascript-framework"
                            >
                              How to choose javascript framework for your project
                            </a>
                          </h5>
                          <div className="flex list-none gap-1.5 text-sm">
                            <span className="after:content-[','] last:after:hidden">
                              <a
                                className=" hover:text-primary"
                                href="/category/javascript/1"
                              >
                                Javascript
                              </a>
                            </span>
                            <span className="after:content-[','] last:after:hidden">
                              <a
                                className=" hover:text-primary"
                                href="/category/technology/1"
                              >
                                Technology
                              </a>
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ width: "354px", marginRight: "28px" }}
                    >
                      <div className="slider-item">
                        <article className="blog card p-4 md:p-5">
                          <div className="blog-top relative mb-4">
                            <a
                              className="fiximage hover-scale block"
                              title="NodeJs application testing"
                              href="/postdetails/nodejs-application-testing"
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "60% 0px 0px",
                                  }}
                                />
                                <img
                                  alt="Blog Image"
                                  src="https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg"
                                  decoding="async"
                                  data-nimg="responsive"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <noscript />
                              </span>
                            </a>
                            <div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
                              <span className="month block text-sm uppercase leading-none">
                                May
                              </span>
                              <span className="date block text-2xl leading-none">
                                01
                              </span>
                              <span className="year block text-sm leading-none">
                                2022
                              </span>
                            </div>
                          </div>
                          <h5 className="mb-0">
                            <a
                              className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
                              title="NodeJs application testing"
                              href="/postdetails/nodejs-application-testing"
                            >
                              NodeJs application testing
                            </a>
                          </h5>
                          <div className="flex list-none gap-1.5 text-sm">
                            <span className="after:content-[','] last:after:hidden">
                              <a
                                className=" hover:text-primary"
                                href="/category/javascript/1"
                              >
                                Javascript
                              </a>
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ width: "354px", marginRight: "28px" }}
                    >
                      <div className="slider-item">
                        <article className="blog card p-4 md:p-5">
                          <div className="blog-top relative mb-4">
                            <a
                              className="fiximage hover-scale block"
                              title="Testing in javascript"
                              href="/postdetails/testing-in-javascript"
                            >
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "60% 0px 0px",
                                  }}
                                />
                                <img
                                  alt="Blog Image"
                                  src="https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg"
                                  decoding="async"
                                  data-nimg="responsive"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                                <noscript />
                              </span>
                            </a>
                            <div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
                              <span className="month block text-sm uppercase leading-none">
                                May
                              </span>
                              <span className="date block text-2xl leading-none">
                                01
                              </span>
                              <span className="year block text-sm leading-none">
                                2022
                              </span>
                            </div>
                          </div>
                          <h5 className="mb-0">
                            <a
                              className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
                              title="Testing in javascript"
                              href="/postdetails/testing-in-javascript"
                            >
                              Testing in javascript
                            </a>
                          </h5>
                          <div className="flex list-none gap-1.5 text-sm">
                            <span className="after:content-[','] last:after:hidden">
                              <a
                                className=" hover:text-primary"
                                href="/category/javascript/1"
                              >
                                Javascript
                              </a>
                            </span>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="swiper-button-prev" />
                <button className="swiper-button-next" />
              </div>
            </div>
          </div>
  )
}
