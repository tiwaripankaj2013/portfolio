import React from 'react';

const ServiceCard = ({ title, id, link, description }) => {
  return (
    <div className="col-span-3 lg:col-span-1" key={id}>
      <div className="service card hovercard relative overflow-hidden p-4 md:p-5">
        <span className="service-icon mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary bg-opacity-10 p-5 text-4xl text-primary">
          <div className="fill-current text-primary">
            {link}
          </div>
        </span>
        <h5 className=' text-lg font-medium'>{title}</h5>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export const Services = ({ title, services }) => {
  return (
    <section
      className="services-section pt-24 lg:pt-28 xl:pt-32"
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
            Services
          </span>
        </div>
        <div className="services-wrapper grid grid-cols-3 gap-7">
          {services.map((service) => <ServiceCard key={service.id} {...service} />)}
        </div>
      </div>
    </section>
  )
}
