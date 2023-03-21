export const profile = require(`../portfolio/src/assets/img/profile.png`).default;
export const wynkMusic = require(`../portfolio/images/wynkMusic.png`).default;
export const wynkPodcast = require(`../portfolio/images/wynkPodcast.png`).default;
export const wynkStudio = require(`../portfolio/images/wynkStudio.png`).default;
export const emaar = require(`../portfolio/images/emaar.png`).default;
export const weil = require(`../portfolio/images/weil.png`).default;
export const linkValidator = require(`../portfolio/images/linkValidator.png`).default;
export const blog1 = require(`../portfolio/images/blog1.png`).default;
export const logo = require(`../portfolio/images/logo.svg`).default;
export const resumeLink = require(`../portfolio/images/Pankaj-Resume.pdf`).default;
export const HomeData = {
        title:'',
        name:'Pankaj Kumar Tiwari',
        profile:profile,
        introduction:'I am Pankaj Kumar Tiwari, 5+ years of experience in Frontend Developer,\nI can make your web application\n"Design-driven development for a seamless user experience"',
        role:'Frontend developer',
        linkedin:'https://www.linkedin.com/in/pankaj-kumar-tiwari-75546789/',
        github:'https://github.com/tiwaripankaj2013',
        facebook:'facebook',
        twitter:'https://twitter.com/tiwarpankaj2013',
        web:'',
}
export const AboutData = {
    heading:'About Me',
    profileImage:'https://tf-react-bieber.vercel.app/images/about-image.jpg',
    firstName:'Pankaj',
    middleName:'Kumar',
    lastName:'Tiwari',
    age:'28',
    nationality:'Indian',
    languages:['English','Hindi'],
    address:{
        houseNo:'428/1',
        city:'Lakkar Pur',
        locality:'Shiv Durga Vihar',
        district:'Faridabad',
        state:'Haryana',
        zipCode:'121003',
    },
    resumeLink:resumeLink,
}
export const SkillsData = {
    title:'my skills',
    profiles:[
        {title:'UI Developer',value:8},
        {title:'Frontend Developer',value:7},
        {title:'Web Designer',value:7},
        {title:'Html Developer',value:9},
    ],
    keySkills:[
        {title:'React Js',value:7},
        {title:'Redux',value:5},
        {title:'Html5/Css3',value:9},
        {title:'Sass/Scss',value:8},
        {title:'JavaScript',value:6.5},
        {title:'TypeScript',value:5},
        {title:'BootStrap',value:8},
        {title:'TailwindCss',value:9},
        {title:'Styled Component',value:7.5},
        {title:'StoryBook',value:7},
        {title:'AntDesign',value:8},
        {title:'Git/Github',value:9},
    ]
}
export const ServicesData = {
    title:'My Services',
    services : [
        {
            id:'1',
            title:'E-commerce',
            link:'',
            image:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="auto" height="auto" class="injected-svg" data-src="/icons/quill-pen-line.svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z"></path></svg>',
            description:'Loreum lipsum'
        },
        {
            id:'2',
            title:'Portfolio',
            link:'',
            image:'',
            description:'Loreum lipsum'
        },
        {
            id:'3',
            title:'Entertenment',
            link:'',
            image:'',
            description:'Loreum lipsum'
        }
    ]
}
export const ResumeData = {
    title :'My Resume',
    education:{
        title : 'Educational Qualification',
        type :'education',
        timlines :[
            {
                title : 'Post Graduation',
                duration:'2017-2020',
                subtitle:'MCA',
                description:'From Indra Gandhi National University New Delhi'
            },
            {
                title : 'Graduation',
                duration:'2011-2015',
                subtitle:'Mathamatic(Hon)',
                description:'From Jai Prakash Univercity Chapra Saran Bihar'
            },
            {
                title : 'InterMediate',
                duration:'2009-2011',
                subtitle:'Science',
                description:'From Bihar School Examination Board Patna'
            },
            {
                title : '10th',
                duration:'2008-2009',
                subtitle:'English,Hindi,',
                description:'From Bihar School Examination Board Patna'
            }
        ]

    },
    experience:{
        title : 'Working Experience',
        type :'working',
        timlines :[
            {
                title : 'It Analyst',
                duration:'Sep 2022 - Present',
                subtitle:'Tata consultancy Services Ltd',
                description:'Tata Consultancy Services is an IT services, consulting, and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 50 years.'
            },
            {
                title : 'UI Developer',
                duration:'Feb 2020 - Sep 2022',
                subtitle:'Wynk Ltd payrol of Bigoh Notation Pvt Ltd',
                description:'Wynk insiter company of Bharti Airtle Developed Wynk Music and Xstream App there user can listen latest song,podcast,webseries and movie'
            },
            {
                title : 'Associta UI Developer',
                duration:'May 2018 - April 2019',
                subtitle:'Edynamic Solutions Pvt Ltd (Altudo Pvt Ltd)',
                description:'Service base organisation provide it services and cunsulation'
            },
            {
                title : 'UI Developer',
                duration:'Sep 2019- Jan 2020',
                subtitle:'Traning from Thouths Pvt Ltd Payroll of Collaber Technology Pvt Ltd',
                description:'Service base organisation'
            },

        ]

    }
}
export const PortfolioData = {
    title : 'my works',
    filterMenuList:[
        {
            category : 'nextjs',
            menuTitle:'Next Js',
        },
        {
            category : 'react',
            menuTitle:'React JS',
        },
        {
            category : 'htmlCss',
            menuTitle:'Html CSS',
        }
    ],
    projects:[
        {
            id:'1',
            category : 'nextjs',
            title:'Wynk Music',
            menuTitle:'Next Js',
            link:'https://wynk.in/music',
            profile:wynkMusic,
            detail:'Wynk Limited launched in late 2015 as an innovation unit of Bharti Airtel Limited, one of Indias leading telecommunications companies. Wynk Music belongs to Airtel Digital Limited, along with Xstream Digital, a video streaming service.'
        },
        {
            id:'2',
            category : 'nextjs',
            title:'Wynk Podcast',
            menuTitle:'Next JS',
            link:'https://wynk.in/podcast',
            profile:wynkPodcast,
            detail:'Wynk Limited launched in late 2015 as an innovation unit of Bharti Airtel Limited, one of Indias leading telecommunications companies. Wynk Music belongs to Airtel Digital Limited, along with Xstream Digital, a video streaming service.'
        },
        {
            id:'3',
            category : 'react',
            title:'Wynk Studio',
            menuTitle:'React JS',
            link:'https://studio.wynk.in/',
            profile:wynkStudio,
            detail:'Wynk Limited launched in late 2015 as an innovation unit of Bharti Airtel Limited, one of Indias leading telecommunications companies. Wynk Music belongs to Airtel Digital Limited, along with Xstream Digital, a video streaming service.'
        },
        {
            id:'4',
            category : 'htmlCss',
            menuTitle:'Html CSS',
            title:'Emaar',
            link:'https://www.emaar.com/',
            profile:emaar,
            detail:'Emaar Properties is an Emirati multinational real estate development company located in the United Arab Emirates. '
        },
        {
            id:'5',
            category : 'htmlCss',
            menuTitle:'Html CSS',
            title:'Weil',
            link:'https://www.weil.com/',
            profile:weil,
            detail:'Weil, Gotshal & Manges LLP is an American international law firm with approximately 1,100 attorneys, headquartered in New York City.'
        },
        {
            id:'6',
            category : 'react',
            menuTitle:'React Js',
            title:'link Validator',
            link:'http://stagingvalidator-env-1.eba-tbavurh6.us-east-1.elasticbeanstalk.com',
            profile:linkValidator,
            detail:'LinkValidator,  Link Validator keeps track of all backlinks with a click of a button. Check all your web pages link url and user experience.'
        }
    ]
}
export const BlogData = {
    title:'My Blog',
    blogs :[
        {
           id:'1',
           title:'React 18 Project setup from scratch using webpack5',
           image:blog1, 
           link:'https://medium.com/@tiwaripankaj2013/react18-project-setup-to-webpack5-from-scratch-d2cac4c85793',
           details:'React 18 Project setup from scratch using webpack5, Project run and build custom configuration deep dive',
           date:{
            day :'6',
            month:'January',
            year:'2023',
           }
        },
        {
           id:'2',
           title:'What developer can do',
           image:'https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg', 
           link:'',
           details:'loreum lipsum',
           date:{
            day :'3',
            month:'April',
            year:'2022',
           }
        },
        {
           id:'3',
           title:'What backend developer can do',
           image:'https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg', 
           link:'',
           details:'loreum lipsum',
           date:{
            day :'1',
            month:'April',
            year:'2022',
           }
        },
        {
           id:'4',
           title:'What backend developer can do',
           image:'https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg', 
           link:'',
           details:'loreum lipsum',
           date:{
            day :'1',
            month:'April',
            year:'2022',
           }
        },
        {
           id:'5',
           title:'What backend developer can do',
           image:'https://tf-react-bieber.vercel.app/images/blog/sm/blog-image-1.jpg', 
           link:'',
           details:'loreum lipsum',
           date:{
            day :'1',
            month:'April',
            year:'2022',
           }
        },
    ]
}
export const TestimonialData = {
    title : 'CLIENT REVIEWs',
    reviews:[
        {
            id:'1',
            name:'Emma Watson',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            project:'abc',
            rating:'4.2',
            details:'Working with Bieber is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him.'
        },
        {
            id:'2',
            name:'Ravi Kumar',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            project:'abc',
            rating:'4.5',
            details:'Working with Bieber is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him.'
        },
        {
            id:'3',
            name:'Esha',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            project:'abc',
            rating:'4',
            details:'Working with Bieber is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him.'
        },
        {
            id:'4',
            name:'David Chester',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            project:'abc',
            rating:'4.8',
            details:'Working with Bieber is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him.'
        },
        {
            id:'5',
            name:'Amrita Singh',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            project:'abc',
            rating:'5',
            details:'Working with Bieber is very good experience for me. He’s a good person. If I need developer in future, I’ll definately hire him.'
        }
    ]

}

