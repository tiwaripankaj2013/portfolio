import React,{useState} from 'react';
const TabMenu = ({ menuItems,filterItem }) => {
  return (
    <div className="portfolio-filters flex flex-wrap justify-center gap-4">
      <button className="btn btn-small" onClick={()=>filterItem('all')}><span>All</span></button>
      {menuItems.map((item) => {
        return (<button key={item.category} className="btn btn-small" onClick={()=> filterItem(item.category)}>
          <span>{item.menuTitle}</span>
        </button>)
      })}
    </div>
  )   
}

const ProjectItem = ({ title, link, profile, detail}) => {
  return (
    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
      <div className="portfolio card hovercard group p-4 md:p-5">
        <div className="portfolio-top relative overflow-hidden">
          <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
            <img
              alt={title}
              src={profile}
            />
          </div>
          <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-grey bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
            <button className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey">
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
                  <path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </g>
              </svg>
            </button>
            <a
              target="_blank"
              className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey"
              href={link}
            >
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
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="portfolio-content mt-4">
          <h5 className="mb-0">{title}</h5>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  )
}
export const Portfolios = ({ title,projects,filterMenuList }) => {
  const [category, setCategory] = useState("all");
  const handleFilterClick = (category) => {
    setCategory(category);
  };
  const projectsFilter = category === "all" ? projects : projects.filter((project) => project.category === category);

  return (
    <div
      className="portfolios-section pt-24 lg:pt-28 xl:pt-32"
    >
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase text-4xl font-bold">{title}</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            Works
          </span>
        </div>
        {/* tab menu */}
        <TabMenu menuItems={filterMenuList} filterItem={handleFilterClick} />
        <div className="mt-12 grid grid-cols-6 gap-7">
          {projectsFilter.map((project,index) => <ProjectItem key={project.id} {...project} />)}
        </div>
        <div className="mt-12 text-center">
          <button className="btn btn-small">
            <span>Load More</span>
          </button>
        </div>
      </div>
    </div>
  )
}
