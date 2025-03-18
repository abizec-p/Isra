import React from 'react'
import {Link} from "react-router-dom"
import "./Nav.css"
import  logo from "../assets/logo.png"

const Nav = () => {
  return (
    <section>
        <div className='nav-bar'>
            <div className='logo'>
              <img src={logo} alt="Isra Logo" />
            </div>
            <div className='menu'>
                <li><a href="home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className='call-action'><Link>Book Appointment</Link></li>

            </div>
        </div>

    </section>
  )
}

export default Nav;