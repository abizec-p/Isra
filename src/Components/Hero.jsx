import React from 'react'
import Nav from './Nav'
import "./hero.css"

function Hero() {
  return (
    <section id='home' className='homepage' >
        <Nav/>
        <div className='hero'>
          <div className='hero-text'>
            <h1>Your dream comes true at ISRA</h1>
            <p>French classes, immigration consultants, and many more. We are with you in your every steps.</p>
            <div>
            <button className='call-to-action'>
              <h3>Book an appointment</h3>
            </button>

            </div>
          
          </div>

        </div>

    </section>
  )
}

export default Hero