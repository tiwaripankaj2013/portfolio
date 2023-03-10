import React,{useRef} from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
const Quote = ({ id, profile, name, quote, }) => {
  return (
    <div className="slider-item">
      <div className="review card mt-11 p-4 md:p-5">
        {/* <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
          <img
            alt={name}
            src={profile}
          />
        </div> */}
        <h5 className="text-center quote-icon relative mb-4">{quote}</h5>
        
        <div className="review-stars mt-3">
          <div
            className="star-ratings"
          >
            <p className="mb-2 text-body text-right text-xs">
          {name}
        </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export const Quotes = ({ title, quotes }) => {
  const swiperRef = useRef();
  return (
    <div
      name="section-reviews"
      className="reviews-section pt-24 lg:pt-28 xl:pt-32"
    >
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase text-4xl font-bold">{title}</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
          </span>
          <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
          >
            Reviews
          </span>
        </div>
        <div className="swiper-holder">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              "467": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "768": {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              "1140": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {quotes.map((quote) => <SwiperSlide key={quote.id}><Quote {...quote} /></SwiperSlide>)}
          </Swiper>
          <button className='swiper-button-prev'onClick={() => swiperRef.current?.slidePrev()}></button>
          <button className='swiper-button-next'onClick={() => swiperRef.current?.slideNext()}></button>
        </div>
      </div>
    </div>
  )
}
