import React from 'react'
import "./contact.css"
import facebook from "../assets/facebook.svg"
import insta from "../assets/insta.svg"
import youtube from "../assets/youtube.svg"

function Contact() {
  return (
    <section id='contact' className='contact-section'>
        <div className='contact'>
            <h1>Contact us</h1>
            <p>You can contact us through our phone number or our Email address.</p>
            <br />
            <li>437-12345</li>
            <li>isra@gmail.com</li>
            <li>www.isralearning.com</li>
            <div className='social-media'>

               <a href="www.facebook.com"> <img src={facebook} alt="facebook Link" /></a>
               <a href="www.instagram.com"><img src={insta} alt="instagram Link" /></a>
               <a href="www.youtube.com"> <img src={youtube} alt="youtube Link" /></a>
            </div>
        </div>
        <div className='message-box'>
            <h1>Tell us something,</h1>
            <div className='contact-form'>
                <input type="text" placeholder='Name' />
                <input type='text' placeholder='email'/>
                <textarea placeholder='Your message' ></textarea>
                <button>Send</button>

            </div>

        </div>
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.130972448367!2d-79.7365906241394!3d43.666245851587426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3fd147ec2017%3A0xecd487562860213c!2sBrampton%20Gateway%20Terminal!5e0!3m2!1sen!2sca!4v1742148257287!5m2!1sen!2sca" width="400" height="250"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
    </section>
  )
}

export default Contact