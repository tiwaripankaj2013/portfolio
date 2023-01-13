import React from 'react';
import './Layout.css';
import { About } from '../about';
import { Skills } from '../skills';
import { Services } from '../services';
import { Resume } from '../resume';
import { Portfolios } from '../portfolios';
import { Blog } from '../blog';
import Home from '../home';
import { Contact } from '../contact';
import {Testimonial} from '../testimonial'
import { AboutData,SkillsData,ServicesData,
         ResumeData, PortfolioData,BlogData, TestimonialData,
        ContactData,
        HomeData} from '../../../constant';
const Layout = () => {
  return (
      <main className="page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter">
        <div className="sitedata relative z-30 min-h-screen">
            <Home {...HomeData}/>
            <About {...AboutData}/>
            <Skills {...SkillsData}/>
            <Services {...ServicesData}/>
            <Resume {...ResumeData}/>
            <Portfolios {...PortfolioData}/>
            <Blog {...BlogData}/>
            <Testimonial {...TestimonialData} />
            <Contact {...ContactData}/>
        </div>
      </main>
  )
}
export default Layout;
