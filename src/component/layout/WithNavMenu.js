import React, { useLayoutEffect, useState } from 'react';
import './Header.css';
import {logo,FooterData} from '../../../constant';
import { ScrollSpy, onScrollUpdate } from '../../ScrollSpy';
import { Footer } from '../footer';
const Header = ({ options }) => {
  const onClick = (e) => {
    e.preventDefault();
    // Set the hash
    window.location.hash = e.target.hash;

    // Scroll to the section + 1 to account for weird bug.
    // remove the `+1` and click on Section 2 link to see the bug.
    const targetSection = document.querySelector(`${e.target.hash}`);
    window.scrollTo(0, targetSection.offsetTop);
  };
  const [showMobMenu,setShowMobMenu] = useState(false)
  const showMenu = ()=> {
    setShowMobMenu(!showMobMenu);
  }
  return (
    <header className="header top-0 left-0 z-50 h-auto w-full fixed animate-slidedown border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter">
      <div className="container mx-auto px-4">
        <div className="header-inner flex items-center justify-between">
          <a className="sitelogo" to="/">
            <img
              className="h-8 max-h-full w-36"
              src={logo}
              alt="Pankaj Kumar Tiwari"
            />
            
          </a>
          <div className="header-mobilenav block lg:hidden">
          <a href="#contact" className="btn btn-hire">
              <span>Hire Me</span>
            </a>
            <button className="btn btn-small btn-transparent px-3 text-3xl" onClick={showMenu}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              ><g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                </g>
              </svg>
            </button>
          </div>
          <div className="header-nav lg:block">
            <nav className="flex-grow px-5 text-center">
              <ul className={ showMobMenu ?' flex menu-list':'hidden menu-list'}>
                {options.map((option) => (
                  <li key={option.hash} className="md:inline-block align-middle text-left">
                    <a href={`#${option.hash}`} onClick={onClick} data-scrollspy-id={option.hash}
                      className="group relative md:inline-block block text-left cursor-pointer md:py-6 py-2 text-sm font-medium uppercase tracking-wider text-heading before:text-primary active:text-primary">
                      {option.title}
                      <span className="absolute left-0 top-auto md:bottom-5 bottom-2 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header-button hidden lg:block">
            <a href="#contact" className="btn">
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}



const WithNavMenu = ({ children, selector }) => {
  const [options, setOptions] = useState([]);
  useLayoutEffect(() => {
    const navMenuSections = document.querySelectorAll(selector);
    const optionsFromSections = Array.from(navMenuSections).map((section) => {
      return {
        hash: section.id,
        title: section.dataset.navTitle
      };
    });
    setOptions(optionsFromSections);
  }, [selector]);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="wrapper relative min-h-screen w-full bg-grey blurredBg">
      <ScrollSpy handleScroll={onScrollUpdate} />
      <Header options={options}  />
      <main className="page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter">
        <div className="sitedata relative z-30 min-h-screen">
          {children}
        </div>
        <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
      </main>
      <Footer {...FooterData} />
      <button className="btn btn-goTo-top fixed bottom-12 top-auto right-7 z-30 rounded-full p-2.5 text-xl" onClick={scrollTop}>
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
              <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
            </g>
          </svg>
        </button>
    </div>

  )
}

export default WithNavMenu;