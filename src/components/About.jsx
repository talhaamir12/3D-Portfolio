import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a first-year student pursuing a Bachelor of Applied Sciences (BASc) at the University of Waterloo. 
        I am a driven and enthusiastic individual with a passion for exploring the intersection between 
        technology and social impact.
        <p>&nbsp;</p>
        I have always had a strong academic background and a natural curiosity for problem-solving. 
        As a result, I am constantly seeking out opportunities to develop my skills and broaden my horizons. 
        Whether it's through participating in hackathons or volunteering with local non-profit organizations, 
        I am always looking for ways to apply my knowledge and expertise to create positive change 
        in my community.
        <p>&nbsp;</p>
        One thing that sets me apart is my unique perspective on the role of technology in society. 
        While many people view technology as a tool for personal convenience or entertainment, 
        I see it as a powerful force for social good. I believe that by leveraging the latest advances
        in technology, we can tackle some of the most pressing challenges facing our world today, 
        from climate change to economic inequality.
        <p>&nbsp;</p>
        Through my website, I hope to showcase my skills, accomplishments, 
        and passion for using technology to make a difference. 
        Whether you're a potential employer, collaborator, or fellow changemaker, 
        I invite you to explore my work and connect with me to learn more.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about")