export const QuotesData = {
    title : 'Quotes',
    quotes:[
        {
            id:'1',
            name:' Steve Jobs',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'The only way to do great work is to love what you do.',
        },
        {
            id:'2',
            name:' Vidal Sassoon',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'The only place where success comes before work is in the dictionary.',
        },
        {
            id:'3',
            name:'Christian D. Larson',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
        },
        {
            id:'4',
            name:'Winston Churchill',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        },
        {
            id:'5',
            name:'C.S. Lewis',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'You are never too old to set another goal or to dream a new dream.',
        },
        {
            id:'6',
            name:'Swami Vivekananda',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'The mind is everything. What you think, you become.',
        },
        {
            id:'7',
            name:'Rabindranath Tagore',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'The power of imagination makes us infinite.',
        },
        {
            id:'8',
            name:'Kris Jamsa',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'Coding is not just code, that&prime;s why it&prime;s called software engineering.',
        },
        {
            id:'9',
            name:'Alan Kay',
            profile:'https://tf-react-bieber.vercel.app/images/user-avatar-4.png',
            quote:'The best way to predict the future is to invent it.',
        },
       
    ]

}
export const ContactData = {
    title:'Contact Us',
    subtitle:'Contact Information',
    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, iusto harum possimus non praesentium qui facere.',
    email:['tiwaripankaj2013@gmail.com','tiwaripankaj2013@yahoo.com'],
    phone:['+91-8700870328'],
    address:{
        houseNo:'428/1',
        city:'Lakkar Pur',
        locality:'Shiv Durga Vihar',
        district:'Faridabad',
        state:'Haryana',
        zipCode:'121003',
        
    }
}
export const FooterData = {
    copyRight:'© 2023, All right reserved',
    name:'Pankaj Kumar Tiwari',
    socialMedia:{
        linkedin:HomeData.linkedin,
        github:HomeData.github,
        facebook:'facebook',
        twitter:HomeData.twitter,
        web:'',
    }

}