import React from 'react';
import { Header } from './component/header';
import './App.css';
import './Layout.css';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div className="wrapper relative min-h-screen w-full bg-grey blurredBg">
      <Header />
      <main className="page-content relative bg-grey bg-opacity-95 backdrop-blur-lg backdrop-filter">
        <div className="sitedata relative z-30 min-h-screen">
          <Outlet />
        </div>
      </main>
      <button
        className="btn fixed bottom-12 left-auto top-auto right-7 z-30 rounded-full p-2.5 text-xl">
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

export default App;