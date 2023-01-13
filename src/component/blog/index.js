import React,{useRef,useState} from 'react';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import './Blog.css';
import 'swiper/css';
import 'swiper/css/navigation';
const BlogItem = ({ title, link, image, date, details }) => {

  return (
    <div className="slider-item">
      <article className="blog card p-4 md:p-5">
        <div className="blog-top relative mb-4">
          <a
            className="fiximage hover-scale block"
            title={title}
            href={link}
          >
            <img
              alt="Blog Image"
              src={image}
            />
          </a>
          <div className="blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey">
            <span className="month block text-sm uppercase leading-none">
              {date.month}
            </span>
            <span className="date block text-2xl leading-none">
              {date.day}
            </span>
            <span className="year block text-sm leading-none">
              {date.year}
            </span>
          </div>
        </div>
        <h5 className="mb-0">
          <a
            className=" block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary"
            title="What designer can do"
            href={link}
          >
            {title}
          </a>
        </h5>
        <div className="flex list-none gap-1.5 text-sm">
          <span className="after:content-[','] last:after:hidden">
            {details}
          </span>
        </div>
      </article>
    </div>
  )
}
export const Blog = ({ title, blogs }) => {
  return (
    <div name="section-blog" className="news-section pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase text-4xl font-bold">{title}</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
          >
            Blogs
          </span>
        </div>
        <div className='swiper-holder'>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
          >
            {blogs.map((blog) => <SwiperSlide key={blog.id}><BlogItem  {...blog} /></SwiperSlide>)}
          </Swiper>
          <button className='swiper-button-prev' >Prev</button>
          <button className='swiper-button-next'>Next</button>
        </div>
      </div>
    </div>
  )
}