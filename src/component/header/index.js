import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <header className="header top-0 left-0 z-50 h-auto w-full fixed animate-slidedown border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter">
            <div className="container mx-auto px-4">
                <div className="header-inner flex items-center justify-between">
                    <Link className="sitelogo py-2" to="/">
                        <img
                            className="h-8 max-h-full w-auto"
                            src="https://tf-react-bieber.vercel.app/images/logo.png"
                            alt="Bieber"
                        />
                    </Link>
                    <div className="header-mobilenav block lg:hidden">
                        <button className="btn btn-small btn-transparent px-3 text-3xl">
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
                                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="header-nav hidden lg:block">
                        <nav className="flex-grow px-5 text-center">
                            <ul className="mb-0 inline-flex list-none gap-7 pl-0">
                                <li className="inline-block align-middle">
                                    <Link to="/home" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary active:text-primary">
                                        Home
                                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                                    </Link>
                                </li>
                                <li className="inline-block align-middle">
                                    <Link to="/about" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                                        About
                                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                                    </Link>
                                </li>
                                <li className="inline-block align-middle">
                                    <Link to="/resume" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                                        Resume
                                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                                    </Link>
                                </li>
                                <li className="inline-block align-middle">
                                    <Link to="/portfolio" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                                        Portfolio
                                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                                    </Link>
                                </li>
                                <li className="inline-block align-middle">
                                    <Link to="/blog"
                                        className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                                        
                                    >
                                        Blog
                                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                                    </Link>
                                </li>
                                <li className="inline-block align-middle">
                                    <Link to="/contact" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                                        Contact
                                        <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-button hidden lg:block">
                        <Link to="" className="btn">
                            <span>Hire Me</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
