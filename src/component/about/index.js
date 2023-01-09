import React from 'react';
import './About.css';
export const About = ({
  heading,profileImage,firstName, middleName,
  lastName,address,age,languages,nationality}) => {
  return (
    <section
    className="about-section pt-24 lg:pt-28 xl:pt-32"
  >
    <div className="container mx-auto">
      <div className="section-heading relative overflow-hidden pb-14 text-center">
        <h2 className="relative z-10 mb-2 uppercase text-4xl font-bold">{heading}</h2>
        <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
          <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
        </span>
        <span
          className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
          style={{ willChange: "transform" }}
        >
          About
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-7">
        <div className="col-span-2 lg:col-span-1">
          <div
            className="about-image overflow-hidden rounded-lg"
            data-projection-id={31}
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="about-image-inner fiximage relative border-[10px] border-primary border-opacity-20">
              <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary" />
              <span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent" />
              <span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary" />
              <span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary" />
              
                <img
                  alt={firstName+' '+lastName}
                  src={profileImage}
                  decoding="async"
                  data-nimg="responsive"
                />
                
              
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div
            className="about-content"
            data-projection-id={32}
            style={{ opacity: 1, transform: "none" }}
          >
            <h3>
              Hi, I am <span className="text-primary">{firstName+' '+middleName+' '+lastName}</span>
            </h3>
            <ul className="styledlist">
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  First Name{" "}
                </strong>
                : {firstName}
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Last Name{" "}
                </strong>
                : {lastName}
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Age{" "}
                </strong>
                : {age} years
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Nationality{" "}
                </strong>
                : {nationality}
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Languages{" "}
                </strong>
                : {languages.join(',')}
              </li>
              <li className="text-lg flex">
                <strong className="inline-block min-w-[120px] font-medium">
                  Address{" "}
                </strong>
                : <span>&nbsp;{address.houseNo+', '+address.city+', '+address.locality+
                  address.district+', '+address.state+', '+address.zipCode}</span>
                
              </li>
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Freelance{" "}
                </strong>
                : Available
              </li>
            </ul>
            <a href="/resume.pdf" className="btn mt-3">
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
