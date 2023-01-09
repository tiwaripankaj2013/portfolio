import React from 'react'

export const Reviews = () => {
  return (
    <div
    name="section-reviews"
    className="reviews-section pt-24 lg:pt-28 xl:pt-32"
  >
    <div className="container mx-auto">
      <div className="section-heading relative overflow-hidden pb-14 text-center">
        <h2 className="relative z-10 mb-2 uppercase">Client Reviews</h2>
        <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
          <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
        </span>
        <span
          className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
          style={{ willChange: "transform" }}
        >
          Reviews
        </span>
      </div>
      <div className="swiper-holder">
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            style={{
              transform: "translate3d(-764px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
          >
            <div
              className="swiper-slide"
              style={{ width: "354px", marginRight: "28px" }}
            >
              <div className="slider-item">
                <div className="review card mt-11 p-4 md:p-5">
                  <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
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
                          padding: "100% 0px 0px",
                        }}
                      />
                      <img
                        alt="user image"
                        src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
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
                        }}
                      />
                      <noscript />
                    </span>
                  </div>
                  <h5 className="mb-0">David Chester</h5>
                  <p className="mb-2 text-body">
                    <small>Client - Envato.com</small>
                  </p>
                  <div className="review-stars mb-3">
                    <div
                      className="star-ratings"
                      title="5 Stars"
                      style={{
                        position: "relative",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    >
                      <svg
                        className="star-grad"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          width: "0px",
                          height: "0px",
                          visibility: "hidden",
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="starGrad504781799099746"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="0%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="0%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="100%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with Bieber is very good experience for me. He’s
                    a good person. If I need developer in future, I’ll
                    definately hire him.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              style={{ width: "354px", marginRight: "28px" }}
            >
              <div className="slider-item">
                <div className="review card mt-11 p-4 md:p-5">
                  <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
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
                          padding: "100% 0px 0px",
                        }}
                      />
                      <img
                        alt="user image"
                        src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
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
                        }}
                      />
                      <noscript />
                    </span>
                  </div>
                  <h5 className="mb-0">Emma Watson</h5>
                  <p className="mb-2 text-body">
                    <small>Client - Envato.com</small>
                  </p>
                  <div className="review-stars mb-3">
                    <div
                      className="star-ratings"
                      title="4.2 Stars"
                      style={{
                        position: "relative",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    >
                      <svg
                        className="star-grad"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          width: "0px",
                          height: "0px",
                          visibility: "hidden",
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="starGrad728172668605713"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="20%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="20%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="100%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg multi-widget-selected"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: 'url("#starGrad728172668605713")',
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with Bieber is very good experience for me. He’s
                    a good person. If I need developer in future, I’ll
                    definately hire him.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              style={{ width: "354px", marginRight: "28px" }}
            >
              <div className="slider-item">
                <div className="review card mt-11 p-4 md:p-5">
                  <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
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
                          padding: "100% 0px 0px",
                        }}
                      />
                      <img
                        alt="user image"
                        src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
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
                        }}
                      />
                      <noscript />
                    </span>
                  </div>
                  <h5 className="mb-0">Jonathon Doe</h5>
                  <p className="mb-2 text-body">
                    <small>Client - Envato.com</small>
                  </p>
                  <div className="review-stars mb-3">
                    <div
                      className="star-ratings"
                      title="4.2 Stars"
                      style={{
                        position: "relative",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    >
                      <svg
                        className="star-grad"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          width: "0px",
                          height: "0px",
                          visibility: "hidden",
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="starGrad811588878082510"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="20%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="20%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="100%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg multi-widget-selected"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: 'url("#starGrad811588878082510")',
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with Bieber is very good experience for me. He’s
                    a good person. If I need developer in future, I’ll
                    definately hire him.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              style={{ width: "354px", marginRight: "28px" }}
            >
              <div className="slider-item">
                <div className="review card mt-11 p-4 md:p-5">
                  <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
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
                          padding: "100% 0px 0px",
                        }}
                      />
                      <img
                        alt="user image"
                        src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
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
                        }}
                      />
                      <noscript />
                    </span>
                  </div>
                  <h5 className="mb-0">William Bieber</h5>
                  <p className="mb-2 text-body">
                    <small>Client - Envato.com</small>
                  </p>
                  <div className="review-stars mb-3">
                    <div
                      className="star-ratings"
                      title="4.7 Stars"
                      style={{
                        position: "relative",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    >
                      <svg
                        className="star-grad"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          width: "0px",
                          height: "0px",
                          visibility: "hidden",
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="starGrad589165793496057"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="70%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="70%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="100%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg multi-widget-selected"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: 'url("#starGrad589165793496057")',
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with Bieber is very good experience for me. He’s
                    a good person. If I need developer in future, I’ll
                    definately hire him.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{ width: "354px", marginRight: "28px" }}
            >
              <div className="slider-item">
                <div className="review card mt-11 p-4 md:p-5">
                  <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
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
                          padding: "100% 0px 0px",
                        }}
                      />
                      <img
                        alt="user image"
                        src="https://tf-react-bieber.vercel.app/images/user-avatar-4.png"
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
                        }}
                      />
                      <noscript />
                    </span>
                  </div>
                  <h5 className="mb-0">Bob Harry</h5>
                  <p className="mb-2 text-body">
                    <small>Client - Envato.com</small>
                  </p>
                  <div className="review-stars mb-3">
                    <div
                      className="star-ratings"
                      title="5 Stars"
                      style={{
                        position: "relative",
                        boxSizing: "border-box",
                        display: "inline-block",
                      }}
                    >
                      <svg
                        className="star-grad"
                        style={{
                          position: "absolute",
                          zIndex: 0,
                          width: "0px",
                          height: "0px",
                          visibility: "hidden",
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="starGrad777392461002405"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="0%"
                              className="stop-color-first"
                              style={{
                                stopColor: "rgb(255, 210, 51)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="0%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="100%"
                              className="stop-color-final"
                              style={{
                                stopColor: "rgb(203, 211, 227)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "18px",
                            height: "18px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 210, 51)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with Bieber is very good experience for me. He’s
                    a good person. If I need developer in future, I’ll
                    definately hire him.
                  </p>
                </div>
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
