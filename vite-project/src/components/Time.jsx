import React from 'react';
import './Time.css'; // Import your CSS file
import logo1 from './Images/Ellipse 1.png'
import { motion } from "framer-motion"


function Time() {
  return (
    <div>
      <div className="head-title">
        <h1>About Us</h1>
      </div>


        <div className="timeline">
        <motion.div initial={{x:-1000}} whileInView={{ x: -650 }}>
          <div className="checkpoint left-container"/>
          <img className="image1" src={logo1} alt="logo" />
            <div className='text-box'>
              <h2>Who are we?</h2>
              <p>
                At To-Let, we are more than just property managers – we are dedicated partners in your property management journey. Established with a commitment to redefining the standards of property management, To-Let brings a wealth of expertise to the dynamic property management landscape.
              </p>
              <span className='left-container-arrow'></span>
            </div>
            </motion.div>
          </div>

        <motion.div  initial={{x:700}} whileInView={{x:500}}>
          <div className="checkpoint right-container">
          <img className="image1" src={logo1} alt="logo" />
            <div className='text-box'>
              <h2>Our Journey</h2>
              <p>
                Since our inception, we have been at the forefront of delivering exceptional property management solutions. With a foundation built on integrity, transparency, and client-centric values, To-Let has steadily grown to become a trusted name in the industry.
              </p>
              <span className='right-container-arrow'></span>
            </div>
            </div>
            </motion.div>
          
        <motion.div initial={{x:-1000}} whileInView={{ x: -650 }}>
          <div className="checkpoint left-container">
          <img className="image1" src={logo1} alt="logo" />
            <div className='text-box'>
              <h2>Mission and Vision</h2>
              <p>
                Our mission is to simplify and elevate the property management experience for property owners and tenants alike. We envision a future where seamless, efficient, and client-focused property management is the norm.
              </p>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          </motion.div>

          <motion.div  initial={{x:700}} whileInView={{x:500}}>
          <div className="checkpoint right-container">
          <img className="image1" src={logo1} alt="logo" />
            <div className='text-box'>
              <h2>Services we offer</h2>
              <p>
                To-Let specializes in a comprehensive suite of property management services, including property leasing, tenant screening, rent collection, property maintenance, and the provision of PGs (Pay Guest) and flats for rent. Our tailored solutions cater to the unique needs of each property under our care.
              </p>
              <span className='right-container-arrow'></span>
            </div>
          </div>
          </motion.div>

          <motion.div initial={{x:-1000}} whileInView={{ x: -650 }}>
          <div className="checkpoint left-container">
          <img className="image1" src={logo1} alt="logo" />
            <div className='text-box'>
              <h2>Client-Centric Approach</h2>
              <p>
                What sets To-Let apart is our unwavering dedication to client satisfaction. We prioritize open communication, timely responses, and a proactive approach to address the diverse needs of property owners and tenants.
              </p>
              <span className='left-container-arrow'></span>
            </div>
          </div>
        </motion.div>

        <motion.div  initial={{x:700}} whileInView={{x:500}}>
          <div className="checkpoint right-container">
          <img className="image1" src={logo1} alt="logo" />
            <div className='text-box'>
              <h2>Expert Team</h2>
              <p>
                Our team consists of seasoned professionals with in-depth knowledge of the property management industry. From property managers to maintenance experts, each member of the To-Let team is committed to ensuring the optimal performance and value of your property.
              </p>
              <span className='right-container-arrow'></span>
            </div>
          </div>
          </motion.div>
        </div>
       
    
  );
}

export default Time;
