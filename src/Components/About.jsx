import React from 'react'
import "./about.css"
import aboutImg from "../assets/Consulting.jpg"

function About() {
  return (
    <section id='about'>
        <div className='about-us'>
            <div className='about-text'>
                <h1>About us</h1>
                <p>At ISRA, we are committed to guiding individuals through their immigration journey with expert consulting and high-quality education. Based in Brampton, ON, we specialize in French language classes, immigration consultant diploma, and paralegal diploma programs—all designed for success in Canada. <br />
                <br />
                With 25 years of experience, we offer affordable learning and professional guidance to help you achieve your career and immigration goals. Whether you're preparing for a new life in Canada or advancing your legal expertise, ISRA is here to support you every step of the way. <br />   
                📞 Get in touch today and take the first step toward your future!</p>

        </div>
        <div className='about-img'>
            <img src={aboutImg} alt="about-us-isra" />
        </div>
        </div>

    </section>
  )
}

export default About;