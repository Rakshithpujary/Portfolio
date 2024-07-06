import React from 'react';
import '../css/AboutPage.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronDown } from "react-icons/fa";
import { SiLinkedin,SiGmail } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { SocialIcon } from 'react-social-icons';

const AboutPage = () => {
    return (
        <div className="AboutPage-main-div">
            <div className='AboutPage-content-div'>
                <div className='AboutPage-sub1-div'>
                <h6>INTRODUCTION</h6>
                <h1>Overview.</h1>
                <p>Hello there! 👋 I'm Rakshith, an enthusiastic MCA student from Manipal Institute of Technology (MIT), eager to delve deeper into the realms of technology. With hands-on experience in full-stack development and a passion for AI/ML, I am excited to bring my skills in the MERN stack, JWT authentication, and AI/ML projects using Python, Gemini API, and ChatGPT API to a dynamic development role.
                    <br/><br/>Explore my portfolio to see my journey and the innovative projects I've worked on. I am keen on joining a forward-thinking team where I can contribute to cutting-edge projects and grow alongside experienced professionals.
                    <br/><br/>Let's innovate and create a brighter future together! 🚀</p>
                    <div className='button-div'>
                    <button className='Skill-button'>Skills <FaChevronDown/></button>
                    <button className='Resume-button'>My Resume</button>
                    </div>

                </div>
                <div className='AboutPage-sub2-div'>
                <img src="/assets/personal-image.png" alt='Photo is not displaying'/>
                </div>

            </div>
            <div className='Contact-div'>
                <h1>Contact.</h1>
                <div className='icon-div'>
                    <SocialIcon url="mailto:rakshithpoojary248@gmail.com" network="email" title="Gmail" style={{ height: 30, width: 30 }} />
                    <SocialIcon url="https://www.linkedin.com/in/rakshith-poojary-385587235/" target="_blank" title="LinkedIn" style={{ height: 30, width: 30 }} />
                    <SocialIcon url="https://github.com/Rakshithpujary" target="_blank" title="GitHub" style={{ height: 30, width: 30 }} />
                    <SocialIcon url="https://www.instagram.com/pujari_rakshith/?hl=en" target="_blank" title="Instagram" style={{ height: 30, width: 30 }} />
                </div>
                
            </div>
        </div>
    );
}

export default AboutPage;
