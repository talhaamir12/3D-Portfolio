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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
import flowboat_logo from "../assets/company/flowboat_logo.png"
import stride_logo from "../assets/company/stride_logo.png";
import University_of_Waterloo_seal from "../assets/company/University_of_Waterloo_seal.png";
import hushlogo from "../assets/company/hushlogo.png";

import theia_landing from "../assets/company/theia_landing.png";
import ts_test from "../assets/company/ts_test.png";
import ss_gamee from "../assets/company/ss_gamee.png"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "Engineer",
      icon: mobile,
    },
    {
      title: "Entrepreneur",
      icon: backend,
    },
    {
      title: "Graphic Designer",
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
      name: "React JS",
      icon: reactjs,
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
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Member",
      company_name: "Flowboat",
      icon: flowboat_logo,
      iconBg: "#E6DEDD",
      date: "October 2020 - May 2022",
      points: [
        "Created a platform called Stride that allows athletes of any skill level to join/create recreational sports games within their local community with ease.",
        "Semi Finalists in the International Diamond Challenge Pitching Competition, where we pitched our startup to judges and investors.",
        "Won 3rd Place in the Flowboat Annual Pitching Competition.",
      ],
    },
    {
      title: "Co-Founder",
      company_name: "Stride",
      icon: stride_logo,
      iconBg: "#000000",
      date: "January 2021 - February 2022",
      points: [
        "Co-founded and launched Stride, an online platform connecting athletes for recreational sports games. Developed the product concept, value proposition, and go-to-market strategy.",
        "Conducted extensive market research to identify target user demographics, preferences, and behaviors. Analyzed competition, market trends, and user feedback to guide product development and marketing decisions.",
        "Designed the architecture and functionality of the Stride web application using HTML, CSS, and JavaScript. Managed product backlog and prioritized features using Agile methodologies.",

      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Hush Audiologies",
      icon: hushlogo,
      iconBg: "#E6DEDD",
      date: "May 2022 - August 2022",
      points: [
        "Developed and maintained the company's website using HTML, CSS, and JavaScript. Designed and implemented user-friendly interfaces and responsive layouts to optimize the user experience.",
        "Conducted website analytics and created reports to analyze user behavior and optimize website performance. Used tools like Google Analytics to identify trends and insights to improve the website's user experience and conversions.",
        "Implemented a visually compelling and responsive design while ensuring seamless cross-browser compatibility.",

      ],
    },
    {
      title: "Project Team Leader - We Accelerate",
      company_name: "University of Waterloo",
      icon: University_of_Waterloo_seal,
      iconBg: "#E6DEDD",
      date: "January 2023 - April 2023",
      points: [
        "Developed and implemented a caregiver support program for individuals managing complex illnesses, leveraging strong communication and collaboration skills to coordinate with healthcare professionals.",
        "Conducted comprehensive evaluations of existing care plans for patients with complex illnesses, identifying areas for improvement and advising on best practices, which contributed to a 15% decrease in hospital readmissions and enhanced quality of life for patients and their families.",
        "Coordinated and supervised a multidisciplinary team focused on addressing the unique challenges of complex illness management, fostering a collaborative environment that encouraged knowledge-sharing and innovative problem-solving, resulting in the successful completion of two pilot programs and expansion to additional communities.",
        "Obtained proficiency in Microsoft Azure and Azure AI fundamentals.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Theia",
      url: "theiaocular.herokuapp.com" ,
      description:
        "This web application is able to analyze a fundus photograph of a patients eye, and returns a bar graph containing the likelyhood of the patient having an ocular disease.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "text-yellow-300",
        },
      ],
      image: theia_landing,
      source_code_link: "https://github.com/talhaamir12/Theia",
    },
    {
      name: "Typing Speed Test",
      url: "https://replit.com/@Amirix/Final-Project-Typing-Speed-Test",
      description:
        "This typing speed game is a user-friendly tool to measure and improve typing skills. Users type out a random passage and get their WPM and accuracy percentage.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
          
        },
        {
          name: "Pygame",
          color: "blue-text-gradient"
        },

      ],
      image: ts_test,
      source_code_link: "https://github.com/talhaamir12/Typing-Speed-Test",
    },
    {
      name: "2048",
      url: "https://talhaamir12.github.io/2048/",
      description:
        "A simple 2048 game with HTML, CSS, and JavaScript, and a dark theme and different tile colours. The maximum number that can be displayed is 65536.",
      tags: [
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
          
        },

        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
      image: ss_gamee,
      source_code_link: "https://github.com/talhaamir12/2048",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  