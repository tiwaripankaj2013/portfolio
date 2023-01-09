import React from 'react';
import './Layout.css';
import { About } from '../about';
import { Skills } from '../skills';
import { Services } from '../services';
import { Resume } from '../resume';
import { Portfolios } from '../portfolios';
import { Reviews } from '../reviews';
import { Blog } from '../blog';
import Home from '../home';
import { Contact } from '../contact';
import { AboutData,SkillsData,ServicesData} from '../../../constant';
const Layout = () => {
  return (
      <main className="page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter">
        <div className="sitedata relative z-30 min-h-screen">
            <Home/>
            <About {...AboutData}/>
            <Skills {...SkillsData}/>
            <Services {...ServicesData}/>
            <Resume/>
            <Portfolios/>
            <Blog/>
            <Reviews/>
            <Contact/>
        </div>
      </main>
  )
}
export default Layout;
