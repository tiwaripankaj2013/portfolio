import React from 'react';
import { createHashRouter, Route, } from 'react-router-dom';
import './Layout.css';
import { About } from './component/about';
import { Skills } from './component/skills';
import { Services } from './component/services';
import { Resume } from './component/resume';
import { Portfolios } from './component/portfolios';
import { Blog } from './component/blog';
import Home from './component/home';
import { Contact } from './component/contact';
import { Testimonial } from './component/testimonial';
import App from './App';
import {
  AboutData, SkillsData, ServicesData,
  ResumeData, PortfolioData, BlogData, TestimonialData,
  ContactData,
  HomeData
} from '../constant';
export const appRouter = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "home",
        element: <Home {...HomeData} />,
      },
      {
        path: "about",
        element: <About {...AboutData} />,
      },
      {
        path: "skill",
        element: <Skills {...SkillsData} />,
      },
      {
        path: "service",
        element: <Services {...ServicesData} />,
      },
      {
        path: "resume",
        element: <Resume {...ResumeData} />,
      },
      {
        path: "portfolio",
        element: <Portfolios {...PortfolioData} />,
      },
      {
        path: "blog",
        element: <Blog {...BlogData} />,
      },
      {
        path: "testimonial",
        element: <Testimonial {...TestimonialData} />,
      },
      {
        path: "contact",
        element: <Contact {...ContactData} />,
      },

    ]
  }
]);