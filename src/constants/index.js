import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    onlinestore,
    shareme,
    crowdfunding,
    lyriks,
    threejs,
    school,
    self,
    youtube
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "journey",
      title: "Journey",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Collaborator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Java",
      company_name: "School",
      icon: school,
      iconBg: "#383E56",
      date: "November 2018",
      points: [
        "First hands on experience in programming world",
        "Wrote basic code to get familiar with programming and coding",
        "Learned object oriented programming concepts such as inheritance, polymorphism, abstraction, etc.",
      ],
    },
    {
      title: "HTML, CSS, PHP",
      company_name: "School",
      icon: school,
      iconBg: "#E6DEDD",
      date: "May 2019",
      points: [
        "First experience with web development concepts",
        "Made web projects, front-end and back-end",
        "Tech stack used were; HTML, Bootstrap CSS, PHP, SQL",
      ],
    },
    {
      title: "Data Stuctures and Algorithms",
      company_name: "school",
      icon: school,
      iconBg: "#383E56",
      date: "June 2020",
      points: [
        "Learned the fundamentals of algorithms and Data stuctures",
        "Discovered how to solve problems and think for my self in critical situations",
        "Mastered solving algorithms and data structures during the covid-19 pandemic lockdown",
        "Was proceeding school calendar through e-learning",
      ],
    },
    {
      title: "Javascript",
      company_name: "Self",
      icon: self,
      iconBg: "#E6DEDD",
      date: "Jan 2021",
      points: [
        "Took steps forward in web dev, sharpening front-end skills",
        "Gathered information from e-books, YouTube, and boot camps",
        "Started looking at frameworks like p5.js along the learning process",
        "Web development became a hobby",
      ],
    },
    {
      title: "Fullstack development with frameworks",
      company_name: "YouTube",
      icon: youtube,
      iconBg: "#E6DEDD",
      date: "June 2021",
      points: [
        "Discovered React.js, tailwind css, and firebase from a course by Karl Hadwen on YT",
        "Explored even more techs to improve my abilities",
        "Learned coding best practices, more algorithms, project collaborations on github",
        "Learned how to build a tech stack for a project in 2023",
        "Been going through burnouts but still go through various documentations of different technologies, and doing some algorithms on leetcode",
      ],
    },
  ];
  
  const quotes = [
    {
      quote:
        "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
      name: "Mark Zuckerberg",
      designation: "CFO",
      company: "Facebook",
      image: "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
    },
    {
      quote:
        "The Internet is becoming the town square for the global village of tomorrow.",
      name: "Bill Gates",
      designation: "CFO",
      company: "Microsoft",
      image: "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
    },
    {
      quote:
        "Always deliver more than expected.",
      name: "Larry Page",
      designation: "CFO",
      company: "Google",
      image: "https://cdn.britannica.com/17/101217-050-89474964/Larry-Page-Sergey-Brin.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ResumeIQ",
      description:
        "A web application that uses AI to analyze your resume for a job you are applying for and gives you ATS score and feedback with recommendations of areas you need to improve for your resume to stand out.",
      tags: [
        {
          name: "React.JS",
          color: "blue-text-gradient",
        },
        {
          name: "Puter.js",
          color: "skyblue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: onlinestore,
      source_code_link: "https://github.com/xProfanity/resumeiq.git",
      project_link: "https://resumeiq-chi.vercel.app/",
    },
    {
      name: "Share me",
      description:
        "A social web application where google authenticated users post various pictures and interact with other pictures posted by others, displayed in a masonry layout, with comments, likes, downloading ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity.io",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "googleAuth",
          color: "blue-text-gradient",
        },
        {
          name: "masonrylayout",
          color: "green-text-gradient",
        },
      ],
      image: shareme,
      source_code_link: "https://github.com/Got-crypto/afk-shareme-app.git",
      project_link: "https://shareme-afk.netlify.app/",
    },
    {
      name: "Web3 Crowdfunding",
      description:
        "A Web3 platform web app with blockchain technology for crowdfunding, fundraising in the blockchain technology. This is a dApp, decentralized app, where individuals from around the globe can contribute securely, and be part of a vibrant community driving impactful projects forward.",
      tags: [
        {
          name: "thirdweb",
          color: "blue-text-gradient",
        },
        {
          name: "vite.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
      ],
      image: crowdfunding,
      source_code_link: "https://github.com/Got-crypto/afk-crowdfunding.git",
      project_link: "https://crowdfunding-afk.netlify.app/",
    },
    {
      name: "Lyriks",
      description:
        "Discover top tracks on Lyricks and listen to their snippets. With Shazam API get song of different categories including ones around you.",
      tags: [
        {
          name: "RapidAPI",
          color: "blue-text-gradient",
        },
        {
          name: "vite.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Shazam",
          color: "green-text-gradient",
        },
      ],
      image: lyriks,
      source_code_link: "https://github.com/Got-crypto/lyriks-shazam.git",
      project_link: "https://lyriks-shazam.vercel.app",
    },
  ];
  
  export { services, technologies, experiences, quotes, projects };
  
