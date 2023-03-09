import React,{useEffect,useState} from 'react';
import './Skills.css';

const ProfileSkillCard = ({ title, value }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (percentage < value*10) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [percentage]);
  let stroke = percentage/100;
  return(
  <div
    className="col-span-4 sm:col-span-2 lg:col-span-1"
  >
    <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
      <div className="relative mb-2 inline-block text-primary">
        <svg
          className="circle"
          width={120}
          height={120}
          viewBox="0 0 120 120"
          data-projection-id={34}
        >
          <circle
            className="circlebg"
            cx={60}
            cy={60}
            r={54}
            pathLength={1}
            strokeLinecap="round"
            strokeWidth={12}
            data-projection-id={35}
          />
          <circle
            cx={60}
            cy={60}
            r={54}
            strokeLinecap="round"
            strokeWidth={12}
            opacity={1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray={`${stroke}px`}

          />
        </svg>
        <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-body">
          {percentage}%
        </span>
      </div>
      <h5>{title}</h5>
    </div>
  </div>
  )
}
const ProgressBar = ({ title, value }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (percentage < value*10) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(timer);
      }
    }, 15);

    return () => clearInterval(timer);
  }, [percentage]);
  return (
    <div
      className="col-span-2 md:col-span-1"
    >
      <div className="progress">
        <h5>
          {title} - <span className="text-primary">({percentage}%)</span>
        </h5>
        <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
          <span
            className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
            data-projection-id={50}
            style={{
              width: `${percentage}%`,
              transform: "none",
              transformOrigin: "0% 50% 0px",
            }}
          />
        </div>
      </div>
    </div>
  )
}
export const Skills = ({ title, profiles, keySkills }) => {
  return (
    <section
      className="skills-section pt-24 lg:pt-28 xl:pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase text-4xl font-bold">{title}</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary" />
          </span>
          <span
            className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            Skills
          </span>
        </div>
        <div className="skills-wrapper">
          <div className="grid grid-cols-4 gap-7">
            {profiles.map((profile) => <ProfileSkillCard key={profile.title} {...profile} />) }
          </div>
          <div className="py-7" />
          <div className="grid grid-cols-3 gap-7">
            {keySkills.map((skill) => <ProgressBar key={skill.title} {...skill} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
