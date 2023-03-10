import React,{useRef} from 'react';
import './Layout.css';
import './App.css';
import { About } from './component/about';
import { Skills } from './component/skills';
import { Services } from './component/services';
import { Resume } from './component/resume';
import { Portfolios } from './component/portfolios';
import { Blog } from './component/blog';
import Home from './component/home';
import { Contact } from './component/contact';
import { Testimonial } from './component/testimonial';
import WithNavMenu from './component/layout/WithNavMenu';
import {
  AboutData, SkillsData, ServicesData,
  ResumeData, PortfolioData, BlogData, QuotesData,
  ContactData,
  HomeData
} from '../constant';
import { Quotes } from './component/quotes';
export const ScrollApp = () => {

  const aboutRef = useRef(null)
  const scrollToAbout = () => aboutRef.current.scrollIntoView();
  return(
  <WithNavMenu selector=".scrollItem">
    <section id="home" data-nav-title="Home" className='scrollItem' data-scrollspy>
    <Home {...HomeData} scrollAbout={scrollToAbout} />
    </section>
    <section ref={aboutRef} id="about" data-nav-title="About" className='scrollItem' data-scrollspy>
    <About {...AboutData} />
    <Skills {...SkillsData} />
    </section>
    <section id="service" data-nav-title="Profile" className='scrollItem' data-scrollspy>
    <Services {...ServicesData} />
    </section>
    <section id="resume" data-nav-title="Resume" className='scrollItem' data-scrollspy>
    <Resume {...ResumeData} />
    </section>
    <section id="portfolio" data-nav-title="Portfolio" className='scrollItem' data-scrollspy>
    <Portfolios {...PortfolioData} />
    </section>
    <section id="blog" data-nav-title="Blog" className='scrollItem' data-scrollspy>
    <Blog {...BlogData} />
    </section>
    <section id="qutes" data-nav-title="Qutes" className='scrollItem' data-scrollspy>
    <Quotes {...QuotesData} />
    </section>
   {/*  <section id="testimonial" data-nav-title="Review" className='scrollItem' data-scrollspy>
    <Testimonial {...TestimonialData} />
    </section> */}
    <section  id="contact" data-nav-title="Contact" className='scrollItem' data-scrollspy>
    <Contact {...ContactData} />
    </section>
  </WithNavMenu>
  )
};